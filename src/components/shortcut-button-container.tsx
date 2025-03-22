import Markdown from "markdown-to-jsx";
import ShortcutButton from "./shortcut-button";
import Image from "next/image";

export default function ShortcutButtonsContainer() {
  return (
    <div className="grid w-full grid-cols-2 gap-4 min-[1370px]:grid-cols-5">
      <ShortcutButton
        href="https://calendario.cesium.di.uminho.pt/"
        highlight="EM DESTAQUE"
      >
        <Image
          src="/logo/calendarium.svg"
          width={200}
          height={200}
          alt="Calendarium Logo"
        />
      </ShortcutButton>

      <ShortcutButton href="https://discord.com/invite/wQEvhkfFPk">
        <div className="flex h-full items-center justify-center gap-2 text-[11px] sm:gap-3 sm:text-base">
          <Image
            src="/logo/discord.svg"
            width={50}
            height={50}
            className="h-[2.5em] w-fit"
            alt="Discord Logo"
          />
          <Markdown className="line-clamp-2 font-title">
            {"Discord do <p>**CeSIUM**</p>"}
          </Markdown>
        </div>
      </ShortcutButton>

      <ShortcutButton href="https://periferico.cesium.di.uminho.pt/">
        <Image
          src="/logo/periferico.svg"
          width={200}
          height={200}
          alt="Periferico Logo"
        />
      </ShortcutButton>

      <ShortcutButton href="https://pelomundo.cesium.di.uminho.pt/">
        <div className="flex h-full items-center justify-center gap-1.5 text-[11px] sm:gap-3 sm:text-base">
          <Image
            src="/logo/cesium-pelo-mundo.svg"
            width={50}
            height={50}
            className="h-[2.5em] w-fit"
            alt="CeSIUM pelo Mundo Logo"
          />
          <Markdown className="line-clamp-2 font-title">
            {"<p>CeSIUM</p>**pelo Mundo**"}
          </Markdown>
        </div>
      </ShortcutButton>

      <div className="col-span-2 min-[1370px]:col-span-1">
        <ShortcutButton href="https://cesium.link/">
          <Image
            src="/logo/cesium-link.svg"
            width={200}
            height={200}
            className="h-[2.5em] w-fit"
            alt="CeSIUM Link Logo"
          />
        </ShortcutButton>
      </div>
    </div>
  );
}
