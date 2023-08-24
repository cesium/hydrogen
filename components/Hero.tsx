import Image from "next/image";
import logo from "@/public/cesium.svg";

export default function Hero() {
  return (
    <div className="mt-32 flex items-center justify-center gap-36">
      <div className="w-[530px] flex-col items-center justify-center">
        <div className="mb-6 text-8xl font-semibold">CeSIUM</div>
        <div className="text-2xl font-semibold">
          Centro de Estudantes de Engenharia Informática da Universidade do Minho
        </div>
      </div>
      <div className="relative">
        <Image src={logo} alt="" width={300} height={343} priority />
        <Image
          className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-150 transform rounded-lg object-cover opacity-40 blur-3xl filter"
          src={logo}
          alt=""
          width={300}
          height={343}
          priority
        />
      </div>
    </div>
  );
}
