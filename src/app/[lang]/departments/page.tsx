"use client";

import DepartmentsList from "@/components/departments-list";
import PromotionalCard from "@/components/promotional-card";
import { useDictionary } from "@/contexts/dictionary-provider";

import { CardType } from "@/lib/types";

export default function Departments() {
  const dict = useDictionary();

  return (
    <main className="layout-p-full flex flex-col gap-8 sm:gap-12">
      <div className="flex flex-col gap-4 px-2 md:px-5">
        <h1 className="font-title text-3xl font-medium">
          {dict.about.departments.title}
        </h1>
        <p>{dict.about.departments.description}</p>
      </div>
      <DepartmentsList className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2" />
      <div className="px-2 md:px-5">
        <PromotionalCard type={CardType.Collaborate} />
      </div>
    </main>
  );
}