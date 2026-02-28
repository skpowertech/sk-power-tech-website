import AboutSection from "@/components/sections/about-section";
import AdaptableSolutions from "@/components/sections/adaptable-solutions";
import CTASection from "@/components/sections/cta-section";
import Hero from "@/components/sections/hero";
import OurServices from "@/components/sections/our-services";
import OurWork from "@/components/sections/our-work";
import Process from "@/components/sections/process";
import WhatYouGet from "@/components/sections/what-you-get";
import WhyChooseUs from "@/components/sections/why-choose-us";
import { about } from "@/lib/constants";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <WhatYouGet />
      <OurServices />
      <AdaptableSolutions />
      <Process />
      <OurWork />
      <AboutSection {...about} />
      <CTASection />
    </div>
  );
}
