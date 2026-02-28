import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tags?: string[];
  location?: string;
  href?: string;
}

const Card = ({
  imageSrc,
  imageAlt,
  title,
  description,
  tags,
  location,
  href,
}: CardProps) => {
  return (
    <div className="flex h-full max-w-xs flex-col rounded-xl shadow-lg">
      <Image
        className="w-full rounded-t-xl"
        src={imageSrc}
        alt={imageAlt}
        width={320}
        height={240}
      ></Image>
      <div className="flex flex-1 flex-col gap-3 px-4 py-6">
        {location && (
          <div className="flex gap-2">
            <Image
              className="h-4 w-4 object-contain"
              src={"/icons/ui/location-icon.png"}
              alt="location-icon"
              width={16}
              height={16}
            ></Image>
            <span className="text-xs text-zinc-500">{location}</span>
          </div>
        )}
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-zinc-100 px-3 py-1.5 text-xs font-semibold text-zinc-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h4>{title}</h4>
        <p className="max-w-75 text-zinc-500">{description}</p>
        {href && (
          <div className="mt-auto flex flex-col gap-3 pt-2">
            <div className="h-0.5 w-full rounded-full bg-black/10"></div>
            <Link
              href={href}
              className="border-zodiac-950/50 w-fit border px-3.5 py-1.5 text-xs leading-4 tracking-wide"
            >
              View Project
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
