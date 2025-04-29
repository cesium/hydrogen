"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import ListBox from "@/components/listbox";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { CardType } from "@/lib/types";
import Avatar from "@/components/avatar";
import { useDictionary } from "@/contexts/dictionary-provider";
import PromotionalCard from "@/components/promotional-card";
import {
  useTeamPageData,
  useTeamPageYearRange,
  useTeamDataUtils,
} from "@/contexts/team-data-provider";
import { generateYearRanges } from "@/lib/utils";

export default function Team() {
  const [fromDefaultOpen, isFromDefaultOpen] = useState(true);
  const team = useTeamPageData();
  const yearRange = useTeamPageYearRange();
  const { setTeamPageYearRange, isFetching } = useTeamDataUtils();
  const yearRanges = generateYearRanges(1995, 2024);
  const [disclosureStates, setDisclosureStates] = useState<boolean[]>([]);
  const dict = useDictionary();

  useEffect(() => {
    setDisclosureStates(new Array(team.length).fill(true));
  }, [team]);

  const setDisclosureState = (
    value: boolean,
    index: number,
    disclosureStates: boolean[],
  ) => {
    const newDisclosureStates = [...disclosureStates];
    newDisclosureStates[index] = value;
    setDisclosureStates(newDisclosureStates);
  };

  return (
    <main className="layout-p-full space-y-8 sm:space-y-12">
      <div className="flex flex-col gap-4 px-2 md:px-5">
        <div className="flex items-center justify-between gap-5 sm:justify-normal">
          <h1 className="font-title text-3xl font-medium">
            {dict.about.team.title}
          </h1>
          <ListBox
            options={yearRanges}
            defaultOption={process.env.NEXT_PUBLIC_CURRENT_MANDATE}
            defaultOptionText={dict.about.team.team_selector.default_option}
            hint={dict.about.team.team_selector.hint}
            currentOption={yearRange}
            setCurrentOption={setTeamPageYearRange}
          />
        </div>
        <p>{dict.about.team.description}</p>
      </div>
      {isFetching && (
        <span className="material-symbols-outlined animate-spin w-full flex justify-center">progress_activity</span>
      )}
      {team &&
        !isFetching &&
        team.map((team, index) => (
          <Disclosure defaultOpen as="div" key={index}>
            {({ open }) => {
              return (
                <>
                  <DisclosureButton
                    className="group mx-1 mb-4 flex w-full items-center justify-between px-2 md:px-5"
                    onClick={() => {
                      isFromDefaultOpen(false);
                      setDisclosureState(true, index, disclosureStates);
                    }}
                  >
                    <h2 className="text-start font-title text-2xl font-medium leading-9">
                      {team.name}
                    </h2>
                    <span className="material-symbols-outlined text-3xl opacity-50 transition duration-150 group-data-[open]:-scale-100">
                      keyboard_arrow_down
                    </span>
                  </DisclosureButton>

                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel static as={Fragment}>
                        <motion.div
                          initial={
                            fromDefaultOpen ? { height: "auto" } : { height: 0 }
                          }
                          animate={{
                            height: "auto",
                            transition: {
                              ease: "easeOut",
                              duration: team.departments
                                ? 0.1 * team.departments.length
                                : 0.15,
                            },
                          }}
                          exit={{
                            height: 0,
                            transition: {
                              ease: "easeIn",
                              duration: team.departments
                                ? 0.1 * team.departments.length
                                : 0.1,
                            },
                          }}
                          className="overflow-hidden rounded-2xl border border-black/10 bg-white"
                        >
                          <div className="flex flex-col gap-6 rounded-2xl   p-6 md:gap-7 md:p-9">
                            {team.departments ? (
                              team.departments.map(
                                (department, departmentIndex) => (
                                  <Disclosure
                                    defaultOpen
                                    key={departmentIndex}
                                    as="div"
                                  >
                                    {({ open }) => (
                                      <>
                                        <DisclosureButton
                                          className="group flex w-full items-center justify-between"
                                          onClick={() =>
                                            setDisclosureState(
                                              false,
                                              index,
                                              disclosureStates,
                                            )
                                          }
                                        >
                                          <h3 className="text-start font-title text-xl font-medium">
                                            {department.name}
                                          </h3>
                                          <span className="material-symbols-outlined text-3xl opacity-50 transition duration-150 group-data-[open]:-scale-100">
                                            keyboard_arrow_down
                                          </span>
                                        </DisclosureButton>
                                        <AnimatePresence>
                                          {open && (
                                            <DisclosurePanel
                                              static
                                              as={Fragment}
                                            >
                                              <motion.ul
                                                initial={
                                                  disclosureStates[index]
                                                    ? { height: "auto" }
                                                    : { height: 0 }
                                                }
                                                animate={{
                                                  height: "auto",
                                                  transition: {
                                                    ease: "easeOut",
                                                    duration: 0.1,
                                                  },
                                                }}
                                                exit={{
                                                  height: 0,
                                                  transition: {
                                                    ease: "easeIn",
                                                    duration: 0.1,
                                                  },
                                                }}
                                                className="mt-5 flex origin-top flex-col gap-4 overflow-hidden bg-white md:mt-6 md:flex-row md:flex-wrap md:gap-7"
                                              >
                                                {department.members.map(
                                                  (member, memberIndex) => (
                                                    <li key={memberIndex}>
                                                      <Avatar
                                                        name={member.name}
                                                        role={member.role}
                                                        src={
                                                          member.imageUrl ??
                                                          "/images/team/none.webp"
                                                        }
                                                      />
                                                    </li>
                                                  ),
                                                )}
                                              </motion.ul>
                                            </DisclosurePanel>
                                          )}
                                        </AnimatePresence>
                                      </>
                                    )}
                                  </Disclosure>
                                ),
                              )
                            ) : (
                              <ul className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-7">
                                {team.members?.map((member, memberIndex) => (
                                  <li key={memberIndex}>
                                    <Avatar
                                      name={member.name}
                                      role={member.role}
                                      src={
                                        member.imageUrl ??
                                        "/images/team/none.webp"
                                      }
                                    />
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </motion.div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </>
              );
            }}
          </Disclosure>
        ))}
      <div className="px-2 md:px-5">
        <PromotionalCard type={CardType.Collaborate} />
      </div>
    </main>
  );
}
