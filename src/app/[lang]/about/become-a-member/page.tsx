"use client";
import Image from 'next/image';
import InfoCard from '@/components/info-card';
import { useDictionary } from '@/contexts/dictionary-provider';

export default function BecomeAMember() {
  const dict = useDictionary();

  return (
  <main
    className={`flex flex-col gap-8 sm:gap-12 px-5 md:px-20`}
  > 
    
    <InfoCard>
      <div className="flex flex-col px-[50px] pt-[40px] gap-4 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-4 z-10">
          <div className="size-8 bg-gradient-to-t from-[#3EA3FF] from-30% via-[#D83CFF] via-50% to-[#FF4291] to-80% bg-clip-text text-transparent">
            <span className="material-symbols-outlined text-4xl leading-8">
              confirmation_number
            </span>
          </div>
          <h2 className="text-2xl font-title font-semibold">
            {dict.about.become_a_member.participate.title}
          </h2>
        </div>
        <p className='z-10'>
          {dict.about.become_a_member.participate.description}
        </p>

        <div className="relative mt-16 md:mx-auto w-full max-w-[980px] min-w-[580px] h-[180px]">
          {/* Gradient Background outside the overflow-hidden box */}
          <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
            <div className="absolute top-[-50px] left-[-50px] right-[-50px] bottom-[-50px] bg-gradient-to-r from-[#9DD0FF] via-[#F5CFFF] to-[#FF9BC5] opacity-80 blur-[50px]"></div>
          </div>
          {/* Image container with clipping */}
          <div className="overflow-hidden relative z-10 w-full h-full">
            <Image
              src="/images/ticket.png"
              alt="ticket"
              width={980}
              height={365}
              className="object-cover object-top w-full h-full"
            />
          </div>
        </div>
      </div>
    </InfoCard>

    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
      <InfoCard>
        <div className="flex flex-row py-[40px]">
          <div className="w-[150px] h-[200px] overflow-hidden relative">
            <Image 
              src="/images/totebag.png" 
              alt="totebag" 
              layout="fill"
              objectFit="cover"
              objectPosition="100% center" // Moves focus towards the right side
            />
          </div>

          <div className="flex flex-col px-[20px]  md:px-[50px] py-[40px] gap-4">
            <h2 className="text-2xl font-title text-primary font-semibold">{dict.about.become_a_member.member_kit.title}</h2>
            <p>{dict.about.become_a_member.member_kit.description}</p>
          </div>
        </div>
      </InfoCard>

      <InfoCard>
        <div className="flex flex-col px-[50px] py-[40px] gap-4">
          <span className="material-symbols-outlined text-5xl text-primary">
            meeting_room
          </span>
          <h2 className="text-2xl font-title font-semibold">{dict.about.become_a_member.room_acess.title}</h2>
          <p>{dict.about.become_a_member.room_acess.description}</p>
        </div>
      </InfoCard>

      <InfoCard>
        <div className="flex flex-col px-[50px] py-[40px] gap-4">
          <span className="material-symbols-outlined text-5xl text-primary">
            campaign
          </span>
          <h2 className="text-2xl font-title  font-semibold">{dict.about.become_a_member.represent.title}</h2>
          <p>{dict.about.become_a_member.represent.description}</p>
        </div>
      </InfoCard>
    </div>

    <InfoCard>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          
          <div className="justify-self-start self-end lg:self-start -ml-[25px] w-[200px] h-[150px] sm:w-[250px] sm:h-[175px] overflow-hidden relative lg:order-1 order-2">
            <Image 
              src="/images/notebook.png" 
              alt="discounts" 
              layout="fill"
              objectFit="cover"
              className="object-[0%_0%] lg:object-[100%_100%]" // Default: Top-left on small, Bottom-right on large
            />
          </div>

          <div className="justify-self-center col-span-2 lg:col-span-1 my-[40px] lg:my-auto lg:order-2 order-1">
            <div className='px-[50px] py-[50px] flex flex-col gap-2'>
              <div className='mx-auto flex flex-col lg:flex-row items-center gap-2'>
                <span className='material-symbols-outlined text-4xl text-[#5C657F]'>
                  percent
                </span>
                <h2 className="text-2xl text-center font-title font-semibold">{dict.about.become_a_member.discounts.title}</h2>
              </div>
              <p className='text-center'>{dict.about.become_a_member.discounts.description}</p>
              <a className='mx-auto flex flex-row items-center text-[#5C657F] justify-center gap-1' href="https://store.cesium.pt">
                <p className='text-center'>{dict.about.become_a_member.discounts.link}</p>
                <span className='material-symbols-outlined leading-8'>
                  north_east
                </span>
              </a>
            </div>
          </div>

          <div className="-mb-[25px] -mr-[150px] w-[300px] h-[150px] sm:w-[400px] sm:h-[200px] lg:mt-[150px] justify-self-end overflow-hidden relative order-3">
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
    
  </main>);
}
