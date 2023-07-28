import Image from "next/image";

type SocialLinkProps = {
  href: string;
  icon: string;
};

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <li>
    <a href={href}>{icon}</a>
  </li>
);

type ListLinkProps = {
  href: string;
  text: string;
};

const ListLink = ({ href, text }: ListLinkProps) => (
  <li className="py-1 text-gray-500">
    <a href={href}>{text}</a>
  </li>
);

const Footer = () => {
  return (
    <footer className="mt-12 grid gap-4 px-4 pb-4 md:grid-cols-2 md:px-8 md:pb-8 lg:grid-cols-3 lg:px-20 lg:pb-24">
      <div className="flex flex-col justify-between gap-4 text-gray-500 max-md:items-center max-md:text-center">
        <Image
          src="/cesium.svg"
          alt="CeSIUM logo"
          width={32}
          height={32}
        ></Image>
        <p className="max-w-[40ch]">
          CeSIUM - Centro de Estudantes de Engenharia Informática da
          Universidade do Minho
        </p>
        <ul className="flex flex-wrap gap-x-2">
          <SocialLink href="" icon="Facebook" />
          <SocialLink href="" icon="Instagram" />
          <SocialLink href="" icon="Twitter" />
          <SocialLink href="" icon="Github" />
          <SocialLink href="" icon="Youtube" />
        </ul>
      </div>
      <div className="flex justify-center max-lg:pt-4 max-md:border-t-[1px] max-md:border-gray-300">
        <div className="grid max-w-md grow grid-cols-3 gap-4">
          <div>
            <span>Label</span>
            <ul className="mt-4">
              <ListLink href="" text="Consectetur" />
              <ListLink href="" text="Lorem Ipsum" />
              <ListLink href="" text="Lorem" />
            </ul>
          </div>
          <div>
            <span>Label</span>
            <ul className="mt-4">
              <ListLink href="" text="Lorem Ipsum" />
              <ListLink href="" text="Dolor" />
              <ListLink href="" text="Sit Amet" />
            </ul>
          </div>
          <div>
            <span>Label</span>
            <ul className="mt-4">
              <ListLink href="" text="Facilis nam" />
              <ListLink href="" text="Itaque eius" />
              <ListLink href="" text="Lorem Ipsum" />
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 max-lg:flex max-lg:justify-center max-lg:border-t-[1px] max-lg:border-gray-300 max-lg:pt-4 max-md:pt-4 md:col-span-2 md:self-end lg:col-auto lg:text-right">
        <div>
          <p>Braga, Portugal</p>
          <p>Telefone: +351 253 604 448</p>
          <p>
            Email: <a href="mailto:cesium@di.uminho.pt">cesium@di.uminho.pt</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
