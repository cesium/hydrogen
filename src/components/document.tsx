"use client";

import type { DocumentData } from "@/lib/types";
import { useState } from "react";
import Button from "@/components/button";
import { useDictionary, useLang } from "@/contexts/dictionary-provider";
import Scrollable from "./scrollable";
import { shortLocale } from "@/lib/locale";

export default function Document({
  title,
  publication_date,
  description,
  categories,
  documentUrl,
}: DocumentData) {
  const lang = shortLocale(useLang());
  const [seeMore, setSeeMore] = useState<boolean>(false);

  const dict = useDictionary();
  const docs_dict = dict.documents;

  const displayTitle =
    typeof title === "string" ? title : (title?.[lang] ?? title?.pt ?? "");

  return (
    <div className="my-auto grid w-full grid-cols-1 border-b border-stroke py-5 md:grid-cols-[1fr_auto]">
      <div className="flex min-w-0 flex-row gap-4 md:col-start-1 md:row-start-1">
        <div className="flex h-auto w-16 items-center text-gray">
          <span className="material-symbols-outlined text-6xl">
            insert_drive_file
          </span>
        </div>
        <div className="flex min-w-0 flex-col items-start justify-center object-center">
          <div className="text-gray-900 mb-1 line-clamp-2 text-base font-bold leading-tight">
            {displayTitle}
          </div>
          <div className="text-gray-500 flex w-full min-w-0 flex-col items-center gap-1 text-sm md:flex-row">
            <div className="my-1 flex items-center py-0.5">
              <span className="material-symbols-outlined mr-1 text-[18px]">
                calendar_month
              </span>
              <span>{publication_date}</span>
            </div>
            <Scrollable overflows className="w-full min-w-0">
              <div className="my-1 flex w-max flex-row flex-nowrap justify-start">
                {categories.map((element, index) => (
                  <span
                    key={index}
                    className="mr-2 flex rounded-full bg-stroke px-2 py-0.5 text-gray md:ml-2 md:mr-0"
                  >
                    {element}
                  </span>
                ))}
              </div>
            </Scrollable>
          </div>
        </div>
      </div>
      <div className="row-start-3 mt-2 flex flex-row items-center justify-start gap-2 md:col-start-2 md:row-start-1 md:mt-0 md:justify-end md:gap-3">
        <div>
          <Button
            title={docs_dict.download}
            style="style3"
            color="primary"
            as="link"
            href={documentUrl}
            icon="download"
            isDownload={true}
            downloadTitle={displayTitle}
            className="text-sm md:text-base"
          />
        </div>
        <div>
          <Button
            title={seeMore ? docs_dict.seeLess : docs_dict.seeMore}
            style="style1"
            color="primary"
            as="button"
            onClick={() => setSeeMore(!seeMore)}
            icon={seeMore ? "arrow_upward" : "arrow_downward"}
            className="text-sm md:text-base"
          />
        </div>
      </div>
      <div
        className={`
            duration-1100 grid transition-[grid-template-rows] ease-in-out md:col-span-2 
            ${seeMore ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
            `}
      >
        <div className=" flex w-full flex-col overflow-hidden md:flex-row">
          <div className="my-2 flex flex-col md:m-2">
            <div className="font-bold">{docs_dict.description}</div>
            {description?.[lang] || dict.documents.noDescription}
          </div>
        </div>
      </div>
    </div>
  );
}
