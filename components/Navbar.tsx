import Image from "next/image";

import logo from "@/public/cesium-lettering.png";
import Link from "next/link";

const navbar: string[] = ["HOME", "TEAM", "LOGS", "EVENTS", "ABOUT US"];

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-20">
      <Image src={logo} alt="" width={150} height={200} priority />
      <div className="flex w-[50%] items-center justify-between">
        {navbar.map((title) => (
          <Link
            key={title}
            className="border-b-2 border-transparent pb-4 text-sm text-black hover:border-cesium-orange hover:text-cesium-orange"
            href={title === "HOME" ? "/" : `/${title.toLowerCase()}`}
          >
            {title}
          </Link>
        ))}
      </div>
      <div className="h-20 w-20 rounded-full bg-gray-200"></div>
    </div>
  );
}
