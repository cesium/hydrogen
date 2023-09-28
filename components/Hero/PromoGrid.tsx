import Link from "next/link";
import Image from "next/image";

import CeSIUMLogo from "../CeSIUMLogo";
import Carousel from "../Carousel";

import PromoGridItems from "@/data/PromoGridItems.json";

// Information carried by each Item of the PromoGrid
type BannerInfo = {
  title?: string; // main text
  subtitle?: string; // additional text diplayed to the right of the title
  description: string; // text displayed below the title and subtitle OR image alt text
  href: string; // image/button url/path
  image?: string; // image path
  span: number; // the space (nr of columns) each item should take in the grid
};

/* `Banner` displays a promotional rectangle with an image or text.
 * It makes up each item of the `PromoGrid` component. */
const Banner = ({ item }: { item: BannerInfo }) => {
  return (
    <div
      className={`relative h-[250px] flex-[0_0_100%] p-8 font-orbitron text-5xl font-bold ${
        item.image ? "hover:opacity-9 bg-transparent" : "bg-gray-200"
      }`}
      style={{ gridColumn: `span ${item.span} / span ${item.span} ` }}
    >
      {/* Body */}
      {item.image ? (
        // Image? Display only the Image
        <Link href={item.href} className="absolute inset-0 h-full w-full">
          <Image
            src={`${item.image}`}
            fill
            style={{ objectFit: "cover" }}
            alt={item.description}
          />
        </Link>
      ) : (
        // No Image? Format as a regular Banner
        <>
          <span className="flex flex-row space-x-2">
            <h1>{item.title}</h1>
            <h2 className="mt-[1.2rem] text-lg">{item.subtitle}</h2>
          </span>
          <h5 className="absolute left-8 top-24 mr-8 font-inter text-sm font-normal text-gray-500">
            {item.description}
          </h5>
        </>
      )}
      {/* Button */}
      {!item.image && (
        <Link
          href={item.href}
          className="absolute bottom-8 left-8 font-inter text-sm font-medium text-gray-900 transition-all hover:font-bold hover:text-cesium-900"
        >
          <text className="border-b-2 border-cesium-900">Ver mais</text>{" "}
          <i className="bi bi-chevron-right"></i>
        </Link>
      )}
    </div>
  );
};

const BecomeMemberBanner = () => {
  const advantages: string[] = [
    "Kit de Sócio",
    "Cartão de Sócio",
    "Descontos em Parceiros",
    "Acesso a Eventos Especiais",
  ];

  return (
    <div className="relative col-span-2 flex h-[250px] flex-col justify-between space-y-4 overflow-hidden bg-dark-gray p-8 font-orbitron text-5xl font-bold text-white shadow-sm shadow-gray-900/20">
      <h1>Torna-te Sócio</h1>
      {/* Advantages List */}
      <ul className="list-inside list-disc font-inter text-sm font-normal text-white">
        {advantages.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* Learn More Button */}
      <Link
        href="/"
        className="w-fit font-inter text-lg font-medium text-white transition-all hover:font-bold"
      >
        <text className="border-b-2 border-cesium-900">Saber mais</text>{" "}
        <i className="bi bi-chevron-right"></i>
      </Link>
      {/* Decorative CeSIUM Logo */}
      <span className="absolute -right-[5.5rem] top-[3rem]">
        <CeSIUMLogo width={200} color="white" />
      </span>
    </div>
  );
};

const PromoGrid = () => {
  return (
    <div className="grid w-[516px] grid-cols-2 gap-4 overflow-hidden rounded-tl-[140px] shadow-sm shadow-gray-900/20">
      {/* --> 1st Banner */}
      <Carousel index={0} loop>
        {(PromoGridItems[0] as BannerInfo[]).map((item) => (
          <Banner item={item} />
        ))}
      </Carousel>
      {/* --> 2nd Banner */}
      <Carousel index={1} loop>
        {(PromoGridItems[1] as BannerInfo[]).map((item) => (
          <Banner item={item} />
        ))}
      </Carousel>
      {/* --> Become a Member Banner */}
      <BecomeMemberBanner />
    </div>
  );
};

export default PromoGrid;
