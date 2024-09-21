import Link from "next/link";

const info = {
  caos: {
    name: ["Centro de Apoio ao", "Open Source"],
    description:
      "Responsável por todo o desenvolvimento de software associado ao CeSIUM, quer sejam as plataformas que servem diretamente o núcleo e os seus eventos, ou as plataformas úteis para os alunos.",
    icon: "terminal",
  },
  dmc: {
    name: ["Departamento de", "Marketing e Conteúdo"],
    description:
      "O DMC é responsável pela divulgação de atividades e gestão das redes sociais do CeSIUM, isto é, todo o marketing do CeSIUM. O seu trabalho divide-se, essencialmente, no design estilístico do CeSIUM e na comunicação escrita.",
    icon: "lightbulb",
  },
  drem: {
    name: ["Departamento de", "Relações Externas e Merch"],
    description:
      "O DREM é o departamento que trata de estabelecer e manter as parcerias das quais os sócios do CeSIUM podem usufruir, bem como efetuar o contacto com todas as entidades externas ao CeSIUM. É ainda da sua responsabilidade a criação do merch do núcleo para todos os nossos estudantes.",
    icon: "handshake",
  },
  ped: {
    name: ["Departamento", "Pedagógico"],
    description:
      "O Departamento Pedagógico está encarregue de organizar atividades do foro didático, como sessões de estudo, palestras, workshops, entre outros, ajudando os alunos no seu estudo e promovendo o interesse pelas diversas áreas da Informática.",
    icon: "draw",
  },
  rec: {
    name: ["Departamento", "Recreativo"],
    description:
      "O Departamento Recreativo organiza atividades lúdicas e sociais, com o intuito de unir os estudantes e melhorar a sua experiência académica. As atividades realizadas vão desde competições desportivas, a torneios de jogos, festas académicas, lanches, e muito mais.",
    icon: "celebration",
  },
};

interface DepartmentCardProps {
  type: "caos" | "dmc" | "drem" | "ped" | "rec";
}

const DepartmentCard = ({ type }: DepartmentCardProps) => {
  const gradient = () => {
    switch (type) {
      case "caos":
        return ["[#0085FF]/10", "[#00D1FF]/10"];
      case "dmc":
        return ["[#FF00F5]/10", "[#FF2E00]/10"];
      case "drem":
        return ["[#0500FF]/10", "[#A500DE]/10"];
      case "ped":
        return ["[#E4B12E]/20", "[#ED7950]/20"];
      case "rec":
        return ["[#03A300]/10", "[#82E700]/10"];
      default:
        return ["[#0085FF]/10", "[#00D1FF]/10"];
    }
  };

  return (
    <div className="relative grid w-full overflow-hidden rounded-3xl">
      <div className="absolute bottom-0 right-0 hidden translate-x-10 translate-y-10 select-none bg-gradient-to-br from-black/0 to-black/20 bg-clip-text font-title text-9xl text-transparent lg:inline-block">
        {type.toUpperCase()}
      </div>
      <div className="col-start-1 row-start-1 box-border rounded-3xl border border-black/10" />
      <div
        className={`col-start-1 row-start-1 bg-gradient-to-r lg:bg-gradient-to-t from-${gradient()[0]} to-${gradient()[1]}`}
      />
      <div className="col-start-1 row-start-1 bg-gradient-to-b from-[#F0F0F0] to-transparent lg:bg-gradient-to-r" />

      <div className="col-start-1 row-start-1 grid place-items-start gap-4 p-7 lg:grid-flow-col lg:gap-20 lg:p-14 lg:pr-36">
        <div className="w-full space-y-4">
          <div className="font-title text-2xl font-medium lg:text-2xl">
            <span className="material-symbols-outlined text-4xl text-black/50">
              {info[type].icon}
            </span>
            <p className="text-black/50">{info[type].name[0]}</p>
            <p className="text-black">{info[type].name[1]}</p>
          </div>
          <div className="flex items-center justify-between lg:justify-normal">
            <div className="flex space-x-1">
              {/* TODO: Get team information from somewhere */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="size-9 rounded-full bg-gray/20" />
              ))}
            </div>
            <Link
              className="pl-8 text-sm font-medium hover:underline"
              href="/about/team"
            >
              Ver direção {"->"}
            </Link>
          </div>
        </div>
        <p className="flex h-full items-center text-justify text-sm lg:text-base">
          {info[type].description}
        </p>
      </div>
    </div>
  );
};

export default DepartmentCard;
