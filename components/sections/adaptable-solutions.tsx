import { adaptableSolutions } from "@/lib/constants";
import Card from "../ui/card";
import SectionHeader from "../ui/section-header";

const AdaptableSolutions = () => {
  return (
    <section className="max-container padding space-y-12">
      <SectionHeader
        label={"Adaptable Solutions"}
        title={"Solutions Tailored to Your Requirements"}
        description={
          "We design and install CCTV systems based on your layout, risk level, and operational needs — whether you run a shop, office, warehouse, or specialized facility."
        }
      ></SectionHeader>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,320px))] gap-8 sm:justify-center">
        {adaptableSolutions.map((solution) => (
          <li key={solution.title} className="h-full">
            <Card {...solution}></Card>
          </li>
        ))}
      </ul>
      <p className="pt-8 text-center text-lg">
        Don’t see your industry? We customize solutions for any business type.
      </p>
    </section>
  );
};

export default AdaptableSolutions;
