import Image from "next/image";

interface ServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  title: string;
  description: string;
}

const ServiceCard = ({
  imageSrc,
  imageAlt,
  tags,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div className="max-w-xs h-full rounded-xl shadow-lg">
      <Image className="rounded-t-xl w-full " src={imageSrc} alt={imageAlt} width={320} height={240}></Image>
      <div className="space-y-3 py-10 px-4">
        <div className="space-x-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1.5 rounded-md text-xs font-semibold bg-zinc-100 text-zinc-700">{tag}</span>
          ))}
        </div>
        <h4>{title}</h4>
        <p className="max-w-75 text-zinc-500">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
