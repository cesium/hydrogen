import Image from "next/image"
import { ShortcutButton } from "@/components/shortcut-button"

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="flex flex-col md:flex-row md:flex-nowrap gap-4 max-w-[1400px] mx-auto">
        <ShortcutButton href="https://calendario.cesium.di.uminho.pt/" highlight="EM DESTAQUE">
          <span className="text-2xl font-bold text-primary">PERIFÉRICO</span>
        </ShortcutButton>

        <ShortcutButton href="https://calendario.cesium.di.uminho.pt/">
            <div className="flex items-center gap-3">
            <Image src="/images/none.png" alt="Calendarium" width={32} height={32} className="rounded-full" />
            <span className="text-xl">
              cal<span className="text-primary">e</span>ndarium
            </span>
            </div>
        </ShortcutButton>

        <ShortcutButton href="https://calendario.cesium.di.uminho.pt/">
          <div className="flex items-center gap-3">
            <Image src="/images/none.png" alt="Discord" width={32} height={32} className="rounded-full" />
            <div className="text-xl">
              Discord do
              <br />
              CESIUM
            </div>
          </div>
        </ShortcutButton>

        <ShortcutButton href="https://calendario.cesium.di.uminho.pt/">
          <div>
            <span className="text-xl">
              Formulário de
              <br />
              Sugestões <span className="text-primary">e</span> Problemas
            </span>
          </div>
        </ShortcutButton>

        <ShortcutButton href="https://calendario.cesium.di.uminho.pt/">
          <span className="text-xl text-gray-400">Atalho</span>
        </ShortcutButton>
      </div>
    </div>
  )
}

