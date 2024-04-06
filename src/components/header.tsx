import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import logoOrange from "public/logo-orange.svg";

export const Header = () => {
  return (
    <header className="container flex items-center gap-12 pb-4 pt-[3.375rem]">
      <Link href="/">
        <Image
          src={logoOrange as StaticImageData}
          alt="CeSIUM logo"
          width={33}
          height={38}
        />
      </Link>
      <nav className="flex gap-8 font-orbitron font-medium text-[#0B0A0D]/50">
        <Link href="#">Sobre Nós</Link>
        <Link href="#">Eventos</Link>
        <Link href="#">Parcerias</Link>
        <Link href="#">Loja</Link>
        <Link href="#">Plataformas</Link>
      </nav>
      <button className="ml-auto rounded-lg bg-black/[0.06] px-5 py-2 font-orbitron font-medium">
        Log In
      </button>
    </header>
  );
};
