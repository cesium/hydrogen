"use client";

import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/NavigationMenu";
import { Button } from "@/components/ui/Button";
import cesiumLogo from "@/img/cesium-logo-text.svg";

export default function Header() {
  return (
    <header className="relative py-14 font-orbitron before:absolute before:inset-0 before:bottom-auto before:h-1.5 before:bg-primary">
      <div className="container flex items-center justify-between">
        <NavigationMenu className="flex gap-12">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink>
              <Image src={cesiumLogo} alt="CeSIUM logo" className="w-28" />
            </NavigationMenuLink>
          </Link>
          <NavigationMenuList className="flex gap-8">
            <NavigationMenuItem>
              <Link href="/team" legacyBehavior passHref>
                <NavigationMenuLink>Team</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/events" legacyBehavior passHref>
                <NavigationMenuLink>Events</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/logs" legacyBehavior passHref>
                <NavigationMenuLink>Logs</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink>About Us</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button onClick={() => {}}>Get In Touch</Button>
      </div>
    </header>
  );
}
