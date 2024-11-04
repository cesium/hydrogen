"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Routes = [
  { name: "Sobre Nós", path: "/about" },
  { name: "Eventos", path: "/events" },
  { name: "Parcerias", path: "/partners" },
  { name: "Loja", path: "/store" },
  { name: "Projetos", path: "/projects" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full flex space-x-9 items-center px-5 pt-4 lg:px-7 lg:pt-12">
      <Image src="/logo/cesium.svg" width={30} height={34} alt="CeSIUM Logo Icon" className="hidden md:block" />
      <Image src="/logo/cesium-full.svg" width={103} height={32} alt="CeSIUM Logo" className="block md:hidden" />
      <div className="flex items-center space-x-6 font-title font-medium text-gray">
        {Routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={`${
              pathname.includes(route.path) ? "text-black" : ""
            } transition-colors hover:text-black`}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
