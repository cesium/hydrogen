"use client";

import { useDictionary } from "@/contexts/dictionary-provider";
import Image from "next/image";
import SocialIcon from "@/components/social-icon";
import Link from "next/link";
import { horizontalPadding } from "@/lib/styling";

const Footer = () => {
  const dict = useDictionary();

  return (
    <div className={`bg-[#EBEBEB] ${horizontalPadding}`}>
      <footer className=" flex flex-col place-items-center pb-16 pt-8 sm:flex-row sm:place-items-end sm:px-7 md:px-12">
        <div className="flex w-full max-w-[500px] flex-col place-items-center justify-center space-y-5 sm:w-1/2 sm:max-w-max sm:flex-col-reverse md:place-items-start">
          <div className="w-full space-y-6 pb-2.5 sm:mt-[50px] sm:w-80 sm:pb-0">
            <Image
              src="/logo/cesium.svg"
              alt="CeSIUM Logo Icon"
              width={32}
              height={37}
            />
            <p className="text-sm leading-[17px] text-[#94959C]">
              {dict.cesium}
            </p>
            <div className="justify-left flex h-[30px] space-x-5">
              {dict.socials.map((social) => {
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="group-hover:hidden">
                      <SocialIcon
                        type={social.name.toLowerCase()}
                        width={24}
                        height={24}
                        fill="#6C757D"
                      />
                    </div>
                    <div className="hidden group-hover:block">
                      <SocialIcon
                        type={social.name.toLowerCase()}
                        width={24}
                        height={24}
                        fill={social.hex}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="w-full">
            <div className="grid w-full  min-w-[300px] grid-cols-2 gap-x-10 gap-y-8 sm:min-w-[600px] sm:grid-cols-4">
              {dict.sections.map((section, index) => (
                <div key={index}>
                  <h3 className="mb-3 text-stone">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, index) => (
                      <li key={index} className="text-sm text-gray">
                        <Link
                          href={section.links?.[index] ?? "#"}
                          className="transition-colors hover:text-black/60"
                          {...(section.links?.[index]?.startsWith("http") && {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          })}
                        >
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
        <div className="flex w-full max-w-[500px] flex-col sm:place-content-end sm:place-items-end md:max-w-full">
          <div className="my-8 h-0 border border-stroke sm:hidden"></div>
          <div className="flex flex-col sm:place-items-end">
            <span className="text-sm text-gray">Braga, Portugal</span>
            <span className="text-sm text-gray">
              Telefone:{" "}
              <Link
                className="text-sm text-gray transition-colors hover:text-black/60"
                href="tel:+351-253-604-448"
              >
                +351 253 604 448
              </Link>
            </span>
            <span className="text-sm text-gray">
              Email:{" "}
              <Link
                className="text-sm text-gray transition-colors hover:text-black/60"
                href="mailto:cesium@di.uminho.pt"
              >
                cesium@di.uminho.pt
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
