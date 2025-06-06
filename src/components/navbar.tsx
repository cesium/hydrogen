"use client";

import { useDictionary, useLang } from "@/contexts/dictionary-provider";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SocialIcon from "@/components/social-icon";
import Logo from "./logo";

const Navbar = () => {
  const dict = useDictionary();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const lang = useLang();
  const pathname = usePathname().replace(`/${lang}`, "");

  const isCurrent = (path: string) => {
    return (
      (pathname.startsWith(path) && path.length > 1) ||
      (pathname === "" && path === "/")
    );
  };

  const home = { name: dict.navbar.home, path: "/" };
  const routes = [
    { name: dict.navbar.about, path: "/about" },
    { name: dict.navbar.team, path: "/team" },
    { name: dict.navbar.departments, path: "/departments" },
    { name: dict.navbar.partners, path: "/partners" },
    { name: dict.navbar.events, path: "/events" },
    { name: dict.navbar.store, path: "https://store.cesium.pt" },
  ];

  const isMember = pathname === "/about/become-a-member";
  const isCollaborator = pathname === "/about/become-a-collaborator";
  const isLanding = pathname === "";

  const isMemberOrCollaborator = isMember || isCollaborator;

  const navbarBackgroundColor = isMember
    ? "bg-primary"
    : isCollaborator
      ? "bg-signature-blue"
      : isLanding
        ? "bg-transparent"
        : "bg-white md:bg-transparent";
  const linkColor =
    isMemberOrCollaborator || isLanding ? "text-white/50" : "text-gray";
  const currentLink =
    isMemberOrCollaborator || isLanding ? "text-white" : "text-black";
  const colorLogo = isMemberOrCollaborator || isLanding ? "white" : "#ED7950";
  const hamburgerMenuColor = isOpen
    ? "text-gray"
    : isMemberOrCollaborator
      ? "text-white/50"
      : isLanding
        ? "text-white"
        : "text-gray";

  return (
    <div
      className={`${navbarBackgroundColor} layout-p-x ${isOpen ? "sticky" : ""} ${isMemberOrCollaborator || isLanding ? "relative after:hidden" : "sticky"} top-0 z-50 select-none after:absolute after:bottom-0 after:left-0 after:h-6 after:w-full after:translate-y-6 after:bg-gradient-to-b after:from-white after:to-transparent md:relative after:md:hidden`}
    >
      <div
        className={`${navbarBackgroundColor} flex w-full flex-col pb-3 pt-4 md:relative md:pt-12`}
      >
        <nav className="flex items-center justify-between gap-9 md:justify-normal">
          <Link href={`/${lang}`} aria-label="Go home">
            <Logo
              type="cesium"
              width={30}
              height={34}
              alt="CeSIUM Logo Icon"
              fill={colorLogo}
              className="hidden md:block"
              fullColor={isMemberOrCollaborator || isLanding}
            />
            <Logo
              type="cesium-full"
              width={103}
              height={32}
              alt="CeSIUM Logo"
              fill={`${colorLogo}`}
              className="block md:hidden"
              fullColor={isMemberOrCollaborator || isLanding}
            />
          </Link>
          <div
            className={`hidden items-center space-x-6 font-title text-base font-medium ${linkColor} md:flex`}
          >
            {routes.map((route) => {
              return (
                <Link
                  key={route.path}
                  href={
                    route.path.startsWith("http")
                      ? route.path
                      : `/${lang}${route.path}`
                  }
                  className={`${
                    isCurrent(route.path) ? `${currentLink}` : ""
                  } transition-colors ${isMemberOrCollaborator || isLanding ? "hover:text-white" : "hover:text-black"}`}
                >
                  {route.name}
                </Link>
              );
            })}
          </div>
          <motion.button
            className={`${hamburgerMenuColor} material-symbols-outlined z-50 p-1 text-3xl md:hidden`}
            onClick={() => setIsOpen(!isOpen)}
            animate={{ rotate: isOpen ? 90 : 0 }}
          >
            {isOpen ? "close" : "menu"}
          </motion.button>
        </nav>
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="fixed left-0 right-0 top-0 z-40 flex h-dvh flex-col justify-between bg-[#F0F0F0] px-7 pb-8 pt-20 shadow-lg md:hidden"
              exit={{ x: "100%", borderRadius: "50px" }}
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.15 }}
            >
              <ul className="flex flex-col space-y-3 font-title text-3xl font-medium text-gray">
                {[home, ...routes].map((route, i) => (
                  <motion.li
                    key={route.path}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={
                        route.path.startsWith("http")
                          ? route.path
                          : `/${lang}${route.path}`
                      }
                      className={`${
                        isCurrent(route.path) ? "text-black" : ""
                      } transition-colors hover:text-black`}
                      onClick={() => setIsOpen(false)}
                    >
                      <h1>{route.name}</h1>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="space-y-4">
                <div className="space-y-2 font-medium text-gray">
                  <motion.p
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {dict.social_media}
                  </motion.p>
                  <ul className="flex space-x-4">
                    {dict.socials.map((social, i) => (
                      <motion.li
                        key={social.name}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <Link
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={"CeSIUM's " + social.name + " link"}
                        >
                          <div className="group transition-transform duration-300 hover:-translate-y-1">
                            <div className="group-hover:hidden">
                              <SocialIcon
                                width={26}
                                height={26}
                                type={social.name.toLowerCase()}
                                fill="#94959C"
                              />
                            </div>
                            <div className="hidden group-hover:block">
                              <SocialIcon
                                width={26}
                                height={26}
                                type={social.name.toLowerCase()}
                                fill={social.hex}
                              />
                            </div>
                          </div>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="flex w-full justify-end">
                  <Image
                    src="/logo/cesium.svg"
                    width={30}
                    height={34}
                    alt="CeSIUM Logo Icon"
                  />
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
