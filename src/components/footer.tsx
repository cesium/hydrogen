import React from 'react';

const Footer = () => {
  const sections = [
    {
      title: 'CeSIUM',
      items: ['Notícias', 'Sobre Nós', 'Equipa', 'Departamentos']
    },
    {
      title: 'Atividades',
      items: ['Projetos', 'Eventos', 'Parcerias']
    },
    {
      title: 'Estudantes',
      items: ['Torna-te sócio', 'Torna-te colaborador', 'Anuário']
    },
    {
      title: 'Links Úteis',
      items: ['Calendarium', 'Blackboard', 'Portal do Aluno', 'Página de LEI']
    }
  ];

  return (
    <footer className="flex flex-col place-items-center sm:place-items-end sm:flex-row mt-8 pt-[40px] pb-[80px] px-[20px] sm:px-[30px] md:px-[80px] bg-[#EBEBEB]">
      <div className="flex flex-col space-y-[22px] sm:flex sm:flex-col-reverse sm:w-1/2 max-w-[500px] sm:max-w-max w-full justify-center">
        <div className="space-y-6 sm:w-80 sm:mt-[50px] w-full">
          <img src="cesium.svg" alt="" className="text-sm  w-[32.13px] h-[36.81]" />
          <p className="text-gray text-[14px] leading-[16.9px]">CeSIUM - Centro de Estudantes de Engenharia Informática da Universidade do Minho</p>
          <div className="flex justify-left space-x-[18px] h-[30px]">
            <img src="facebook.svg" alt="Facebook" className="w-[25px] h-[25px]"/>
            <img src="instagram.svg" alt="instagram" className="w-[25px] h-[25px]"/>
            <img src="twitter.svg" alt="twitter" className="w-[25px] h-[25px]"/>
            <img src="github.svg" alt="github" className="w-[25px] h-[25px]"/>
            <img src="youtube.svg" alt="youtube" className="w-[25px] h-[25px]"/>
          </div>
        </div>
        <div className="flex space-x-[25px] sm:space-x-0 sm:min-w-[600px]">
        {/* Left */}
          <div className="flex flex-col space-y-[32px] sm:flex-row sm:space-y-0 sm:space-x-[50px] w-full sm:w-[300px]">
            <div className="space-y-[15px]">
              <h3 className="mb-4 text-black">{sections[0]?.title}</h3>
              <ul className="space-y-[14px]">
                  <li className=""><a className="text-[14px] text-gray">{sections[0]?.items[0]}</a></li>
                  <li className=""><a className="text-[14px] text-gray">{sections[0]?.items[1]}</a></li>
                  <li className=""><a className="text-[14px] text-gray">{sections[0]?.items[2]}</a></li>
                  <li className=""><a className="text-[14px] text-gray">{sections[0]?.items[3]}</a></li>
              </ul>
            </div>
            <div className="space-y-[15px] sm:hidden">
              <h3 className="mb-4 text-black">{sections[2]?.title}</h3>
              <ul className="space-y-[15px]">
                  <li className=""><a className="text-[14px] text-gray">{sections[2]?.items[0]}</a></li>
                  <li className=""><a className="text-[14px] text-gray">{sections[2]?.items[1]}</a></li>
                  <li className=""><a className="text-[14px] text-gray">{sections[2]?.items[2]}</a></li>
                  <li className=""><a className="text-[14px] text-gray">{sections[2]?.items[3]}</a></li>
              </ul>
            </div>
            <div className="space-y-[15px] hidden sm:block">
              <h3 className="mb-4 text-black">{sections[1]?.title}</h3>
              <ul className="space-y-[15px]">
                  <li className=""><a className="text-[14px] text-gray">{sections[1]?.items[0]}</a></li>
                  <li className=""><a className="text-[14px] text-gray">{sections[1]?.items[1]}</a></li>
                  <li className=""><a className="text-[14px] text-gray">{sections[1]?.items[2]}</a></li>
                  <li className=""><a className="text-[14px] text-gray">{sections[1]?.items[3]}</a></li>
              </ul>
            </div>
          </div>
        {/* Right */}
          <div className="flex flex-col space-y-[32px] sm:flex-row sm:space-y-0 w-full sm:w-[300px]">
              <div className="space-y-[15px] sm:hidden">
                <h3 className="mb-4 text-black">{sections[1]?.title}</h3>
                <ul className="space-y-[15px]">
                  <li className=""><a className="text-[14px] text-gray">{sections[1]?.items[0]}</a></li>
                  <li className=""><a className="text-[14px] text-gray">{sections[1]?.items[1]}</a></li>
                  <li className=""><a className="text-[14px] text-gray">{sections[1]?.items[2]}</a></li>
                  <li className=""><a className="text-[14px] text-gray">{sections[1]?.items[3]}</a></li>
                </ul>
              </div>
              <div className="space-y-[15px] hidden sm:block mr-[50px]">
                <h3 className="mb-4 text-black">{sections[2]?.title}</h3>
                <ul className="space-y-[15px]">
                  <li className=""><a className="text-[14px] text-gray">{sections[2]?.items[0]}</a></li>
                  <li className=""><a className="text-[14px] text-gray">{sections[2]?.items[1]}</a></li>
                  <li className=""><a className="text-[14px] text-gray">{sections[2]?.items[2]}</a></li>
                  <li className=""><a className="text-[14px] text-gray">{sections[2]?.items[3]}</a></li>
                </ul>
              </div>
              <div className="space-y-[15px]">
                <h3 className="mb-4 text-black">{sections[3]?.title}</h3>
                <ul className="space-y-[15px]">
                  <li className=""><a className="text-[14px] text-gray">{sections[3]?.items[0]}</a></li>
                  <li className=""><a className="text-[14px] text-gray">{sections[3]?.items[1]}</a></li>
                  <li className=""><a className="text-[14px] text-gray">{sections[3]?.items[2]}</a></li>
                  <li className=""><a className="text-[14px] text-gray">{sections[3]?.items[3]}</a></li>
               </ul>
              </div>
            </div>
          </div>
      </div>
      <div className="flex flex-col sm:place-items-end sm:place-content-end w-full">
        <div className="border h-0 my-[32px] border-stroke sm:hidden"></div>
        <div className="flex flex-col sm:place-items-end">
          <span className="text-gray text-[14px]">Braga, Portugal</span>
          <span className="text-gray text-[14px]">Telefone: +351 253 604 448</span>
          <span className="text-gray text-[14px]">Email: cesium@di.uminho.pt</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;