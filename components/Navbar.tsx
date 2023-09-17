import Image from "next/image";

import logo from "@/public/cesium-lettering.png";
import Link from "next/link";
import LinkButton from "./LinkButton";

const navbar: string[] = ["Team", "Events", "Logs", "About Us"];

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-28">
      <div className="flex flex-row gap-10">
        <a href="/">
          <Image src={logo} alt="" width={125} height={200} priority />
        </a>
        <div className="mt-3 flex items-center justify-center gap-10">
          {navbar.map((title) => (
            <Link
              key={title}
              className={`border-b-2 border-transparent pb-2 font-orbitron text-lg text-black hover:border-cesium-orange hover:text-cesium-orange`}
              href={`/${title.toLowerCase()}`}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
      <LinkButton
        className="p-2 font-orbitron text-lg font-normal text-white"
        linkPath="/"
        title="Get in Touch"
      ></LinkButton>
    </div>
  );
}
