"use client";

import { useDictionary } from "@/contexts/dictionary-provider";
import Image from 'next/image';
import SocialIcon from "@/components/social-icon";
import Link from "next/link";

const Footer = () => {
  const dict = useDictionary();

  const socials = [
    { name: "Facebook", icon: "facebook" , url: "https://www.facebook.com/cesiuminho"},
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/cesiuminho" },
    { name: "X", icon: "x", url: "https://x.com/cesiuminho" },
    { name: "GitHub", icon: "github", url: "https://github.com/cesium" },
    { name: "YouTube", icon: "youtube", url: "https://www.youtube.com/c/cesiumUM" },
  ];

  return (
    <footer className=" flex flex-col sm:flex-row place-items-center sm:place-items-end  px-5 pb-[70px] pt-8 sm:px-[30px] md:px-[100px] bg-[#EBEBEB]">
      <div className="flex flex-col sm:flex-col-reverse w-full sm:w-1/2 max-w-[500px] sm:max-w-max place-items-center md:place-items-start justify-center space-y-[22px]">
        <div className="w-full sm:w-80 space-y-6 pb-2.5 sm:pb-0 sm:mt-[50px]">
          <Image src="logo/cesium.svg" alt="" width={32} height={37}/>
          <p className="leading-[17px] text-sm text-[#94959C]">
            {dict.cesium}
          </p>
          <div className="flex h-[30px] justify-left space-x-5">
            {socials.map((social, index) => {
              return (
                <Link key={index} href={social.url} target="_blank">
                  <SocialIcon type={social.icon} width={26} height={26} fill="#6C757D" />  
                </Link>
              )
            })}
          </div>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-2  sm:grid-cols-4 gap-x-10 gap-y-8 w-full min-w-[300px] sm:min-w-[600px]">
             {dict.sections.map((section) => (
              <div>
                <h3 className="mb-3 text-stone">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, index) => (
                    <li className="text-sm text-gray">
                      <Link href={section.links && section.links[index] ? section.links[index] : '#'}>
                          {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
             ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[500px] md:max-w-full sm:place-content-end sm:place-items-end">
        <div className="my-8 h-0 border border-stroke sm:hidden"></div>
        <div className="flex flex-col sm:place-items-end">
          <span className="text-sm text-gray">Braga, Portugal</span>
          <span className="text-sm text-gray">Telefone: <Link className="text-sm text-gray" href="tel:+351-253-604-448">+351 253 604 448</Link></span>
          <span className="text-sm text-gray">Email: <Link className="text-sm text-gray" href="mailto:cesium@di.uminho.pt">cesium@di.uminho.pt</Link></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
