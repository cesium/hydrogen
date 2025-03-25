"use client";

import Image from "next/image";
import Button from "@/components/button";
import CallSubscribe from "@/components/call-subscribe";
import { fullLocale } from "@/lib/locale";
import { verticalPadding } from "@/lib/styling";
import { useDictionary } from "@/contexts/dictionary-provider";

export default function BecomeACollaborator() {
  const dict = useDictionary();

  return (
    <main>
      <section
        className={`relative grid min-h-[380px] grid-flow-row items-start bg-blue text-white lg:grid-flow-col lg:items-start`}
      >
        <div
          className={`max-w-1/2 flex flex-col gap-8 ${verticalPadding} px-5 sm:pr-0 md:px-16 lg:pl-28 2xl:pl-60`}
        >
          <div>
            <h1 className="text-gradient font-title text-4xl font-medium text-white/50 lg:text-5xl">
              {dict.about.become_a_collaborator.hero.title}{" "}
              <span className="text-white">CeSIUM</span>
            </h1>
          </div>
          <p className="relative z-10 text-lg">
            {dict.about.become_a_collaborator.hero.description}
          </p>
          <Button
            title={dict.about.become_a_collaborator.hero.button}
            style="style1"
            color="blue"
            as="link"
            href="https://cesium.link/f/recrutamento"
          />
        </div>
        <div className="pointer-events-none flex h-full select-none items-end justify-center sm:hidden sm:justify-end xl:flex">
          <Image
            src="/vectors/collaborator.svg"
            alt="Torna-te membro"
            height={331}
            width={528}
            className="h-fit w-[323px] lg:w-[528px]"
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 hidden h-full select-none items-end justify-center sm:flex sm:justify-end xl:hidden">
          <Image
            src="/vectors/collaborator.svg"
            alt="Torna-te colaborador"
            height={331}
            width={528}
            className="h-fit w-[323px]"
          />
        </div>
      </section>
      <div>
        <CallSubscribe
          title={dict.callsub.collaborators.title}
          description={dict.callsub.collaborators.desc}
          buttonText={dict.callsub.button}
          buttonURL="https://cesium.link/f/recrutamento"
          buttonColor={"blue"}
          footerText={dict.callsub.footer}
        />
      </div>
    </main>
  );
}
