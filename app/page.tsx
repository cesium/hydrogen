"use client";
import Hero from "@/components/Hero";
import PromoGrid from "@/components/PromoGrid";
import CalendariumBenefits from "@/components/CalendariumBenefits";
import NewsAndEvents from "@/components/NewsAndEvents";

export default function Home() {
  return (
    <main className="space-y-32">
      <Hero />
      <PromoGrid />
      {/* <CalendariumBenefits /> */}
      <NewsAndEvents />
    </main>
  );
}
