"use client";
import { useDictionary, useLang } from "@/contexts/dictionary-provider";
import {
  useDocumentsData,
  useSetYear,
  useYearSelected,
  useFetchingState,
} from "@/contexts/document-data-provider";
import ListBox from "@/components/listbox";
import { generateYearRanges } from "@/lib/utils";
import { GroupTabs, TabsContainer, Tab } from "@/components/tabs";
import DocumentsList from "@/components/document-list";
import OrderSelector from "@/components/order-selector";
import type { OrderCriteria, OrderCriteriaMap } from "@/lib/types";
import { useState } from "react";
import Scrollable from "@/components/scrollable";
import DocumentsSkeleton from "@/components/documents-skeleton";
import { AnimatePresence, motion } from "motion/react";
import { shortLocale } from "@/lib/locale";

interface OrderLabels {
  dateDesc: string;
  dateAsc: string;
  titleAsc: string;
  titleDesc: string;
}

const createOrderCriterias = (
  labels: OrderLabels,
  lang: "pt" | "en",
): OrderCriteriaMap => ({
  "date-desc": {
    value: "date-desc",
    label: labels.dateDesc,
    sort: (a, b) =>
      new Date(b.publication_date).getTime() -
      new Date(a.publication_date).getTime(),
  },
  "date-asc": {
    value: "date-asc",
    label: labels.dateAsc,
    sort: (a, b) =>
      new Date(a.publication_date).getTime() -
      new Date(b.publication_date).getTime(),
  },
  "title-asc": {
    value: "title-asc",
    label: labels.titleAsc,
    sort: (a, b) =>
      (a.title?.[lang] ?? "").localeCompare(b.title?.[lang] ?? ""),
  },
  "title-desc": {
    value: "title-desc",
    label: labels.titleDesc,
    sort: (a, b) =>
      (b.title?.[lang] ?? "").localeCompare(a.title?.[lang] ?? ""),
  },
});

export default function Documents() {
  const isLoading = useFetchingState();
  const dict = useDictionary();
  const docs = useDocumentsData();
  const lang = shortLocale(useLang());
  const yearSelected = useYearSelected();
  const defaultYearRange = process.env.NEXT_PUBLIC_CURRENT_MANDATE!;
  const setYear = useSetYear();
  const yearRanges = generateYearRanges(
    1995,
    parseInt(defaultYearRange.split("-")[0]!, 10),
  );
  const categories = [...new Set(docs.flatMap((x) => x.categories))];
  const orderCriterias = createOrderCriterias(dict.documents.order, lang);
  const [order, setOrder] = useState<OrderCriteria>(
    orderCriterias["date-desc"]!,
  );
  return (
    <main>
      <div className="layout-p-t">
        <GroupTabs defaultTab="all" layoutId="document-categories">
          <div className="layout-p-x mb-10 flex w-fit flex-col justify-between gap-5  sm:justify-normal md:flex-row">
            <h1 className="font-title text-3xl font-medium">
              {dict.documents.title}
            </h1>
            <div className="mt-1">
              <ListBox
                options={yearRanges}
                defaultOption={defaultYearRange}
                defaultOptionText={dict.documents.team_selector.default_option}
                hint={dict.documents.team_selector.hint}
                currentOption={yearSelected}
                setCurrentOption={setYear}
              />
            </div>
          </div>
          <div className="layout-p-x  flex flex-col justify-between gap-3 md:flex-row">
            <TabsContainer className="min-w-0 flex-1">
              <Scrollable overflows className="w-full">
                <div className="flex w-max flex-row">
                  <Tab
                    name={dict.documents.allDocs}
                    icon="description"
                    refTo="all"
                  />
                  {categories.map((category) => (
                    <Tab
                      key={category}
                      name={category}
                      icon="description"
                      refTo={category}
                    />
                  ))}
                </div>
              </Scrollable>
            </TabsContainer>
            <OrderSelector
              order={order}
              orderCriterias={orderCriterias}
              setOrder={setOrder}
              className="shrink-0"
            />
          </div>
          <div className="w-full border-t border-stroke" />
          <div className="layout-p-x bg-white pb-10">
            <AnimatePresence mode="wait" initial={false}>
              {isLoading ? (
                <motion.div
                  key="documents-skeleton"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <DocumentsSkeleton />
                </motion.div>
              ) : (
                <motion.div
                  key="documents-list"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <DocumentsList documents={docs} order={order} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </GroupTabs>
      </div>
    </main>
  );
}
