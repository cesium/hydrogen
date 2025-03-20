import ShortcutButton from "./shortcut-button";
import Image from "next/image";

export default function ShortcutButtonsContainer() {
  return (
    <div className="grid w-full grid-cols-2 gap-4 py-6 md:grid-cols-5">
      <ShortcutButton
        href="https://calendario.cesium.di.uminho.pt/"
        highlight="EM DESTAQUE"
      >
        <div className="flex items-center">
          <Image
            src="/logo/calendarium.svg"
            width={200}
            height={200}
            alt="Calendarium Logo Icon"
          />
        </div>
      </ShortcutButton>

      <ShortcutButton href="https://discord.com/invite/wQEvhkfFPk">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo/discord.svg"
            width={27}
            height={20}
            className="md:h-8 md:w-12"
            alt="Discord Logo"
          />
          <div className="flex flex-col font-title text-xs md:text-base">
            <span>Discord do{"\n"}</span>
            <span className="font-bold">CeSIUM</span>
          </div>
        </div>
      </ShortcutButton>

      <ShortcutButton href="https://periferico.cesium.di.uminho.pt/">
        <Image
          src="/images/podcast_periferico.png"
          width={150}
          height={150}
          className="h-6 w-28 md:h-8 md:w-40"
          alt="Periferico Logo"
        />
      </ShortcutButton>

      <ShortcutButton href="https://pelomundo.cesium.di.uminho.pt/">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo/cesium_pelo_mundo.svg"
            width={16}
            height={16}
            className="h-8 w-8 md:h-10 md:w-10"
            alt="Cesium pelo Mundo logo"
          />
          <div className="flex flex-col font-title text-xs md:text-base">
            <span className="font-semibold">CeSIUM</span>
            pelo Mundo
          </div>
        </div>
      </ShortcutButton>

      <div className="col-span-2 md:col-span-1">
        <ShortcutButton href="https://cesium.link/">
          <div className="flex items-center justify-center space-x-2">
            <Image
              src="/images/cesium_link.png"
              width={100}
              height={100}
              className="h-12 w-12"
              alt="Cesium link Logo"
            />
            <span className="font-title font-semibold">CeSIUM Link</span>
          </div>
        </ShortcutButton>
      </div>
    </div>
  );
}
