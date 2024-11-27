"use client";

import { useDictionary, useLang } from "@/contexts/dictionary-provider";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import IconSocial from "public/icons/icon_social";

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
    { name: dict.navbar.events, path: "/events" },
    { name: dict.navbar.partners, path: "/partners" },
    { name: dict.navbar.store, path: "https://store.cesium.pt" },
    { name: dict.navbar.projects, path: "/projects" },
  ];

  const socials = [
    { name: "Facebook", url: "https://www.facebook.com/cesiuminho" },
    { name: "Instagram", url: "https://www.instagram.com/cesiuminho" },
    { name: "X", url: "https://x.com/cesiuminho" },
    { name: "GitHub", url: "https://github.com/cesium" },
    { name: "YouTube", url: "https://www.youtube.com/c/cesiumUM" },
  ];

  return (
    <div className="sticky top-0 z-40 flex w-full flex-col bg-background px-5 pb-3 pt-4 after:absolute after:bottom-0 after:left-0 after:h-6 after:w-full after:translate-y-6 after:bg-gradient-to-b after:from-background after:to-transparent md:relative md:px-20 md:pt-12 after:md:hidden">
      <nav className="flex items-center justify-between gap-9 md:justify-normal">
        <Link href="/">
          <Image
            priority
            src="/logo/cesium.svg"
            width={30}
            height={34}
            alt="CeSIUM Logo Icon"
            className="hidden md:block"
          />
          <Image
            priority
            src="/logo/cesium-full.svg"
            width={103}
            height={32}
            alt="CeSIUM Logo"
            className="block md:hidden"
          />
        </Link>
        <div className="hidden items-center space-x-6 font-title text-lg font-medium text-gray md:flex">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`${
                isCurrent(route.path) ? "text-black" : ""
              } transition-colors hover:text-black`}
            >
              {route.name}
            </Link>
          ))}
        </div>
        <motion.button
          className="material-symbols-outlined z-50 p-1 text-3xl text-gray md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          animate={{ rotate: isOpen ? 90 : 0 }}
        >
          {isOpen ? "close" : "menu"}
        </motion.button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col justify-between bg-[#F0F0F0] px-7 pb-8 pt-20 shadow-lg"
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
                    href={route.path}
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
                  {socials.map((social, i) => (
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
                      >
                        <IconSocial width={26} height={26} type={social.name.toLowerCase()} fill="#94959C" />
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
  );
};

export default Navbar;
