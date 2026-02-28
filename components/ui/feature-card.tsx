import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
}

const FeatureCard = ({
  title,
  description,
  iconSrc,
  iconAlt,
}: FeatureCardProps) => {
  return (
    <div className="bg-zodiac-50 flex h-full w-full gap-6 rounded-xl p-8 shadow-md">
      <div className="h-8 w-8 shrink-0">
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={40}
          height={40}
          className="object-contain"
        ></Image>
      </div>
      <div>
        <p className="text-lg font-medium">{title}</p>
        <p className="max-w-xs text-zinc-500">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
