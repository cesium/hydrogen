import { type ReactNode } from "react";
import { Inter, Orbitron } from "next/font/google";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin-ext"],
  weight: ["400"],
  display: "swap",
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-orbitron",
});

export const metadata = {
  title: "Hydrogen",
  description: "CeSIUM landing page",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={cn(inter.variable, orbitron.variable)}>
      <body className="font-inter">
        <Header />
        {children}
      </body>
    </html>
  );
}
