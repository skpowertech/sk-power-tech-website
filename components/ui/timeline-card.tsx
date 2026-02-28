import Image from "next/image";

interface TimelineCardProps {
  step: string;
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
}

const TimelineCard = ({
  step,
  title,
  description,
  iconSrc,
  iconAlt,
}: TimelineCardProps) => {
  return (
    <div className="flex gap-8">
      <div className="flex min-w-12 justify-end pt-4">
        <span className="font-urbanist text-zodiac-400 text-4xl font-bold">
          {step}
        </span>
      </div>
      <div className="relative flex items-stretch">
        <div className="bg-zodiac-100/90 w-1 self-stretch rounded-full"></div>
        <span className="bg-zodiac-300 absolute top-6 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full"></span>
      </div>
      <div className="xs:flex-row flex flex-col gap-3 py-4">
        <div className="bg-zodiac-400 h-12 w-12 shrink-0 rounded-xl p-2">
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={32}
            height={32}
            className="w-full object-center"
          ></Image>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="font-urbanist text-xl font-medium">{title}</h5>
          <p className="max-w-75 text-sm text-zinc-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
