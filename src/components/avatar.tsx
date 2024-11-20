import Image from "next/image";

interface AvatarProps {
  src?: string;
  name?: string;
  role?: string;
}

const Avatar = ({ src, name, role }: AvatarProps) => {
  return (
    <div className="flex flex-shrink-0 items-center gap-4 md:flex-col">
      <Image
        src={src ?? "/images/none.png"}
        alt="Profile picture"
        width={400}
        height={400}
        className="size-16 rounded-full md:size-32"
        loading="lazy"
        placeholder="blur"
        blurDataURL="/images/none.png"
        unoptimized
      />
      <div className="flex max-w-36 flex-col gap-1 md:items-center">
        <h3 className="font-medium md:text-center">{name}</h3>
        <p className="text-sm text-gray md:text-center">{role}</p>
      </div>
    </div>
  );
};

export default Avatar;
