import Image from "next/image";
import { ShortcutButton } from "@/components/shortcut-button";

// TODO: REMOVE CHANGES ON THIS FILE

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 md:flex-row md:flex-nowrap">
        <ShortcutButton
          href="https://calendario.cesium.di.uminho.pt/"
          highlight="EM DESTAQUE"
        >
          <Image
            src="/logo/cesium-full.svg"
            width={500}
            height={500}
            className="h-full w-36"
            alt="wtv"
          />
        </ShortcutButton>

        <ShortcutButton href="https://calendario.cesium.di.uminho.pt/">
          <span className="line-clamp-2 text-sm">
            Formulário de
            <br />
            <b>
              Sugestões <span className="text-primary">e</span> Problemas
            </b>
          </span>
        </ShortcutButton>
      </div>
    </div>
  );
}
