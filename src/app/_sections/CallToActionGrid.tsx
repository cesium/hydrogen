import Image from "next/image";
import Link from "next/link";
import summerCampImage from "@/img/summer_camp.png";

export default function CallToActionGrid() {
  return (
    <section className="py-12">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-4 grid-rows-3 gap-3">
          <Image
            src={summerCampImage}
            alt=""
            className="aspect-square object-cover"
          />
          <div className="bg-slate-200 p-8 pt-12">
            <p className="font-orbitron text-5xl font-bold mb-3">+10</p>
            <p className="mb-3">Parcerias com empresas e descontos para sócios</p>
            <Link href="/" className="text-primary">Ver mais</Link>
          </div>
          <div className="col-span-2 bg-slate-200 p-8 pt-12">
            <p className="font-orbitron text-xl font-bold mb-3">
              <span className="text-5xl">5</span> Departamentos
            </p>
            <p className="mb-3">
              Gostavas de colaborar? Fica a saber mais dos nossos departamentos
              e de tudo o que fazemos
            </p>
            <Link href="/" className="text-primary">Ver mais</Link>
          </div>
          <div className="col-span-2 bg-slate-200 p-8 pt-12">
            <p className="font-orbitron text-5xl font-bold mb-3">Merch</p>
            <p className="mb-3">A oportunidade perfeita para vestir o curso</p>
            <Link href="/" className="text-primary">Ver mais</Link>
          </div>
          <div className="bg-slate-200 p-8 pt-12">
            <p className="font-orbitron text-5xl font-bold mb-3">Logs</p>
            <p className="mb-3">Anúncios e notícias que não vais querer perder</p>
            <Link href="/" className="text-primary">Ver mais</Link>
          </div>
          <Image
            src={summerCampImage}
            alt=""
            className="aspect-square object-cover"
          />
          <div className="col-span-4 bg-zinc-800 p-8 pt-12">
            <p className="font-orbitron text-5xl font-bold text-white">Torna-te sócio</p>
          </div>
        </div>
      </div>
    </section>
  );
}
