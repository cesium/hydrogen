"use client";
import Hero from "@/components/Hero";
import Banners from "@/components/Banners";
import CalendariumBenefits from "@/components/CalendariumBenefits";
import NewsAndEvents from "@/components/NewsAndEvents";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Banners />
      <CalendariumBenefits />
      <NewsAndEvents />
    </main>
  );
}
