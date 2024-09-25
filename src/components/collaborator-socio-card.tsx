interface Cardprops {
  type: "colaborador" | "socio";
}

const getGradientColor = (type: "colaborador" | "socio") => {
  switch (type) {
    case "colaborador":
      return "#5069ED"; // Azul
    case "socio":
      return "#ED7950"; // Laranja
    default:
      return "#000000"; // Fallback para preto
  }
};

const info = {
  colaborador: {
    name: ["colaborador"],
    text: [
      "Podes juntar-te a estes departamentos e contribuir para fazer o teu núcleo funcionar.",
      "Vem fazer parte desta equipa e ajuda a tornar o CeSIUM melhor todos os dias.",
    ],
  },
  socio: {
    name: ["socio"],
    text: [
      "Participa em todos os nossos eventos gratuitamente, e usufrui de muitos mais benefícios.",
      "Podes juntar-te a estes departamentos e contribuir para fazer o teu núcleo funcionar.",
    ],
  },
};

const getRandomText = (type: "colaborador" | "socio") => {
  if (type === "socio") {
    const texts = info[type].text;
    return texts[Math.floor(Math.random() * texts.length)];
  } else {
    return info[type].text;
  }
};

const CollaboratorSocioCard = ({ type }: Cardprops) => {
  const color = getGradientColor(type);

  return (
    <div
      className="relative flex h-[269px] w-full flex-col items-center overflow-hidden rounded-xl p-4 text-white md:h-[192px] md:max-w-[1300px] md:flex-row md:p-6"
      style={{ backgroundColor: color }}
    >
      {/* Image */}
      <div className="absolute bottom-0 left-1 h-[87px] w-[148px] md:bottom-0 md:left-0 md:h-[148px] md:w-[250px]">
        <img
          src={
            info[type].name[0] === "colaborador"
              ? "colaboratorcard.svg"
              : "sociocard.svg"
          }
          alt="Colaborador Icon"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Text */}
      <div className="absolute left-2 right-0 top-8 mt-0 flex-grow text-start md:relative md:ml-[236px] md:pb-20 md:text-left">
        <h4 className="mb-2 font-title text-xl md:text-3xl">
          Torna-te {info[type].name}
        </h4>
        <p className="font-sans text-base md:text-base">
          {getRandomText(type)}
        </p>
      </div>

      {/* Buttons */}
      <div className="relative mt-4 flex h-full w-full items-end justify-end md:mt-0 md:items-center md:justify-end md:space-x-4">
        <button
          className="hover:bg-gray-100 absolute bottom-4 right-0 rounded-full bg-white px-4 py-2 font-sans text-sm transition duration-300 md:static md:text-base"
          style={{ color: color }}
        >
          Saber mais
        </button>

        <button
          aria-label="Fechar"
          className={
            info[type].name[0] === "colaborador"
              ? "material-symbols-outlined absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFFFF1A] text-lg text-white transition duration-300 hover:bg-white hover:text-blue md:relative md:right-0 md:top-0 md:h-10 md:w-10 md:text-xl"
              : "material-symbols-outlined absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFFFF1A] text-lg text-white transition duration-300 hover:bg-white hover:text-primary md:relative md:right-0 md:top-0 md:h-10 md:w-10 md:text-xl"
          }
        >
          close
        </button>
      </div>
    </div>
  );
};

export default CollaboratorSocioCard;
