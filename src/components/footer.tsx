"use client";

import { useDictionary, useLang } from "@/contexts/dictionary-provider";
import Image from "next/image";
import SocialIcon from "@/components/social-icon";
import Link from "next/link";

const Footer = () => {
  const dict = useDictionary();
  const lang = useLang();

  return (
    <div className="layout-p-x bg-[#EBEBEB]">
      <footer className=" flex flex-col place-items-center pb-16 pt-8 sm:flex-row sm:place-items-end">
        <div className="flex w-full max-w-[500px] flex-col place-items-center justify-center space-y-5 sm:w-1/2 sm:max-w-max sm:flex-col-reverse md:place-items-start">
          <div className="w-full space-y-6 pb-2.5 sm:mt-[50px] sm:w-80 sm:pb-0">
            <div className="flex -translate-x-0.5 items-center gap-4">
              <Image
                src="/logo/cesium.svg"
                alt="CeSIUM Logo Icon"
                width={40}
                height={40}
                className="h-9 sm:h-10"
              />
              <Link
                href="https://ipdj.gov.pt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/logo/ipdj.svg"
                  alt="IPDJ Logo"
                  width={155.817}
                  height={40}
                  className="h-9 w-fit sm:h-10"
                />
              </Link>
            </div>
            <div className="justify-left flex h-[30px] space-x-5">
              {dict.socials.map((social) => {
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-transform duration-300 hover:-translate-y-1"
                    aria-label={"CeSIUM's " + social.name + " link"}
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
                  <h1 className="mb-3 text-stone">{section.title}</h1>
                  <ul className="space-y-3">
                    {section.items.map((item, index) => (
                      <li key={index} className="text-sm text-gray">
                        <Link
                          href={
                            (section.links?.[index]?.startsWith("http") ?? "#")
                              ? (section.links?.[index] ?? "#")
                              : `/${lang}${section.links?.[index] ?? "#"}`
                          }
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
