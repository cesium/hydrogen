"use client";

import type { DocumentProps } from "@/lib/types";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/button";
import { useDictionary } from "@/contexts/dictionary-provider";

export function Document({
  documentUrl,
  title,
  publication_date,
  description,
  imageUrl,
  categories,
  accessPermision,
}: DocumentProps) {
  const [seeMore, setSeeMore] = useState<boolean>(false);

  const dict = useDictionary();
  const docs_dict = dict.documents;
  return (
    <div className="my-auto grid grid-cols-1 border-b border-stroke py-3 lg:grid-cols-[1fr_auto]">
      <div className="flex flex-row gap-4 lg:col-start-1 lg:row-start-1">
        <div className="bg-gray-200 relative my-2 h-16 w-16 flex-shrink-0 overflow-hidden rounded-md md:h-32 md:w-32">
          <Image src={imageUrl} alt={title} fill />
        </div>
        <div className="flex flex-col items-start justify-center object-center">
          <div className="text-gray-900 mb-1 line-clamp-2 text-base font-bold leading-tight">
            {title}
          </div>
          <div className="items-centered text-gray-500 flex flex-col items-start gap-1 text-sm lg:flex-row">
            <div className="my-1 flex items-center py-0.5">
              <span className="material-symbols-outlined mr-1 text-[18px]">
                calendar_month
              </span>
              <span>{publication_date}</span>
            </div>
            <div className="my-1 flex flex-row justify-start">
              {categories.map((element, index) => (
                <span
                  key={index}
                  className="mr-2 flex rounded-full bg-stroke px-2 py-0.5 text-gray lg:ml-2 lg:mr-0"
                >
                  {element}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row-start-3 mt-2 flex flex-row items-center justify-start gap-3 lg:col-start-2 lg:row-start-1 lg:mt-0 lg:justify-end">
        <div className="mr-2">
          <Button
            title={docs_dict.download}
            style="style3"
            color="primary"
            as="link"
            href={documentUrl}
            icon="download"
            isDownload={true}
            downloadTitle={title}
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
          />
        </div>
      </div>
      <div
        className={`
            duration-1100 grid transition-[grid-template-rows] ease-in-out lg:col-span-2 
            ${seeMore ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
            `}
      >
        <div className=" flex w-full flex-col overflow-hidden lg:flex-row">
          <div className="my-2 flex flex-col lg:m-2">
            <div className="font-bold">{docs_dict.description}</div>
            {description}
          </div>
          <div className="my-2 flex flex-col lg:m-2">
            <div className="font-bold">{docs_dict.accessPermissions}</div>
            {accessPermision}
          </div>
        </div>
      </div>
    </div>
  );
}
