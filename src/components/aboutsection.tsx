"use client";

import CustomLink from "./link";
import { useDictionary } from "@/contexts/dictionary-provider";


interface AboutSectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const AboutsectionLayout = ({ title, subtitle, children }: AboutSectionProps) => {
  const dict = useDictionary(); 

  return (
    <div className="flex flex-col items-stretch px-6 pt-10 sm:flex-row sm:p-12">
      <div className="flex w-full mb-4 sm:mr-6 sm:w-20">
        <div className="flex h-fit items-start justify-center sm:h-full sm:w-full">
          <span className="w-fit origin-right font-title text-2xl font-medium sm:translate-x-[-50%] sm:translate-y-[-50%] sm:-rotate-90 sm:pr-1 sm:text-3xl">
            {title}
          </span>
        </div>
      </div>

      <div>
        <div className="flex justify-start">{subtitle}</div>

        <div className="sm:my-10 my-7">{children}</div>

        <div className="hidden sm:block">
          <CustomLink title={dict.button.see_more} href="#" arrow="forward" />
        </div>
      </div>
    </div>
  );
};

export default AboutsectionLayout;
