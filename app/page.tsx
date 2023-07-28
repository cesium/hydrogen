import Hero from "@/components/Hero";
import PartnerBenefits from "@/components/PartnerBenefits";

export default function Home() {
  return (
    <>
      <main className="bg-background px-20">
        <Hero />
      </main>

      <PartnerBenefits />
    </>
  );
}
