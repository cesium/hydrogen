import Hero from "@/components/Hero";
import Banners from "@/components/Banners";
import PartnerBenefits from "@/components/PartnerBenefits";
import NewsAndEvents from "@/components/NewsAndEvents";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Banners />
      <PartnerBenefits />
      <NewsAndEvents />
    </main>
  );
}
