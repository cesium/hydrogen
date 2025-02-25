"use client";

import Button from "src/components/button";
import Image from "next/image";

export default function BecomeACollaborator() {
  return <main>
    <div className={`flex flex-col gap-8 sm:gap-4 h-[600px] bg-blue px-16 py-20`}>

      <div className="font-semibold text-7xl font-title text-white">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 via-white/60 to-white/100">
          Torna-te colaborador do 
        </h1>
        <h1 className= "py-4">
          CeSIUM
        </h1>
      </div>

      <div className="text-white text-2xl font-light space-y-1 px-1">
        <h1>
          Move-nos a vontade de tornar o nosso curso melhor para nós e para todos. 
        </h1>
        <h1>
          Também podes fazer parte.
        </h1>
      </div>


      <div className="flex w-full justify-end -translate-y-56 px-8">
                <Image
                  src="/vectors/collaborator.svg"
                  width={748}
                  height={1}
                  alt="Ouro no pescoço"
                />
      </div>
    </div>

    <div className="-translate-y-32 px-80 transform scale-[1.4]">

      <Button
            title="Inscreve-te"
            style="style1"
            color="blue"
            as="link"
            href="/"
            />
    </div>

    </main>;
}
