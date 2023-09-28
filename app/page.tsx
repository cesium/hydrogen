"use client";
import Hero from "@/components/Hero";
import CalendariumBenefits from "@/components/CalendariumBenefits";
import NewsAndEvents from "@/components/NewsAndEvents";

export default function Home() {
  return (
    <main className="space-y-40">
      <Hero />
      {/* <CalendariumBenefits /> */}
      <NewsAndEvents />
    </main>
  );
}
