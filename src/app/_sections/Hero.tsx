import Image from "next/image";
import cesiumLogo from "@/img/cesium-logo.svg";

export default function Hero() {
  return (
    <section className="container pt-24">
      <div className="mx-auto flex w-fit items-center gap-24">
        <div>
          <h1 className="font-orbitron text-8xl font-bold">CeSIUM</h1>
          <p className="max-w-[30rem] text-xl">
            Centro de Estudantes de Engenharia Informática da Universidade do
            Minho
          </p>
        </div>
        <Image src={cesiumLogo} alt="CeSIUM logo" className="w-[22rem]" />
      </div>
    </section>
  );
}
