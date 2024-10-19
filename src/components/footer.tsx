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
    <footer className="bg-[#0000000F] p-6 mt-8">
      <div className="lg:flex lg:flex-row md:grid-cols-4 gap-[50px] mb-6">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-black mb-2">{section.title}</h3>
            <ul>
              {section.items.map((item) => (
                <li key={item} className="text-sm mb-4">
                  <a href="#" className="text-stone ">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pt-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-start mb-4 md:mb-0">
          <img src="cesium.svg"  width={32} height={36} alt="CeSIUM Logo" className="-mr-2" />
          <br/>
          <div className="text-sm text-stone">
            <p>CeSIUM - Centro de Estudantes de Engenharia</p>
            <p>Informática da Universidade do Minho</p>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <img src="facebook.svg" alt="Facebook" width={20} height={20} />
            <img src="instagram.svg" alt="instagram" width={20} height={20} />
            <img src="twitter.svg" alt="twitter" width={20} height={20} />
            <img src="github.svg" alt="github" width={20} height={20} />
            <img src="youtube.svg" alt="youtube" width={20} height={20} />
          </div>
        </div>
        <div className="text-sm text-right text-stone">
          <p>Braga, Portugal</p>
          <p>Telefone: +351 253 604 448</p>
          <p>Email: cesium@di.uminho.pt</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;