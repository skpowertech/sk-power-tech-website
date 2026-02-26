import Image from "next/image"

interface TimelineCardProps {
  step: string, 
  title: string, 
  description: string,
  iconSrc: string, 
  iconAlt: string
}

const TimelineCard = ({
  step,
  title,
  description,
  iconSrc,
  iconAlt
}:TimelineCardProps) => {
  return (
    <div className="flex gap-8">
      <div className="pt-4 min-w-12  flex justify-end">
        <span className="text-4xl font-urbanist font-bold text-zodiac-400" >{step}</span>
      </div>
      <div className="relative flex items-stretch">
        <div className="w-1 bg-zodiac-100/90 self-stretch rounded-full"></div>
        <span className="absolute h-4 w-4 bg-zodiac-300 rounded-full top-6 left-1/2 -translate-x-1/2" ></span>
      </div>
      <div className="flex gap-3 py-4 flex-col xs:flex-row">
        <div className="p-2 bg-zodiac-400 w-12 h-12 rounded-xl shrink-0" >
          <Image src={iconSrc} alt={iconAlt} width={32} height={32} className="w-full object-center" ></Image>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="font-urbanist font-medium text-xl" >{title}</h5>
          <p className="max-w-75 text-zinc-500 text-sm" >{description}</p>
        </div>
      </div>
    </div>
  )
}

export default TimelineCard