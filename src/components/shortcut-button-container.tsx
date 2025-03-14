import ShortcutButton from "./shortcut-button"
import Image from 'next/image'

export default function ShortcutButtonsContainer() {
  return (
	<div className="w-full grid grid-cols-2 md:grid-cols-5 gap-4 py-10">
	  <ShortcutButton href="https://perifericos.com" highlight="EM DESTAQUE">
	  	<Image
            src="/images/podcast_periferico.png"
            width={500}
            height={500}
            className="w-28 h-6 md:w-40 md:h-8"
            alt="wtv"
          />
	  </ShortcutButton>

	  <ShortcutButton href="https://calendarium.com">
		<div className="flex items-center text-xs md:text-base">
		  <span>cal</span>
		  <span className="text-primary">e</span>
		  <span>ndarium</span>
		</div>
	  </ShortcutButton>

	  <ShortcutButton href="https://discord.com">
		<div className="flex items-center">
		  <Image
			src="/images/discord_logo.png"
			width={40}
			height={40}
			className="md:w-7 md:h-5 md:mr-4"
			alt="Discord Logo"
		  />
		  <div className="flex flex-col font-title text-xs md:text-base">
			<span>Discord do{'\n'}</span>
			<span className="font-bold">CeSIUM</span>
		  </div>
		</div>
	  </ShortcutButton>

	  <ShortcutButton href="https://forms.com">
		<div className="flex flex-col text-[10px] md:text-sm">
		  <span>Formulário de</span>
		  <span className="font-bold">
			Sugestões <span className="text-primary">e</span> Problemas
		  </span>
		</div>
	  </ShortcutButton>

	  <ShortcutButton href="https://atalho.com">
		<div className="flex items-center justify-center">
		  <span className="text-black/50">Atalho</span>
		</div>
	  </ShortcutButton>
	</div>
  )
}