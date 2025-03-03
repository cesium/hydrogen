"use client";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import { useDictionary } from "@/contexts/dictionary-provider";
import { horizontalPadding, verticalPadding } from "@/lib/styling";

export default function BecomeAMember() {
  const dict = useDictionary();

  return (
    <main
      className={`grid grid-cols-1 gap-7 lg:grid-cols-3 ${horizontalPadding} ${verticalPadding}`}
    >
      <div className="lg:col-span-3">
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
              <div className="relative z-10 h-full w-full overflow-hidden">
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
          <div className="relative h-[90%] w-[450px] overflow-hidden min-[604px]:h-full min-[890px]:w-[300px] lg:h-[90%] lg:w-[450px]">
            <Image
              src="/images/totebag.png"
              alt="totebag"
              layout="fill"
              className="object-cover object-right min-[604px]:object-bottom min-[604px]:pb-2 lg:object-right"
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

      <div className="lg:col-span-3">
      <InfoCard>
        <div className="flex flex-col gap-4">
          <div className="grid h-full sm:h-96 grid-cols-2 sm:grid-cols-3">
            <div className="relative order-2 w-full h-full max-w-[480px] justify-self-start -mb-4 sm:mb-0 -ml-4 sm:-ml-12 sm:-mt-24 lg:order-1">
              <Image
                src="/images/notebook.png"
                alt="discounts"
                layout="fill"
                objectFit="cover"
                className="object-[0%_0%] sm:object-[100%_100%]"
              />
            </div>

            <div className="order-1 col-span-2 flex items-center justify-center h-full sm:order-2 sm:col-span-1">
              <div className="flex flex-col items-center gap-2 px-12 py-10 sm:px-0">
                <div className="flex flex-col items-center gap-2 lg:flex-row">
                  <span className="text-4xl text-[#5C657F] material-symbols-outlined">percent</span>
                  <h2 className="text-2xl font-semibold text-center font-title">
                    {dict.about.become_a_member.discounts.title}
                  </h2>
                </div>
                <p className="text-center">{dict.about.become_a_member.discounts.description}</p>
                <a className="flex items-center gap-1 text-[#5C657F]" href="https://store.cesium.pt">
                  <p className="text-center">{dict.about.become_a_member.discounts.link}</p>
                  <span className="leading-8 material-symbols-outlined">north_east</span>
                </a>
              </div>
            </div>

            <div className="relative order-3 w-full h-full max-w-[480px] justify-self-end pb-32 sm:pb-0 -mb-4 sm:mb-0 -mr-4 sm:-mr-12 sm:mt-24">
              <Image
                src="/images/laptop.png"
                alt="discounts"
                layout="fill"
                objectFit="cover"
                objectPosition="0% 0%"
              />
            </div>
          </div>
        </div>
      </InfoCard>
      </div>
    </main>
  );
}
