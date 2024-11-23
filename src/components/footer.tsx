const Footer = () => {
  const NavigationSection = ({
    title,
    items,
  }: {
    title: string;
    items: string[];
    links: string[];
  }) => (
    <>
      <h3 className="mb-3 text-[16px] text-black">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <a className="text-[14px] text-gray" href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  );

  const sections = [
    {
      title: "CeSIUM",
      items: ["Notícias", "Sobre Nós", "Equipa", "Departamentos"],
      links: ["#", "#", "#", "#"],
    },
    {
      title: "Atividades",
      items: ["Projetos", "Eventos", "Parcerias"],
      links: ["#", "#", "#"],
    },
    {
      title: "Estudantes",
      items: ["Torna-te sócio", "Torna-te colaborador", "Anuário"],
      links: ["#", "#", "#"],
    },
    {
      title: "Links Úteis",
      items: ["Calendarium", "Blackboard", "Portal do Aluno", "Página de LEI"],
      links: ["#", "#", "#", "#"],
    },
  ];

  const socialLinks = [
    { icon: "facebook.svg", alt: "Facebook" },
    { icon: "instagram.svg", alt: "Instagram" },
    { icon: "twitter.svg", alt: "Twitter" },
    { icon: "github.svg", alt: "Github" },
    { icon: "youtube.svg", alt: "Youtube" },
  ];

  const contactInfo = [
    "Braga, Portugal",
    "Telefone: +351 253 604 448",
    "Email: cesium@di.uminho.pt",
  ];

  return (
    <footer className="mt-8 flex flex-col place-items-center bg-[#EBEBEB] px-[20px] pb-[70px] pt-[32px] sm:flex-row sm:place-items-end sm:px-[30px] md:px-[100px]">
      <div className="flex w-full max-w-[500px] flex-col place-items-center justify-center space-y-[22px] sm:flex sm:w-1/2 sm:max-w-max sm:flex-col-reverse md:place-items-start">
        <div className="w-full space-y-6 pb-[10px] sm:mt-[50px] sm:w-80 sm:pb-[0px]">
          <img src="cesium.svg" alt="" className="h-[37]  w-[32px] text-sm" />
          <p className="text-[14px] leading-[17px] text-[#94959C]">
            CeSIUM - Centro de Estudantes de Engenharia Informática da
            Universidade do Minho
          </p>
          <div className="justify-left flex h-[30px] space-x-[20px]">
            {socialLinks.map((social, index) => (
              <img
                key={index}
                src={social.icon}
                alt={social.alt}
                className="h-[26px] w-[26px]"
              />
            ))}
          </div>
        </div>
        <div className="w-full">
          {/* Left */}
          <div className="flex w-full min-w-[300px] space-x-[50px] sm:min-w-[600px] sm:space-x-0 sm:space-x-[25px]">
            <div className="flex w-full flex-col space-y-[32px] sm:w-[300px] sm:flex-row sm:space-x-[50px] sm:space-y-0">
              <div className="space-y-[12px]">
                {sections[0] && (
                  <NavigationSection
                    title={sections[0].title}
                    items={sections[0].items}
                    links={sections[0].links}
                  />
                )}
              </div>
              <div className="space-y-[12px] sm:hidden">
                {sections[2] && (
                  <NavigationSection
                    title={sections[2].title}
                    items={sections[2].items}
                    links={sections[2].links}
                  />
                )}
              </div>
              <div className="hidden space-y-[12px] sm:block">
                {sections[1] && (
                  <NavigationSection
                    title={sections[1].title}
                    items={sections[1].items}
                    links={sections[1].links}
                  />
                )}
              </div>
            </div>
            {/* Right */}
            <div className="flex w-full flex-col space-y-[32px] sm:w-[300px] sm:flex-row sm:space-y-0">
              <div className="space-y-[12px] sm:hidden">
                {sections[1] && (
                  <NavigationSection
                    title={sections[1].title}
                    items={sections[1].items}
                    links={sections[1].links}
                  />
                )}
              </div>
              <div className="mr-[50px] hidden space-y-[12px] sm:block">
                {sections[2] && (
                  <NavigationSection
                    title={sections[2].title}
                    items={sections[2].items}
                    links={sections[2].links}
                  />
                )}
              </div>
              <div className="space-y-[12px]">
                {sections[3] && (
                  <NavigationSection
                    title={sections[3].title}
                    items={sections[3].items}
                    links={sections[3].links}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-[500px] flex-col sm:place-content-end sm:place-items-end md:max-w-full">
        <div className="my-[32px] h-0 border border-stroke sm:hidden"></div>
        <div className="flex flex-col sm:place-items-end">
          {contactInfo.map((info, index) => (
            <span key={index} className="text-sm text-gray">
              {info}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
