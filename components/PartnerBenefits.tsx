import Link from "next/link";

interface IButtonProps {
  title: string;
  linkPath: string;
}

export default function PartnerBenefits() {
  function LinkButton({ title, linkPath }: IButtonProps) {
    return (
      <Link
        className="rounded-lg bg-cesium-orange px-6 py-4 text-2xl font-bold text-white"
        href={linkPath}
      >
        {title}
      </Link>
    );
  }

  return (
    <div className="relative mt-6 h-[400px] bg-light-gray px-0 text-center">
      <h1 className="pt-8 text-2xl font-bold">Vantagens de ser Sócio</h1>

      <p className="flex justify-center px-32 pt-8 opacity-70">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p className="absolute inset-x-0 bottom-12">
        <LinkButton title="Torna-te Sócio" linkPath="/" />
      </p>
    </div>
  );
}
