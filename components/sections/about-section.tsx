import Image from "next/image";
import SectionHeader from "../ui/section-header";

interface AboutSectionProps {
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  imageSrc: string;
  imageAlt: string;
}

const AboutSection = ({
  badge,
  title,
  description,
  highlights,
  imageSrc,
  imageAlt,
}: AboutSectionProps) => {
  return (
    <section className="max-container padding space-y-12">
      <SectionHeader
        label="About us"
        title="Who We Are"
        description="Engineering and surveillance solutions delivered across electrical, power, and safety systems — backed by licensed operations, compliance, and hands-on project execution since 2018."
      ></SectionHeader>
      <div className="grid w-fit gap-8 sm:mx-auto sm:place-items-center lg:grid-cols-2">
        <div className="order-2 flex flex-col gap-8 lg:order-1">
          <span className="bg-zodiac-100 w-fit rounded-sm px-3.5 py-1.5 text-sm font-medium">
            {badge}
          </span>
          <h5 className="text-2xl font-medium tracking-tight">{title}</h5>
          <p className="max-w-xl text-zinc-500">{description}</p>
          <ul className="space-y-2">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex">
                <HighlightItem>{highlight}</HighlightItem>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 max-w-lg lg:order-2">
          <Image
            className="w-full rounded-xl"
            src={imageSrc}
            alt={imageAlt}
            width={520}
            height={390}
          ></Image>
        </div>
      </div>
    </section>
  );
};

const HighlightItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start justify-center gap-2">
      <Image
        src={"/icons/ui/tick-icon.png"}
        alt="tick icon"
        width={16}
        height={16}
        className="mt-1 h-4 w-4"
      ></Image>
      <span className="text-zinc-500">{children}</span>
    </div>
  );
};

export default AboutSection;
