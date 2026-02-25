import { features } from "@/lib/constants"
import SectionHeader from "../ui/section-header"
import FeatureCard from "../ui/feature-card"

const WhatYouGet = () => {
  return (
    <section className="max-container padding space-y-12">
      <SectionHeader
        label="What You Get"
        title="Everything You Need for Reliable Surveillance"
        description="Essential features designed to protect your business — from theft deterrence and mobile monitoring to fast installation and dependable local support."
      ></SectionHeader>
      <ul className="grid gap-6 md:grid-cols-2 w-fit mx-0 md:mx-auto justify-items-center">
        {features.map((feature) => (
          <li key={feature.title}>
            <FeatureCard
              {...feature}              
            ></FeatureCard>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default WhatYouGet