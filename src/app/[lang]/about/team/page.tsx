"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import ListBox from "@/components/listbox";
import { AnimatePresence, motion } from "framer-motion";
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

const generateImageUrl = (
  yearRange: string,
  name: string,
  count: number,
): string => {
  return `https://assets.hydrogen.cesium.pt/team-photos/${yearRange}/${name}${count ? count : ""}.jpg`;
};

const generateUrlsForTeams = (
  teams: TeamData,
  yearRange: string,
): (string | string[])[][] => {
  const nameCount: Record<string, number> = {};

  const generateForMember = (member: Member) => {
    const baseName = member.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "")
      .toLowerCase();
    const count = nameCount[baseName] ?? 0;
    nameCount[baseName] = count + 1;
    return generateImageUrl(yearRange, baseName, count);
  };

  const urls: (string | string[])[][] = [];

  teams.forEach((team) => {
    const teamUrls: (string | string[])[] = [];

    if (team.members) {
      const memberUrls = team.members.map((member) =>
        generateForMember(member),
      );
      teamUrls.push(memberUrls);
    }

    if (team.departments) {
      const departmentUrls = team.departments.map((department) => {
        return department.members.map((member) => generateForMember(member));
      });
      teamUrls.push(...departmentUrls);
    }

    urls.push(teamUrls);
  });

  return urls;
};

export default function Team() {
  const [fromDefaultOpen, isFromDefaultOpen] = useState(true);
  const [currentYear, setCurrentYear] = useState<string>("2024-2025");
  const [team, setTeam] = useState<TeamData>([]);
  const [disclosureStates, setDisclosureStates] = useState<boolean[]>([]);
  const [imageUrls, setImageUrls] = useState<(string | string[])[][]>([]);

  const yearRanges = generateYearRanges(1996, 2024);

  const isYearBefore2016 = (yearRange: string) => {
    const firstYearStr = yearRange.split("-")[0];
    const year = firstYearStr ? parseInt(firstYearStr, 10) : NaN;
    return year < 2016;
  };

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch(`/data/teams/${currentYear}/teams.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: TeamData = (await response.json()) as TeamData;
        const urls = isYearBefore2016(currentYear)
          ? []
          : generateUrlsForTeams(data, currentYear); // Generate URLs based on the fetched team data
        setImageUrls(urls);
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
    <main className="flex-col items-center justify-center">
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
                  <h2 className="text-start font-title text-2xl font-medium leading-9">
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
                                              className="mt-5 flex origin-top flex-col gap-4 overflow-hidden bg-white md:mt-6 md:flex-row md:flex-wrap md:gap-7"
                                            >
                                              {department.members.map(
                                                (member, memberIndex) => (
                                                  <li
                                                    key={memberIndex}
                                                    className="flex flex-shrink-0 items-center gap-4 md:flex-col"
                                                  >
                                                    <Image
                                                      src={
                                                        imageUrls[index]?.[
                                                          departmentIndex
                                                        ]?.[memberIndex] ??
                                                        "/images/none.png"
                                                      }
                                                      alt="Profile picture"
                                                      width={400}
                                                      height={400}
                                                      className="size-16 rounded-full md:size-32"
                                                      loading="lazy"
                                                      placeholder="blur"
                                                      blurDataURL="/images/none.png"
                                                      unoptimized
                                                    />
                                                    <div className="flex max-w-36 flex-col gap-1 md:items-center">
                                                      <h3 className="font-medium md:text-center">
                                                        {member.name}
                                                      </h3>
                                                      <p className="text-sm text-gray md:text-center">
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
                            <ul className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-7">
                              {team.members?.map((member, memberIndex) => (
                                <li
                                  key={memberIndex}
                                  className="flex flex-shrink-0 items-center gap-4 md:flex-col"
                                >
                                  <Image
                                    src={
                                      imageUrls[index]?.[0]?.[memberIndex] ??
                                      "/images/none.png"
                                    }
                                    alt="Profile picture"
                                    width={400}
                                    height={400}
                                    className="size-16 rounded-full md:size-32"
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="/images/none.png"
                                    unoptimized
                                  />
                                  <div className="flex max-w-36 flex-col gap-1 md:items-center">
                                    <h3 className="font-medium md:text-center">
                                      {member.name}
                                    </h3>
                                    <p className="text-sm text-gray md:text-center">
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
