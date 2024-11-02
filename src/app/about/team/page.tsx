"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import ListBox from "@/components/listbox";
import { AnimatePresence, easeIn, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

interface Member {
  name: string;
  role: string;
}

interface Department {
  name: string;
  members: Member[];
}

interface Team {
  name: string;
  departments?: Department[];
  members?: Member[];
}

type TeamData = Team[];

const generateYearRanges = (startYear: number, endYear: number): string[] => {
  const yearRanges = [];
  for (let year = endYear; year >= startYear; year--) {
    yearRanges.push(`${year}-${year + 1}`);
  }

  return yearRanges;
};

const yearRanges = generateYearRanges(1996, 2024);

export default function Team() {
  const [fromDefaultOpen, isFromDefaultOpen] = useState(true);
  const [currentYear, setCurrentYear] = useState<string>("2024-2025");
  const [team, setTeam] = useState<TeamData>([]);
  const [disclosureStates, setDisclosureStates] = useState<boolean[]>([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch(`/data/teams/${currentYear}/teams.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: TeamData = (await response.json()) as TeamData;
        setTeam(data);
        setDisclosureStates(new Array(data.length).fill(true));
      } catch (err) {
        if (err instanceof Error) {
          console.log(err.message);
        } else {
          console.log("An unknown error occurred");
        }
        setTeam([]);
      }
    };

    void fetchTeamData();
  }, [currentYear]);

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
    <main className="h-screen w-screen flex-col items-center justify-center p-5 md:p-8">
      <div className="mb-10 flex flex-col gap-4">
        <Link
          href=""
          className="flex items-center gap-1 font-medium text-primary"
        >
          <span className="material-symbols-outlined">arrow_back</span>Voltar
        </Link>
        <div className="flex flex-row items-center justify-between gap-5 sm:justify-normal">
          <h1 className="font-title text-3xl font-medium leading-9">Equipa</h1>
          <ListBox
            options={yearRanges}
            defaultOption="2024-2025"
            defaultOptionText="Atual mandato"
            hint="Selecionar mandato"
            currentOption={currentYear}
            setCurrentOption={setCurrentYear}
          />
        </div>
        <p>
          Estes são alguns dos elementos da nossa equipa, da presidência às
          direções dos departamentos, assembleia geral e conselho fiscal.
        </p>
      </div>
      {team?.map((team, index) => (
        <Disclosure defaultOpen as="div" className="mb-10" key={index}>
          {({ open }) => {
            // const [fromDisclosureOpen, isFromDisclosureOpen] = useState(true);
            return (
              <>
                <DisclosureButton
                  className="group mx-1 mb-4 flex w-full items-center justify-between"
                  onClick={() => {
                    isFromDefaultOpen(false);
                    setDisclosureState(true, index, disclosureStates);
                  }}
                >
                  <h2 className="font-title text-2xl font-medium leading-9">
                    {team.name}
                  </h2>
                  <span className="material-symbols-outlined text-3xl opacity-50 transition duration-150 group-data-[open]:-scale-100">
                    arrow_downward
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
                        // transition={team.departments ? { duration: 100 * team.departments.length } : {duration: 100}}
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
                                          arrow_downward
                                        </span>
                                      </DisclosureButton>
                                      <AnimatePresence>
                                        {open && (
                                          <DisclosurePanel static as={Fragment}>
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
                                              className="mt-5 flex origin-top flex-col gap-4  overflow-hidden bg-white md:mt-6 md:flex-row md:gap-7"
                                            >
                                              {department.members.map(
                                                (member, memberIndex) => (
                                                  <li
                                                    key={memberIndex}
                                                    className="flex items-center gap-4 md:flex-col"
                                                  >
                                                    <Image
                                                      src="/images/vitor-lelis.png"
                                                      alt="Profile picture"
                                                      width={130}
                                                      height={130}
                                                      className="size-16 rounded-full md:size-32"
                                                    />
                                                    <div className="flex flex-col gap-1">
                                                      <h3 className=" font-medium">
                                                        {member.name}
                                                      </h3>
                                                      <p className="text-sm text-gray">
                                                        {member.role}
                                                      </p>
                                                    </div>
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
                            <ul className="flex flex-col gap-4 md:flex-row md:gap-7">
                              {team.members?.map((member, memberIndex) => (
                                <li
                                  key={memberIndex}
                                  className="flex items-center gap-4 md:flex-col"
                                >
                                  <Image
                                    src="/images/vitor-lelis.png"
                                    alt="Profile picture"
                                    width={130}
                                    height={130}
                                    className="size-16 rounded-full md:size-32"
                                  />
                                  <div className="flex flex-col gap-1">
                                    <h3 className="font-medium">
                                      {member.name}
                                    </h3>
                                    <p className="text-sm text-gray">
                                      {member.role}
                                    </p>
                                  </div>
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
    </main>
  );
}
