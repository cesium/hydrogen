"use client";

import { useDictionary } from "@/contexts/dictionary-provider";
import Image from "next/image";
import Link from "next/link";


const ProjectCard = () => {
    const dict = useDictionary()
    const info = [
        {   
            src: "/logo/sei.svg",
            alt: "SEI Logo",
            width: "57",
            height: "38",
            gradient_color: "rgba(35,11,183,0.10)",
            ref: "https://seium.org/"
        },
        {   
            src: "/logo/bugsbyte.svg",
            alt: "BugsByte Logo",
            width: "220",
            height: "36",
            gradient_color: "rgba(120,176,69,0.25)",
            ref: "https://bugsbyte.org/"
        },
        {
            src: "/logo/coderdojo.svg",
            alt: "CoderDojo Logo",
            width: "162",
            height: "47",
            gradient_color: "rgba(50,51,51,0.25)",
            ref: "https://coderdojobraga.org/"
        }
    ]

    return (
        <div className="flex flex-col md:flex-row justify-center mb-6">
            <div className="lg:w-100px]">
                <h2 className="font-title leading-8 text-2xl font-medium md:rotate-[-90deg] md:translate-y-14">{dict.about.projects.title}</h2>
            </div>
            <div className="flex flex-col">
                <p className="pt-4 pb-10">{dict.about.projects.description}</p>
                <div className="flex flex-col lg:flex-row md:gap-4">
                {dict.about.projects.card.map((project, key) => {
                    return (
                        <div key={key} className={`pb-[30px] border-b border-[#230BB71A] lg:border-none mt-[30px] md:mt-0 content-center lg:w-1/3 max-w-[460px]`} style={{
                            background: `radial-gradient(circle at center 130%, ${info[key]?.gradient_color || 'rgba(50,51,51,0.25)'} 10%, rgba(50,51,51,0) 57%)`
                          }}>
                            <Image src={info[key]?.src ?? "#"} alt={info[key]?.alt || "Logo"} width={Number(info[key]?.width) || 100} height={Number(info[key]?.height) || 40} />
                            <p className="pt-4 max-w-[380px] md:hidden">{project.mobile_description}</p>
                            <p className="pt-4 max-w-[380px] hidden md:block">{project.desktop_description}</p>                            
                            <div className="mt-4 flex justify-between w-16">
                                <Link className="text-[#ED7950] font-medium flex items-center space-x-1" href={info[key]?.ref ?? "#"} target="_blank">
                                    <span>{dict.about.projects.open}</span>
                                    <span className="material-symbols-outlined text-xl text-[#ED7950] font-medium">arrow_outward</span>
                                </Link>
                            </div>
                        </div>
                    )
                })}
                </div>
                <Link className="text-[#ED7950] hidden lg:inline-flex my-10 font-medium flex items-center space-x-1" href={"#"}>
                   <span>{dict.about.projects.see_more}</span>
                   <span className="material-symbols-outlined text-xl text-[#ED7950] font-medium">arrow_forward</span>
                </Link>
            </div>
        </div>                
    )
}

export default ProjectCard