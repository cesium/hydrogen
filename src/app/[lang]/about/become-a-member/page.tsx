"use client";

import Image from "next/image";
import Button from "@/components/button";
import InfoCard from "@/components/info-card";
import CallSubscribe from "@/components/call-subscribe";
import { useDictionary } from "@/contexts/dictionary-provider";
import { horizontalPadding, verticalPadding } from "@/lib/styling";

export default function BecomeAMember() {
  const dict = useDictionary();

  return (
    <main>
      {/* Hero */}
      <section
        className={`relative grid min-h-[380px] grid-flow-row items-start bg-primary text-white lg:grid-flow-col lg:items-start`}
      >
        <div
          className={`max-w-1/2 flex flex-col gap-8 ${verticalPadding} px-5 sm:pr-0 md:px-16 lg:pl-28 2xl:pl-60`}
        >
          <div>
            <h1 className="text-gradient font-title text-4xl font-medium text-white/50 lg:text-5xl">
              {dict.about.become_a_member.hero.title}{" "}
              <span className="text-white">CeSIUM</span>
            </h1>
          </div>
          <p className="relative z-10 text-lg">
            {dict.about.become_a_member.hero.description}
          </p>
          <Button
            title={dict.about.become_a_member.hero.button}
            style="style1"
            color="primary"
            as="link"
            href="#"
          />
        </div>
        <div className="pointer-events-none flex h-full select-none items-end justify-center sm:hidden sm:justify-end xl:flex">
          <Image
            src="/vectors/member.svg"
            alt="Torna-te membro"
            height={331}
            width={528}
            className="h-fit w-[323px] lg:w-[528px]"
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 hidden h-full select-none items-end justify-center sm:flex sm:justify-end xl:hidden">
          <Image
            src="/vectors/member.svg"
            alt="Torna-te membro"
            height={331}
            width={528}
            className="h-fit w-[323px]"
          />
        </div>
      </section>
      {/* Content */}
      <div
        className={`grid grid-cols-1 gap-7 overflow-hidden py-10 md:py-14 xl:grid-cols-3 ${horizontalPadding}`}
      >
        {/* Vantagens */}
        <section className="pb-4 xl:col-span-3">
          <div className="flex w-full place-items-center justify-between gap-x-8 sm:gap-x-0">
            <div className="flex min-w-[200px] max-w-[600px] place-items-center px-5">
              <div className="flex flex-col gap-4 sm:max-w-[540px]">
                <h2 className="font-title text-3xl font-medium">
                  {dict.about.become_a_member.advantages.title}
                </h2>
                <p className="text-base">
                  {dict.about.become_a_member.advantages.description}
                </p>
              </div>
            </div>
            <Image
              src="/images/wallet.png"
              alt="wallet"
              width={364}
              height={338}
              className="h-[200px] object-contain md:h-full"
            />
          </div>
        </section>
        {/* Cards */}
        <div className="xl:col-span-3">
          <InfoCard>
            <div className="flex flex-col gap-4 overflow-hidden px-12 pt-10">
              <div className="z-10 flex flex-col items-start gap-4 md:flex-row">
                <div className="size-8 bg-gradient-to-t from-[#3EA3FF] from-30% via-[#D83CFF] via-50% to-[#FF4291] to-80% bg-clip-text text-transparent">
                  <span className="material-symbols-outlined text-4xl leading-8">
                    confirmation_number
                  </span>
                </div>
                <h2 className="font-title text-2xl font-semibold">
                  {dict.about.become_a_member.participate.title}
                </h2>
              </div>
              <p className="z-10">
                {dict.about.become_a_member.participate.description}
              </p>

              <div className="relative mt-6 h-[180px] w-full min-w-[580px] max-w-[980px] sm:mt-8 md:mx-auto">
                <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full">
                  <div className="absolute bottom-[-50px] left-0 right-0 top-[-10px] bg-gradient-to-r from-[#9DD0FF] via-[#F5CFFF] to-[#FF9BC5] opacity-80 blur-[50px]"></div>
                </div>
                <div className="pointer-events-none relative z-10 h-full w-full overflow-hidden">
                  <Image
                    src="/images/about/become-a-member/ticket.png"
                    alt="ticket"
                    width={980}
                    height={365}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </InfoCard>
        </div>
        {/* Kit */}
        <InfoCard>
          <div className="flex h-full flex-row items-center">
            <div className="pointer-events-none relative h-[90%] w-[450px] overflow-hidden min-[604px]:h-full min-[890px]:max-w-[300px] lg:h-[90%] lg:max-w-[450px]">
              <Image
                src="/images/about/become-a-member/totebag.png"
                alt="totebag"
                layout="fill"
                className="object-cover object-[right_bottom]"
              />
            </div>

            <div className="flex flex-col gap-4 px-5 py-20 md:px-12">
              <h2 className="font-title text-2xl font-semibold text-primary">
                {dict.about.become_a_member.member_kit.title}
              </h2>
              <p>{dict.about.become_a_member.member_kit.description}</p>
            </div>
          </div>
        </InfoCard>
        {/* Room */}
        <InfoCard>
          <div className="flex flex-col gap-4 px-12 py-10">
            <span className="material-symbols-outlined text-5xl text-primary">
              meeting_room
            </span>
            <h2 className="font-title text-2xl font-semibold">
              {dict.about.become_a_member.room_acess.title}
            </h2>
            <p>{dict.about.become_a_member.room_acess.description}</p>
          </div>
        </InfoCard>

        <InfoCard>
          <div className="flex flex-col gap-4 px-12 py-10">
            <span className="material-symbols-outlined text-5xl text-primary">
              campaign
            </span>
            <h2 className="font-title text-2xl  font-semibold">
              {dict.about.become_a_member.represent.title}
            </h2>
            <p>{dict.about.become_a_member.represent.description}</p>
          </div>
        </InfoCard>
        {/* Representation */}
        <section className="xl:col-span-3">
          <InfoCard>
            <div className="flex flex-col gap-4">
              <div className="grid h-full grid-cols-2 sm:h-96 sm:grid-cols-3">
                <div className="pointer-events-none relative order-2 -mb-4 -ml-4 h-full w-full max-w-[270px] justify-self-start sm:-ml-12 sm:-mt-24 sm:mb-0 md:-ml-36 lg:order-1 lg:-ml-4">
                  <Image
                    src="/images/about/become-a-member/notebook.png"
                    alt="discounts"
                    layout="fill"
                    objectFit="cover"
                    className="object-[0%_0%] sm:object-[100%_100%]"
                  />
                </div>

                <div className="order-1 col-span-2 flex h-full items-center justify-center sm:order-2 sm:col-span-1">
                  <div className="flex flex-col items-center gap-2 px-12 py-10 sm:px-0">
                    <div className="flex flex-col items-center gap-2">
                      <span className="material-symbols-outlined text-4xl text-[#5C657F]">
                        percent
                      </span>
                      <h2 className="text-center font-title text-2xl font-semibold">
                        {dict.about.become_a_member.discounts.title}
                      </h2>
                    </div>
                    <p className="text-center">
                      {dict.about.become_a_member.discounts.description}
                    </p>
                    <a
                      className="flex items-center gap-1 text-[#5C657F]"
                      href="https://store.cesium.pt"
                    >
                      <p className="text-center">
                        {dict.about.become_a_member.discounts.link}
                      </p>
                      <span className="material-symbols-outlined">
                        arrow_outward
                      </span>
                    </a>
                  </div>
                </div>

                <div className="pointer-events-none relative order-3 -mb-4 -mr-4 h-full w-full max-w-[270px] justify-self-end pb-32 sm:-mr-36 sm:mb-0 sm:mt-24 sm:pb-0 lg:-mr-4">
                  <Image
                    src="/images/about/become-a-member/laptop.png"
                    alt="discounts"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="0% 0%"
                  />
                </div>
              </div>
            </div>
          </InfoCard>
        </section>
        {/* Call to register */}
        <section className="mt-4 flex w-full flex-col items-center justify-center xl:col-span-3">
          <CallSubscribe
            title={dict.callsub.members.title}
            description={dict.callsub.members.desc}
            buttonText={dict.callsub.button}
            buttonURL="https://cesium.link/f/socios"
            buttonColor={"primary"}
            footerText={dict.callsub.footer}
          />
        </section>
        {/* Details */}
        <section className="flex justify-center py-3 xl:col-span-3">
          <ol className="flex max-w-[85ch] list-inside list-decimal flex-col gap-2 text-sm text-gray">
            <li>
              A inscrição como sócio depende de uma quota única no valor de 10€.
              Os benefícios não expiram nem estão sujeitos a limites gerais, a
              menos que um dos benefícios já estabeleça por definição essas
              condições. O pagamento apenas pode ser feito através de dinheiro
              vivo, diretamente na sala do CeSIUM.
            </li>
            <li>
              Como sócio, terás sempre acesso a todas as parcerias que
              disponibilizamos. Porém, as mesmas podem sofrer alteração de
              condições ou terminar.
            </li>
            <li>
              O kit de sócio inclui um sortido de artigos que pode variar de kit
              para kit, consoante um critério de escolha aleatório e
              disponibilidade dos brindes.
            </li>
            <li>
              Em certas ocasiões, durante o horário de abertura, a sala do
              CeSIUM pode estar fechada, por estar a decorrer uma atividade
              interna dentro dela (como, por exemplo, uma reunião).
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}
