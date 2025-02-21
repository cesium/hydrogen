import Image from 'next/image';
import InfoCard from '@/components/info-card';

export default function BecomeAMember() {
  return (
  <main
    className={`flex flex-col gap-8 sm:gap-12 px-5 md:px-20`}
  > 
    
    <InfoCard>
      <div className="flex flex-col px-[50px] pt-[40px] gap-4 overflow-hidden">

          <div className="flex flex-col md:flex-row gap-4 z-10">
            <Image src="/vectors/ticket.svg" alt="door" width={30} height={30} />
            <h2 className="text-2xl font-title font-semibold">
              Participa gratuitamente em eventos
            </h2>
          </div>
          <p className='z-10'>
            O teu cartão de sócio é o passe direto para quase todos os nossos eventos. Aproveita noites de karaoke, board games ou cinema, workshops e showoffs, ocasiões especiais como o Magusto e a Noite de Informática, e muito mais, de graça ou com descontos exclusivos.
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
          <div className="w-[200px] h-[200px] overflow-hidden relative">
            <Image 
              src="/images/totebag.png" 
              alt="totebag" 
              layout="fill"
              objectFit="cover"
              objectPosition="right" // Moves focus to the right half
            />
          </div>

          <div className="flex flex-col px-[50px] py-[40px] gap-4">
            <h2 className="text-2xl font-title text-primary font-semibold">Kit de sócio</h2>
            <p>Recebe um starter pack de ofertas, que pode incluir uma T-Shirt, cadernos, stickers, canetas, e mais3. E uma tote bag para levares tudo contigo.</p>
          </div>
        </div>
      </InfoCard>

      <InfoCard>
        <div className="flex flex-col px-[50px] py-[40px] gap-4">
          <Image src="/vectors/door.svg" alt="door" width={25} height={25} />
          <h2 className="text-2xl font-title  font-semibold">Acesso à Sala</h2>
          <p>A porta da sala do CeSIUM está sempre aberta - entra quando quiseres4, e instala-te. Também tens acesso à nossa Mercearia, com bebidas e snacks a preços que não encontrarás noutro sítio.</p>
        </div>
      </InfoCard>

      <InfoCard>
        <div className="flex flex-col px-[50px] py-[40px] gap-4">
          <Image src="/vectors/megaphone.svg" alt="megaphone" width={40} height={31}/>
          <h2 className="text-2xl font-title  font-semibold">Representação dos teus interesses</h2>
          <p>O CeSIUM é a voz dos teus interesses e problemas na universidade. Ao seres sócio, é mais fácil fazeres-te ouvir.</p>
        </div>
      </InfoCard>
    </div>
    
    
  </main>);
}
