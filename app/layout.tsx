"use client";
import "/styles/globals.css";

import { Inter, Orbitron } from "@next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--orbitron-font" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable}`}>
        {/* Top Orange Bar */}
        <div className="h-2 w-full bg-cesium-900" />
        {/* Background */}
        {/* --> checkered lines */}
        <div className="absolute -z-50 h-full w-full">
          {/* --> horizontal lines */}
          <div>
            {[...Array(Math.round(width / 256))].map((_, index) => (
              <div
                key={index}
                className="absolute h-0.5 w-full bg-gray-50 shadow-inner"
                style={{ marginTop: `calc(128px * ${index + 1})` }}
              />
            ))}
          </div>
          {/* --> vertical lines */}
          <div className="flex flex-row">
            {[...Array(Math.round(width / 128))].map((_, index) => (
              <div
                key={index}
                className="absolute h-full w-0.5 bg-gray-50 shadow-inner"
                style={{ marginLeft: `calc(128px * ${index + 1})` }}
              />
            ))}
          </div>
        </div>
        {/* --> left to right gradient */}
        <div className="absolute -z-40 h-full w-full bg-gradient-to-r from-white to-transparent" />
        {/* --> bottom to top gradient */}
        <div className="absolute -z-40 mt-[200px] h-full w-full bg-gradient-to-t from-white to-transparent" />
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
