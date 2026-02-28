import { services } from "@/lib/constants";
import Card from "../ui/card";
import SectionHeader from "../ui/section-header";

const OurServices = () => {
  return (
    <section className="max-container padding space-y-12">
      <SectionHeader
        label={"Our Services"}
        title={"Security & Technical Solutions We Provide"}
        description={
          "We specialize in professional CCTV installation and surveillance systems, supported by complementary services that enhance safety, control, and operational reliability."
        }
      ></SectionHeader>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,320px))] gap-8 sm:justify-center">
        {services.map((service) => (
          <li key={service.title} className="h-full">
            <Card {...service}></Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OurServices;
