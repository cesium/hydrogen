import Image from 'next/image'

const Footer = () => {
  const NavigationSection = ({
    title,
    items,
    links
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
              <a className="text-[14px] text-gray" href={links[index]}>
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
    { 
      icon: "facebook.svg", 
      alt: "Facebook" ,
      link: "https://www.facebook.com/cesiuminho"
    },
    { 
      icon: "instagram.svg", 
      alt: "Instagram",
      link: "https://www.instagram.com/cesiuminho/"
    },
    { 
      icon: "twitter.svg", 
      alt: "Twitter",
      link: "https://x.com/cesiuminho "
    },
    { 
      icon: "github.svg", 
      alt: "Github",
      link: "https://github.com/cesium"
    },
    { 
      icon: "youtube.svg", 
      alt: "Youtube",
      link: "https://www.youtube.com/@cesiumUM"
    },
  ];

  const contactInfo = [
    "Braga, Portugal",
    "Telefone: +351 253 604 448",
    "Email: cesium@di.uminho.pt",
  ];

  return (
    <footer className=" flex flex-col sm:flex-row place-items-center sm:place-items-end  px-[20px] pb-[70px] pt-[32px] sm:px-[30px] md:px-[100px] mt-8 bg-[#EBEBEB]">
      <div className="flex flex-col sm:flex-col-reverse w-full sm:w-1/2 max-w-[500px] sm:max-w-max place-items-center md:place-items-start justify-center space-y-[22px]">
        <div className="w-full sm:w-80 space-y-6 pb-[10px] sm:pb-[0px] sm:mt-[50px]">
          <Image src="cesium.svg" alt="" width={32} height={37}/>
          <p className="leading-[17px] text-[14px] text-[#94959C]">
            CeSIUM - Centro de Estudantes de Engenharia Informática da
            Universidade do Minho
          </p>
          <div className="flex h-[30px] justify-left space-x-[20px]">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.link} target="_blank">
                <Image
                  src={social.icon}
                  alt={social.alt}
                  width={26}
                  height={26}
                  className="w-[26px] h-[26px]" 
                />  
              </a>
            ))}
          </div>
        </div>
        <div className="w-full">
          {/* Left */}
          <div className="flex w-full min-w-[300px] sm:min-w-[600px] space-x-[50px] sm:space-x-[20px]">
            <div className="flex flex-col sm:flex-row w-full sm:w-[300px] sm:space-x-[50px] space-y-[32px] sm:space-y-0">
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
            <div className="flex flex-col sm:flex-row w-full sm:w-[300px] space-y-[32px] sm:space-y-0">
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
      <div className="flex flex-col w-full max-w-[500px] md:max-w-full sm:place-content-end sm:place-items-end">
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
