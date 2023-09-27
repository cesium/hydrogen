import Image from "next/image";
import calendarium from "@/public/calendarium.png";

export default function PartnerBenefits() {
  return (
    <div className="flex flex-row gap-20 bg-cesium-900 px-80 py-10">
      <Image src={calendarium} width={384} height={384} alt=""></Image>
      <div className="flex flex-col items-start justify-start gap-4">
        <h2 className="mt-10 font-orbitron text-4xl font-bold text-white">
          Ja ouviste falar no Calendarium?
        </h2>
        <p className="w-[700px] text-justify text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          explicabo nobis temporibus nam, dolorum est sequi quasi corrupti,
          illum optio ducimus harum?
        </p>
        <ul className="list-inside list-disc text-justify font-inter text-sm font-normal text-white">
          {[
            "lorem ipsum dolor sit amet",
            "lorem ipsum dolor sit amet",
            "lorem ipsum dolor sit amet",
            "lorem ipsum dolor sit amet",
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {/* <LinkButton
          className="bg-white px-6 py-4 font-orbitron text-base text-cesium-900"
          title="Saber mais"
          linkPath="/"
        /> */}
      </div>
    </div>
  );
}
