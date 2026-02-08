"use client"; 

import type {DocumentProps} from "@/lib/types";
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
    accessPermision
}: DocumentProps){

    const [seeMore, setSeeMore] = useState<boolean>(false);

    const dict = useDictionary();
    const docs_dict = dict["documents"];
    return( 
        <div className = "my-auto border-b border-stroke py-3 grid grid-cols-1 lg:grid-cols-[1fr_auto]">
            <div className = "flex flex-row gap-4 lg:col-start-1 lg:row-start-1">
                <div className = "relative h-16 w-16 md:h-32 md:w-32 flex-shrink-0 bg-gray-200 rounded-md overflow-hidden my-2">
                    <Image src={imageUrl} alt={title} fill/> 
                </div>
                <div className="flex flex-col items-start justify-center object-center">
                    <div className="text-base font-bold text-gray-900 line-clamp-2 leading-tight mb-1">
                        {title}
                    </div>
                    <div className="flex flex-col lg:flex-row items-centered items-start gap-1 text-sm text-gray-500">
                        <div className="flex items-center py-0.5 my-1">
                            <span className="material-symbols-outlined text-[18px] mr-1">
                                calendar_month
                            </span>
                            <span>{publication_date}</span>
                        </div>
                        <div className = "flex flex-row justify-start my-1" >
                            {categories.map((element, index) => (
                                <span key={index} className="bg-stroke text-gray mr-2 lg:mr-0 lg:ml-2 flex px-2 py-0.5 rounded-full">
                                    {element}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className = "flex flex-row items-center justify-start lg:justify-end gap-3 mt-2 lg:mt-0 row-start-3 lg:col-start-2 lg:row-start-1">
                <div className = "mr-2">
                    <Button title = {docs_dict["download"]} style="style3" color = "primary" as="link" href={documentUrl} icon="download" isDownload={true} downloadTitle={title}/>
                </div>
                <div>
                    <Button title = {seeMore? docs_dict["seeLess"] : docs_dict["seeMore"]} style="style1" color = "primary" as="button" onClick={() => setSeeMore(!seeMore)} icon={seeMore? "arrow_upward":"arrow_downward"} />
                </div>
            </div>
            <div className={`
            lg:col-span-2 grid transition-[grid-template-rows] duration-1100 ease-in-out 
            ${seeMore ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
            `}>
                <div className=" overflow-hidden w-full flex flex-col lg:flex-row">
                    <div className = "flex flex-col my-2 lg:m-2">
                        <div className = "font-bold">{docs_dict["description"]}</div>
                        {description}
                    </div>
                    <div className = "flex flex-col my-2 lg:m-2">
                        <div className = "font-bold">{docs_dict["accessPermissions"]}</div>
                        {accessPermision}
                    </div>
                </div>
            </div>
        </div>

    )
}