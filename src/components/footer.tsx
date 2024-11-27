"use client";

import { useDictionary } from "@/contexts/dictionary-provider";
import Image from 'next/image';
import IconSocial from "public/icons/icon_social";

const Footer = () => {
  const dict = useDictionary();

  const NavigationSection = ({
    title,
    items,
    links
  }: {
    title: string;
    items: (string | undefined)[];
    links: string[];
  }) => (
    <>
      <h3 className="mb-3 text-[16px] text-black">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
              <a className="text-[14px] text-gray" href={links[index]}>
                {item}
              </a>  
          </li>
        ))}
      </ul>
    </>
  );

  const cesium = { text: dict.cesium }

  const sections = [
    { title: dict.footer.section1.title || "", items: [dict.footer.section1.items[0], dict.footer.section1.items[1], dict.footer.section1.items[2], dict.footer.section1.items[3]], links: ["#", "#", "#", "#"]},
    { title: dict.footer.section2.title || "", items: [dict.footer.section2.items[0], dict.footer.section2.items[1], dict.footer.section2.items[2]], links: ["#", "#", "#"]},
    { title: dict.footer.section3.title || "", items: [dict.footer.section3.items[0], dict.footer.section3.items[1], dict.footer.section3.items[2]], links: ["#", "#", "#"]},
    { title: dict.footer.section4.title || "", items: [dict.footer.section4.items[0], dict.footer.section4.items[1], dict.footer.section4.items[2], dict.footer.section4.items[3]], links: ["#", "#", "#", "#"]},
  ];

  const socials = [
    { name: "Facebook", icon: "facebook" , url: "https://www.facebook.com/cesiuminho"},
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/cesiuminho" },
    { name: "X", icon: "x", url: "https://x.com/cesiuminho" },
    { name: "GitHub", icon: "github", url: "https://github.com/cesium" },
    { name: "YouTube", icon: "youtube", url: "https://www.youtube.com/c/cesiumUM" },
  ];

  const contactInfo = [
    "Braga, Portugal",
    "Telefone: +351 253 604 448",
    "Email: cesium@di.uminho.pt",
  ];

  return (
    <footer className=" flex flex-col sm:flex-row place-items-center sm:place-items-end  px-[20px] pb-[70px] pt-[32px] sm:px-[30px] md:px-[100px] bg-[#EBEBEB]">
      <div className="flex flex-col sm:flex-col-reverse w-full sm:w-1/2 max-w-[500px] sm:max-w-max place-items-center md:place-items-start justify-center space-y-[22px]">
        <div className="w-full sm:w-80 space-y-6 pb-[10px] sm:pb-[0px] sm:mt-[50px]">
          <Image src="logo/cesium.svg" alt="" width={32} height={37}/>
          <p className="leading-[17px] text-[14px] text-[#94959C]">
            {cesium.text}
          </p>
          <div className="flex h-[30px] justify-left space-x-[20px]">
            {socials.map((social, index) => {
              return (
                <a key={index} href={social.url} target="_blank">
                  <IconSocial type={social.icon} width={26} height={26} fill="#6C757D" />  
                </a>
              )
            })}
          </div>
        </div>
        <div className="w-full">
          {/* Left */}
          <div className="flex w-full min-w-[300px] sm:min-w-[600px] space-x-[50px] sm:space-x-[20px]">
            <div className="flex flex-col sm:flex-row w-full sm:w-[300px] sm:space-x-[50px] space-y-[32px] sm:space-y-0">
              <div className="space-y-[12px]">
                {sections[0] && (
                  <NavigationSection
                    title={sections[0].title}
                    items={sections[0].items}
                    links={sections[0].links}
                  />
                )}
              </div>
              <div className="space-y-[12px] sm:hidden">
                {sections[2] && (
                  <NavigationSection
                    title={sections[2].title}
                    items={sections[2].items}
                    links={sections[2].links}
                  />
                )}
              </div>
              <div className="hidden space-y-[12px] sm:block">
                {sections[1] && (
                  <NavigationSection
                    title={sections[1].title}
                    items={sections[1].items}
                    links={sections[1].links}
                  />
                )}
              </div>
            </div>
            {/* Right */}
            <div className="flex flex-col sm:flex-row w-full sm:w-[300px] space-y-[32px] sm:space-y-0">
              <div className="space-y-[12px] sm:hidden">
                {sections[1] && (
                  <NavigationSection
                    title={sections[1].title}
                    items={sections[1].items}
                    links={sections[1].links}
                  />
                )}
              </div>
              <div className="mr-[50px] hidden space-y-[12px] sm:block">
                {sections[2] && (
                  <NavigationSection
                    title={sections[2].title}
                    items={sections[2].items}
                    links={sections[2].links}
                  />
                )}
              </div>
              <div className="space-y-[12px]">
                {sections[3] && (
                  <NavigationSection
                    title={sections[3].title}
                    items={sections[3].items}
                    links={sections[3].links}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[500px] md:max-w-full sm:place-content-end sm:place-items-end">
        <div className="my-[32px] h-0 border border-stroke sm:hidden"></div>
        <div className="flex flex-col sm:place-items-end">
          {contactInfo.map((info, index) => (
            <span key={index} className="text-sm text-gray">
              {info}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
