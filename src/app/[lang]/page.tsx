"use client";

import StoreCard from "@/components/store-card";
import PromotionalCard from "@/components/promotional-card";
import { CardType } from "@/lib/types";
import { horizontalPadding, verticalPadding } from "@/lib/styling";
import Image from "next/image";
import { useDictionary } from "@/contexts/dictionary-provider";

export default function Home() {
  const dict = useDictionary();

  return (
    <main>
      <section
        className={`flex h-[816px] flex-col justify-center ${horizontalPadding}`}
      >
        {/* Background Gradient */}
        <div
          className="absolute left-0 right-0 top-0 -z-10 h-[910px]"
          style={{
            backgroundSize: "100% 210%",
            backgroundPosition: "0px 0px",
            backgroundImage:
              "conic-gradient(from 160deg at 50% 50%, #F59856 0%, #635C6E 12%, #F556F0 21%, #ED7950 31%, #F46156 79%, #F556F0 97%, #F556F0 100%)",
          }}
        />
        {/* Cube Pattern - Desktop */}
        <Image
          width={1087}
          height={1346.5}
          alt=""
          src="vectors/hero.svg"
          className="pointer-events-none absolute right-0 top-0 z-10 hidden h-[95%] w-fit select-none lg:block"
        />
        {/* Cube Pattern - Mobile */}
        <Image
          width={638}
          height={729}
          alt=""
          src="vectors/hero-mobile.svg"
          className="pointer-events-none absolute right-0 top-0 z-10 w-fit select-none sm:h-[95%] lg:hidden"
        />
        {/* Hero Title/Description */}
        <div className="mb-40 flex max-w-[680px] flex-col items-start gap-7 text-white xl:flex-row xl:items-center xl:gap-11">
          <h1 className="font-title text-5xl font-medium sm:text-6xl">
            {dict.landing.sections.hero.title}
          </h1>
          <h2 className="max-w-[80%]">
            {dict.landing.sections.hero.description}
          </h2>
        </div>
      </section>
      <div className={`z-0 bg-white ${horizontalPadding} ${verticalPadding}`}>
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <StoreCard />
          </div>
          <PromotionalCard type={CardType.Membership} mobileOnlyLayout />
          <PromotionalCard type={CardType.Collaborate} mobileOnlyLayout />
        </section>
      </div>
    </main>
  );
}
