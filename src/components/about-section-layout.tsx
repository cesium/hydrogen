"use client";

import CustomLink from "./link";
import { useDictionary } from "@/contexts/dictionary-provider";
import { horizontalPadding } from "@/lib/styling";

interface AboutSectionProps {
  title: string;
  subtitle: string;
  href: string;
  children: React.ReactNode;
}

const AboutSectionLayout = ({
  title,
  subtitle,
  href,
  children,
}: AboutSectionProps) => {
  const dict = useDictionary();

  return (
    <div
      className={`flex flex-col items-stretch py-10 sm:flex-row sm:py-12 ${horizontalPadding}`}
    >
      <div className="mb-4 flex w-full items-center sm:mr-6 sm:w-20">
        <div className="flex h-fit flex-1 items-center justify-start sm:h-full sm:w-full sm:items-start sm:justify-center">
          <span className="w-fit origin-right font-title text-2xl font-medium sm:translate-x-[-50%] sm:translate-y-[-50%] sm:-rotate-90 sm:pr-1 sm:text-3xl">
            {title}
          </span>
        </div>
        <span className="pt-1 sm:hidden">
          <CustomLink
            title={dict.button.see_more}
            href={href}
            arrow="forward"
          />
        </span>
      </div>

      <div className="overflow-auto">
        <div className="flex justify-start">{subtitle}</div>

        <div className="mt-4 hidden sm:block">
          <CustomLink
            title={dict.button.see_more}
            href={href}
            arrow="forward"
          />
        </div>

        <div className="mt-7 sm:mt-10">{children}</div>
      </div>
    </div>
  );
};

export default AboutSectionLayout;
