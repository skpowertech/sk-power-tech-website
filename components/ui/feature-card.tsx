import Image from "next/image"

interface FeatureCardProps {
  title: string,
  description: string,
  iconSrc: string, 
  iconAlt: string,
}


const FeatureCard = ({title, description, iconSrc, iconAlt}: FeatureCardProps) => {
  return (
    <div className="flex gap-6 p-8 shadow-md bg-zodiac-50 rounded-xl h-full w-full" >
      <div className="w-8 h-8 shrink-0">
        <Image src={iconSrc} alt={iconAlt} width={40} height={40} className="object-contain "></Image>
      </div>
      <div>
        <p className="text-lg font-medium">{title}</p>
        <p className="max-w-xs text-zinc-500">{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard