import Image from "next/image";
import { ShortcutButton } from "@/components/shortcut-button";

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 md:flex-row md:flex-nowrap">
        <ShortcutButton
          href="https://calendario.cesium.di.uminho.pt/"
          highlight="EM DESTAQUE"
        >
          <span className="text-2xl font-bold text-primary">PERIFÉRICO</span>
        </ShortcutButton>

        <ShortcutButton href="https://calendario.cesium.di.uminho.pt/">
          <div className="flex items-center gap-3">
            <Image
              src="/images/none.png"
              alt="Calendarium"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-xl">
              cal<span className="text-primary">e</span>ndarium
            </span>
          </div>
        </ShortcutButton>

        <ShortcutButton href="https://calendario.cesium.di.uminho.pt/">
          <div className="flex items-center gap-3">
            <Image
              src="/images/none.png"
              alt="Discord"
              width={32}
              height={32}
              className="rounded-full"
            />
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
          <span className="text-gray-400 text-xl">Atalho</span>
        </ShortcutButton>
      </div>
    </div>
  );
}
