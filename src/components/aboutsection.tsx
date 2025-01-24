"use client";

import CustomLink from "./link";
import { useDictionary } from "@/contexts/dictionary-provider";


interface AboutSectionProps {
  title: string;
  subtitle: string;
  href: string;
  children: React.ReactNode;
}

const AboutsectionLayout = ({ title, subtitle, href, children }: AboutSectionProps) => {
  const dict = useDictionary(); 

  return (
    <div className="flex flex-col items-stretch px-1 sm:px-7 pt-10 sm:pt-12 sm:flex-row">
      <div className="flex items-center w-full mb-4 sm:mr-6 sm:w-20">
        <div className="flex flex-1 h-fit items-center justify-start sm:items-start sm:justify-center sm:h-full sm:w-full">
            <span className="w-fit origin-right font-title text-2xl font-medium sm:translate-x-[-50%] sm:translate-y-[-50%] sm:-rotate-90 sm:pr-1 sm:text-3xl">
              {title}
            </span>
        </div>
        <span className="sm:hidden pt-1">          
                <CustomLink title={dict.button.see_more} href={href} arrow="forward" />
        </span>
      </div>

      <div>
        <div className="flex justify-start">{subtitle}</div>

        <div className="hidden sm:block mt-4">
          <CustomLink title={dict.button.see_more} href={href} arrow="forward" />
        </div>

        <div className="sm:mt-10 mt-7">{children}</div>
      </div>
    </div>
  );
};

export default AboutsectionLayout;
