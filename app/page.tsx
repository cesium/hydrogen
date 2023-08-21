import Hero from "@/components/Hero"
import Banners from "@/components/Banners"
import PartnerBenefits from "@/components/PartnerBenefits"

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Banners />
      <PartnerBenefits />
    </main>
  )
}
