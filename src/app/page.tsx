"use client";

import { useState, useEffect } from "react";
import DepartmentCard from "@/components/department-card";
import ColaboradorCardDesktop from "@/components/socio-carddesktop";
import ColaboradorCardMobile from "@/components/socio-cardmobile";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="h-screen w-screen flex-col items-center justify-center overflow-scroll p-8">
      <div className="space-y-4">
        <DepartmentCard type="caos" />
        <DepartmentCard type="dmc" />
        <DepartmentCard type="drem" />
        <DepartmentCard type="ped" />
        <DepartmentCard type="rec" />
      </div>
      <div className="flex justify-center pt-6">
        {windowWidth < 768 ? (
          <ColaboradorCardMobile />
        ) : (
          <ColaboradorCardDesktop />
        )}
      </div>
    </main>
  );
}
