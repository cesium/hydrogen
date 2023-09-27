import Image from "next/image";

import logo from "@/public/cesium-dark.svg";
import Link from "next/link";

// List of pages
const navbar: string[] = ["Team", "Events", "Logs", "About Us"];

const Navbar = () => {
  return (
    <div className="flex h-10 items-center justify-between">
      {/* Logo */}
      <a href="/">
        <Image src={logo} alt="" width={136} height={46} priority />
      </a>
      {/* Page Links */}
      <div className="flex flex-row">
        <div className="flex items-center justify-center gap-10 font-orbitron text-lg font-medium text-gray-400">
          {navbar.map((title) => (
            <Link
              key={title}
              className={`transition-colors hover:border-cesium-900 hover:text-cesium-900`}
              href={`/${title.toLowerCase()}`}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
      {/* Login Button */}
      <Link
        className="rounded-lg bg-cesium-900 p-1 px-4 font-orbitron text-lg font-medium text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-cesium-900/40"
        href="/"
      >
        Login
      </Link>
    </div>
  );
};

export default Navbar;
