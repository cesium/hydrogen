"use client";
import "/styles/globals.css";

import { Inter, Orbitron } from "@next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--orbitron-font" });

const Background = ({ width, height }: { width: number; height: number }) => {
  const hLinesNr: number = Math.max(Math.round(height / 128) - 1, 0);
  const vLinesNr: number = Math.max(Math.round(width / 128), 0);

  return (
    <>
      {/* --> checkered lines */}
      <div className="absolute -z-50 h-full w-full">
        {/* --> horizontal lines */}
        <div>
          {[...Array(hLinesNr)].map((_, index) => (
            <div
              key={index}
              className="absolute h-0.5 w-full bg-slate-100 shadow-inner"
              style={{ marginTop: `calc(128px * ${index + 1})` }}
            />
          ))}
        </div>
        {/* --> vertical lines */}
        <div className="flex flex-row">
          {[...Array(vLinesNr)].map((_, index) => (
            <div
              key={index}
              className="absolute h-full w-0.5 bg-slate-100 shadow-inner"
              style={{ marginLeft: `calc(128px * ${index + 1})` }}
            />
          ))}
        </div>
      </div>
      {/* --> left to right gradient */}
      <div className="absolute -z-40 h-full w-full bg-gradient-to-r from-white/90 to-transparent" />
      {/* --> bottom to top gradient */}
      <div className="absolute -z-40 mt-[200px] h-full w-full bg-gradient-to-t from-white to-transparent" />
      {/* --> top to bottom gradient */}
      <div className="absolute -z-40 h-[14rem] w-full bg-gradient-to-b from-white/70 to-transparent" />
    </>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  // "Listens" for changes in the window size and updates the nr of lines accordingly
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable}`}>
        {/* Top Orange Bar */}
        <div className="h-2 w-full bg-cesium-900" />
        {/* Background */}
        <Background width={width} height={height} />
        {/* Main Content */}
        <div className="z-50 m-auto max-w-screen-xl space-y-40 px-20 py-14 text-gray-900">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
