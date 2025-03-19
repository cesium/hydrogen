"use client";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import { useDictionary } from "@/contexts/dictionary-provider";
import { horizontalPadding, verticalPadding } from "@/lib/styling";
import { motion } from "motion/react";
import Link from "next/link";

export default function BecomeAMember() {
  const dict = useDictionary();

  const partners = dict.partners;

  const partnersMiddleIndex = Math.floor(partners.length / 2);
  const partnersFirstHalf = partners.slice(0, partnersMiddleIndex);
  const partnersSecondHalf = partners.slice(partnersMiddleIndex);

  return (
    <main
      className={`grid grid-cols-1 gap-7 xl:grid-cols-3 ${horizontalPadding} ${verticalPadding}`}
    >
      <div className="xl:col-span-3">
        <InfoCard>
          <div className="flex flex-col sm:flex-row sm:gap-64 lg:max-h-96">
            <div className="flex flex-col gap-20 py-32 pl-12 sm:flex-row">
              <div className="">
                <span className="material-symbols-outlined text-5xl text-[#836143]">
                  handshake
                </span>
                <h1 className="bg-gradient-to-r from-[#836143] to-[#C0AC97] bg-clip-text font-title text-4xl font-semibold text-transparent">
                  Parcerias exclusivas
                </h1>
              </div>
              <div className="flex flex-col gap-4">
                <p>
                  Almoça no Sabor da Fruta e toma um café grátis. Ou no Café do
                  Luís, com bebida incluída. Recebe emblemas grátis n’Os Farias.
                  Usufrui de descontos em aulas de música e de condução. Estas
                  são só algumas das parcerias que temos para ti.
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
            <div className="mr-24 hidden h-96 shrink-0 gap-5 lg:flex">
              <motion.div
                className="flex flex-col gap-5"
                animate={{
                  y: [0, -partnersFirstHalf.length * 100],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                  },
                }}
                style={{ willChange: "transform" }}
              >
                {[...partnersFirstHalf, ...partnersFirstHalf].map(
                  (partner, index) => (
                    <Image
                      key={`${partner.title}-${index}`}
                      className="size-20 shrink-0 rounded-2xl border border-black/10 object-cover"
                      src={partner.logo}
                      alt={partner.title}
                      width={80}
                      height={80}
                    />
                  ),
                )}
              </motion.div>
              <motion.div
                className="flex flex-col gap-5"
                animate={{
                  y: [-partnersSecondHalf.length * 100, 0],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                  },
                }}
                style={{ willChange: "transform" }}
              >
                {[...partnersSecondHalf, ...partnersSecondHalf].map(
                  (partner, index) => (
                    <Link href={partner.url} key={`${partner.title}-${index}`}>
                      <Image
                        className="size-20 shrink-0 rounded-2xl border border-black/10 object-cover transition-transform hover:scale-110"
                        src={partner.logo}
                        alt={partner.title}
                        width={80}
                        height={80}
                      />
                    </Link>
                  ),
                )}
              </motion.div>
            </div>
            <div className="flex h-32 shrink-0 flex-col gap-5 overflow-hidden lg:hidden">
              <motion.div
                className="flex shrink-0 gap-5"
                animate={{
                  x: [0, -partnersFirstHalf.length * 100],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                  },
                }}
                style={{ willChange: "transform" }}
              >
                {[...partnersFirstHalf, ...partnersFirstHalf].map(
                  (partner, index) => (
                    <Image
                      key={`${partner.title}-${index}`}
                      className="size-20 shrink-0 rounded-2xl border border-black/10 object-cover"
                      src={partner.logo}
                      alt={partner.title}
                      width={80}
                      height={80}
                    />
                  ),
                )}
              </motion.div>
              <motion.div
                className="flex shrink-0 gap-5"
                animate={{
                  x: [-partnersSecondHalf.length * 100, 0],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                  },
                }}
                style={{ willChange: "transform" }}
              >
                {[...partnersSecondHalf, ...partnersSecondHalf].map(
                  (partner, index) => (
                    <Image
                      key={`${partner.title}-${index}`}
                      className="size-20 shrink-0 rounded-2xl border border-black/10 object-cover"
                      src={partner.logo}
                      alt={partner.title}
                      width={80}
                      height={80}
                    />
                  ),
                )}
              </motion.div>
            </div>
          </div>
        </InfoCard>
      </div>
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
                  src="/images/ticket.png"
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

      <InfoCard>
        <div className="flex h-full flex-row items-center">
          <div className="pointer-events-none relative h-[90%] w-[450px] overflow-hidden min-[604px]:h-full min-[890px]:max-w-[300px] lg:h-[90%] lg:max-w-[450px]">
            <Image
              src="/images/totebag.png"
              alt="totebag"
              fill
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

      <div className="xl:col-span-3">
        <InfoCard>
          <div className="flex flex-col gap-4">
            <div className="grid h-full grid-cols-2 sm:h-96 sm:grid-cols-3">
              <div className="pointer-events-none relative order-2 -mb-4 -ml-4 h-full w-full max-w-[480px] justify-self-start sm:-ml-12 sm:-mt-24 sm:mb-0 lg:order-1">
                <Image
                  src="/images/notebook.png"
                  alt="discounts"
                  fill
                  className="object-cover object-[0%_0%] sm:object-[100%_100%]"
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

              <div className="pointer-events-none relative order-3 -mb-4 -mr-4 h-full w-full max-w-[480px] justify-self-end pb-32 sm:-mr-12 sm:mb-0 sm:mt-24 sm:pb-0">
                <Image
                  src="/images/laptop.png"
                  alt="discounts"
                  fill
                  className="object-cover object-[0%_0%]"
                />
              </div>
            </div>
          </div>
        </InfoCard>
      </div>
    </main>
  );
}
