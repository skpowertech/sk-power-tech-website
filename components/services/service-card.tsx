import Image from "next/image"
import FeatureItem from "../ui/feature-item"
import {easeInOut, motion} from 'motion/react'

interface ServiceDetail {
    tabTitle: string,
    title: string,
    imageSrc: string,
    imageAlt: string,
    description:string,
    features: string[]
}

const ServiceCard = ({tabTitle, title, imageSrc, imageAlt, description, features}: ServiceDetail) => {
  return (
    <motion.div
      initial={{opacity: 0, x: 40}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: -40}} 
      transition={{duration: 0.35, ease: 'easeInOut'}}
    >
      <h2 className="mb-8" >{title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="" >
          <Image src={imageSrc} alt={imageAlt} width={800} height={600}  className="w-full object-cover rounded-lg"></Image>
        </div>
        <div className="space-y-4">
          <p className="text-slate-500 max-w-lg">{description}</p>
          <ul className="space-y-1" >
            {features.map((feature) => (
              <li key={feature}>
                <FeatureItem>{feature}</FeatureItem>
              </li>
            )) }
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard