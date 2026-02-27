import Image from "next/image"
import SectionHeader from "../ui/section-header"

interface AboutSectionProps {
  badge: string, 
  title: string, 
  description: string,
  highlights: string[],
  imageSrc: string,
  imageAlt: string
}

const AboutSection = ({
  badge, 
  title, 
  description,
  highlights,
  imageSrc,
  imageAlt
}:AboutSectionProps) => {
  return (
    <section className="max-container padding space-y-12">
      <SectionHeader
        label="About us"
        title="Who We Are"
        description="Engineering and surveillance solutions delivered across electrical, power, and safety systems — backed by licensed operations, compliance, and hands-on project execution since 2018."
      ></SectionHeader>
      <div className=" sm:mx-auto w-fit  grid lg:grid-cols-2 gap-8  sm:place-items-center">
        <div className="order-2 lg:order-1 flex flex-col gap-8">
          <span className='w-fit text-sm font-medium bg-zodiac-100 px-3.5 py-1.5 rounded-sm' >
            {badge}
          </span>
          <h5 className="text-2xl tracking-tight font-medium">{title}</h5>
          <p className="text-zinc-500 max-w-xl">{description}</p>
          <ul className="space-y-2">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex">
                <HighlightItem>{highlight}</HighlightItem>
              </li>
            ) )}
          </ul>
        </div>
        <div className="max-w-lg order-1 lg:order-2">
          <Image className="w-full rounded-xl" src={'/about/about-section-img.png'} alt={imageAlt} width={520} height={390} ></Image>
        </div>
      </div>
    </section>
  )
}

const HighlightItem = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex justify-center items-start gap-2">
      <Image src={'/icons/tick-icon.png'} alt="tick icon" width={16} height={16} className="w-4 h-4 mt-1" ></Image>
      <span className="text-zinc-500" >{children}</span>
    </div>
  )
}

export default AboutSection