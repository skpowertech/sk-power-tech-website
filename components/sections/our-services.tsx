import { services } from "@/lib/constants"
import SectionHeader from "../ui/section-header"
import ServiceCard from "../ui/service-card"

const OurServices = () => {
  return (
    <section className="max-container padding space-y-12">
      <SectionHeader
        label={'Our Services'}
        title={'Security & Technical Solutions We Provide'}
        description={'We specialize in professional CCTV installation and surveillance systems, supported by complementary services that enhance safety, control, and operational reliability.'}
      ></SectionHeader>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,320px))] justify-center gap-8" >
        {services.map((service) => (
          <li key={service.title} className="h-full">
            <ServiceCard {...service}></ServiceCard>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OurServices