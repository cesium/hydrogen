import Image from "next/image";

interface AvatarProps {
  src?: string;
  name?: string;
  role?: string;
  imageClassName?: string;
  className?: string;
}

const Avatar = ({
  src,
  name,
  role,
  imageClassName,
  className,
}: AvatarProps) => {
  return (
    <figure
      className={`flex flex-shrink-0 items-center gap-4 md:flex-col${className ? " " + className : ""}`}
    >
      <Image
        src={src ?? "/images/none.png"}
        alt={`${name}'s Profile picture`}
        width={400}
        height={400}
        className={imageClassName ?? "size-16 rounded-full md:size-32"}
        loading="lazy"
        placeholder="blur"
        blurDataURL="/images/none.png"
        unoptimized
      />
      {name && role && (
        <div className="flex max-w-36 flex-col gap-1 md:items-center">
          <h3 className="font-medium md:text-center">{name}</h3>
          <p className="text-sm text-gray md:text-center">{role}</p>
        </div>
      )}
    </figure>
  );
};

export default Avatar;
