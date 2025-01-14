"use client";
import DepartmentCard from "@/components/department-card";
import PromotionalCard from "@/components/promotional-card";
import ImageCarousel from "@/components/carousel"; 
import { CardType } from "@/lib/types";

export default function Home() {
  const images = [
    "/images/none.png", 
    "/images/none.png",
    "/images/none.png",
  ];

  return (
    <main className="flex-col items-center justify-center">
      <div className="space-y-4">
        <DepartmentCard type="caos" />
        <DepartmentCard type="dmc" />
        <DepartmentCard type="drem" />
        <DepartmentCard type="ped" />
        <DepartmentCard type="rec" />
      </div>
      <div className="flex justify-center pt-6">
        <PromotionalCard type={CardType.Collaborate} />
      </div>
      <div className="flex justify-center pt-6">
        <PromotionalCard type={CardType.Membership} />
      </div>
      <div className="swiper mt-10 w-full">
        <ImageCarousel images={images} />
      </div>
    </main>
  );
}
