"use client";

import StoreCard from "@/components/store-card";
import ShortcutButtonsContainer from "@/components/shortcut-button-container";
import PromotionalCard from "@/components/promotional-card";
import { type Event, CardType } from "@/lib/types";
import { useEffect, useState } from "react";
import { EventListCard } from "@/components/event-list-card";
import getEvents from "@/lib/api/getEvents";
import LandingSectionCard from "@/components/landing-section-card";
import Image from "next/image";
import { useDictionary, useLang } from "@/contexts/dictionary-provider";
import ScrollableContent from "@/components/scrollable-content";
import { scrollTo, useScrollState } from "@/contexts/scrollstate-provider";
import ShortcutPanes from "@/components/shortcut-panes";
import PartnerCard from "@/components/partner-card";
import Link from "next/link";

export default function Home() {
  const dict = useDictionary();
  const { isScrolledTop } = useScrollState();
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const partners = dict.partners;
  const lang = useLang();

  useEffect(() => {
    async function fetchEvents() {
      try {
        setIsLoading(true);
        const eventsData = await getEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setIsLoading(false);
      }
    }

    void fetchEvents();
  }, []);

  const handleClearDate = () => {
    setSelectedDate(null);
  };

  return (
    <main>
      {/* Hero */}
      <section className="layout-p-x flex h-[calc(100dvh-72px)] flex-col justify-between selection:bg-white/30 md:h-[calc(100dvh-94px)]">
        <div
          className="absolute left-0 right-0 top-0 -z-10 h-dvh"
          style={{
            backgroundSize: "100% 210%",
            backgroundPosition: "0px 0px",
            backgroundImage:
              "conic-gradient(from 160deg at 50% 50%, #F59856 0%, #635C6E 12%, #F556F0 21%, #ED7950 31%, #f26854 79%, #F556F0 97%, #F556F0 100%)",
          }}
        />
        <Image
          width={1087}
          height={1346.5}
          alt=""
          src="/vectors/hero.svg"
          priority
          className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-fit select-none lg:block"
        />
        <Image
          width={638}
          height={729}
          alt=""
          src="/vectors/hero-mobile.svg"
          priority
          className="pointer-events-none absolute right-0 top-0 z-10 w-fit select-none sm:h-[90%] lg:hidden"
        />
        <div className="flex h-full flex-col justify-center">
          <div className="mb-36 flex max-w-[680px] flex-col items-start gap-7 text-white xl:flex-row xl:items-center xl:gap-11">
            <h1 className="font-title text-5xl font-medium md:text-6xl">
              {dict.landing.sections.hero.title}
            </h1>
            <h2 className="pr-6 md:max-w-[60%]">
              {dict.landing.sections.hero.description}
            </h2>
          </div>
        </div>
        {/* See More */}
        <button
          onClick={() => scrollTo(window.innerHeight - 72)}
          className={`mb-8 flex h-14 flex-col items-center justify-center gap-1 text-white transition-opacity duration-300 ${isScrolledTop ? "opacity-100" : "opacity-0"}`}
        >
          <p>{dict.button.swipe}</p>
          <span className="material-symbols-outlined">arrow_downward</span>
        </button>
      </section>
      {/* Content */}
      <div className="layout-p-x z-0 flex flex-col gap-12 bg-foundation py-12">
        {/* Shortcut Buttons */}
        <section>
          <ShortcutButtonsContainer />
        </section>
        {/* Highlight Slideshow */}
        <section>
          <ScrollableContent />
        </section>
        {/* Shortcut Panes */}
        <section>
          <ShortcutPanes shortcuts={dict.landing.sections.shortcut_panes} />
        </section>
        {/* Events */}
        <section>
          <LandingSectionCard
            title={dict.landing.sections.events.title}
            subtitle={dict.landing.sections.events.description}
            overflows
          >
            <EventListCard
              events={events}
              isLoading={isLoading}
              selectedDate={selectedDate}
              onClearDate={handleClearDate}
            />
          </LandingSectionCard>
        </section>
        {/* Partners */}
        <section>
          <LandingSectionCard
            title={dict.landing.sections.partners.title}
            subtitle={dict.landing.sections.partners.description}
            overflows
          >
            <div className="grid auto-cols-[250px] grid-flow-col gap-4">
              {partners.list.map((partner, index) => (
                <Link key={index} href={`/${lang}/partners`}>
                  <PartnerCard
                    title={partner.title}
                    url={partner.url}
                    logo={partner.logo}
                    color={partner.color}
                    perks={partner.perks}
                    simplelayout
                  />
                </Link>
              ))}
            </div>
          </LandingSectionCard>
        </section>
        {/* Store / Member / Collaborator */}
        <section className="grid grid-cols-1 gap-8 px-2 sm:grid-cols-2 md:px-5">
          <div className="sm:col-span-2">
            <StoreCard />
          </div>
          <div className="hidden sm:block">
            <PromotionalCard type={CardType.Membership} mobileOnlyLayout />
          </div>
          <div className="hidden sm:block">
            <PromotionalCard type={CardType.Collaborate} mobileOnlyLayout />
          </div>
          <div className="sm:hidden">
            <PromotionalCard type={CardType.Membership} />
          </div>
          <div className="sm:hidden">
            <PromotionalCard type={CardType.Collaborate} />
          </div>
        </section>
      </div>
    </main>
  );
}
