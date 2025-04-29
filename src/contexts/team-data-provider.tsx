"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Team, TeamData } from "@/lib/types";
import { fetchTeamData } from "@/app/actions";

interface TeamDataContextData {
  data: TeamData;
  teamPageData: TeamData;
  yearRange: string;
  teamPageYearRange: string;
  setTeamPageYearRange: (yearRange: string) => void;
  getTeamByName: (name: string) => Team | undefined;
  getDepartmentByName: (departmentName: string) => Team | undefined;
  isFetching: boolean;
}

const TeamDataContext = createContext<TeamDataContextData | undefined>(
  undefined,
);

export function TeamDataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<TeamData>([]);
  const [teamPageData, setTeamPageData] = useState<TeamData>([]);
  const yearRange = process.env.NEXT_PUBLIC_CURRENT_MANDATE!;
  const [teamPageYearRange, setTeamPageYearRange] = useState<string>(yearRange);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    setIsFetching(true);
    async function fetchData() {
      const d = await fetchTeamData(yearRange);
      const tpd = await fetchTeamData(teamPageYearRange);
      setData(d);
      setTeamPageData(tpd);
    }
    void fetchData();
    setIsFetching(false);
  }, [yearRange, teamPageYearRange]);

  const getTeamByName = (name: string) => {
    return data.find((team) => team.name === name);
  };

  const getDepartmentByName = (departmentName: string) => {
    for (const team of data) {
      const department = team.departments?.find(
        (department) => department.name === departmentName,
      );
      if (department) {
        return department;
      }
    }
  };

  return (
    <TeamDataContext.Provider
      value={{
        data,
        teamPageData,
        yearRange,
        teamPageYearRange,
        setTeamPageYearRange,
        getTeamByName,
        getDepartmentByName,
        isFetching,
      }}
    >
      {children}
    </TeamDataContext.Provider>
  );
}

export function useTeamData(): TeamData {
  const context = useContext(TeamDataContext);
  if (context === undefined) {
    throw new Error("useTeamData() must be used within a TeamDataProvider");
  }
  return context.data;
}

export function useTeamPageData(): TeamData {
  const context = useContext(TeamDataContext);
  if (context === undefined) {
    throw new Error("useTeamPageData() must be used within a TeamDataProvider");
  }
  return context.teamPageData;
}

export function useYearRange(): string {
  const context = useContext(TeamDataContext);
  if (context === undefined) {
    throw new Error("useYearRange() must be used within a TeamDataProvider");
  }
  return context.yearRange;
}

export function useTeamPageYearRange(): string {
  const context = useContext(TeamDataContext);
  if (context === undefined) {
    throw new Error(
      "useTeamPageYearRange() must be used within a TeamDataProvider",
    );
  }
  return context.teamPageYearRange;
}

export function useTeamDataUtils() {
  const context = useContext(TeamDataContext);
  if (context === undefined) {
    throw new Error(
      "useTeamDataUtils() must be used within a TeamDataProvider",
    );
  }
  return {
    getTeamByName: context.getTeamByName,
    getDepartmentByName: context.getDepartmentByName,
    setTeamPageYearRange: context.setTeamPageYearRange,
    isFetching: context.isFetching,
  };
}
