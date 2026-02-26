import Image from "next/image"
import Link from "next/link"

interface CardProps {
  imageSrc: string, 
  imageAlt: string,
  title: string, 
  description: string,
  tags?: string[]
  location?: string,
  href?: string
}

const Card = ({
  imageSrc,
  imageAlt,
  title, 
  description,
  tags,
  location,
  href
}: CardProps) => {
  return (
    <div className="max-w-xs h-full rounded-xl shadow-lg flex flex-col">
      <Image className="rounded-t-xl w-full " src={imageSrc} alt={imageAlt} width={320} height={240}></Image>
      <div className="flex flex-col gap-3 flex-1 py-6 px-4">
        {location && (
          <div className="flex gap-2">
            <Image className="w-4 h-4 object-contain" src={'/icons/location-icon.png'} alt="location-icon" width={16} height={16} ></Image>
            <span className="text-xs text-zinc-500" >{location}</span>
          </div>
        )}
        {tags && 
          (<div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-md text-xs font-semibold bg-zinc-100 text-zinc-700">{tag}</span>
            ))}
        </div>)}
        <h4>{title}</h4>
        <p className="max-w-75 text-zinc-500">{description}</p>
        {href && (
          <div className="mt-auto pt-2 flex flex-col gap-3">
            <div className="w-full h-0.5 rounded-full bg-black/10"></div>
            <Link href={href} className="py-1.5 px-3.5 border border-zodiac-950/50 w-fit text-xs leading-4 tracking-wide">View Project</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card