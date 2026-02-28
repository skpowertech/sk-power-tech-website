import { features } from "@/lib/constants";
import FeatureCard from "../ui/feature-card";
import SectionHeader from "../ui/section-header";

const WhatYouGet = () => {
  return (
    <section className="max-container padding space-y-12">
      <SectionHeader
        label="What You Get"
        title="Everything You Need for Reliable Surveillance"
        description="Essential features designed to protect your business — from theft deterrence and mobile monitoring to fast installation and dependable local support."
      ></SectionHeader>
      <ul className="mx-0 grid w-fit gap-6 sm:mx-auto md:grid-cols-2">
        {features.map((feature) => (
          <li key={feature.title}>
            <FeatureCard {...feature}></FeatureCard>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhatYouGet;
