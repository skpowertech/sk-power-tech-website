import WhatYouGet from "@/components/sections/what-you-get";
import Hero from "@/components/sections/hero";
import WhyChooseUs from "@/components/sections/why-choose-us";
import OurServices from "@/components/sections/our-services";
import OurWork from "@/components/sections/our-work";
import AdaptableSolutions from "@/components/sections/adaptable-solutions";
import Process from "@/components/sections/process";
import AboutSection from "@/components/sections/about-section";
import { about } from "@/lib/constants";
import CTASection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <div>
      <Hero/>
      <WhyChooseUs/>
      <WhatYouGet/>
      <OurServices/>
      <AdaptableSolutions/>
      <Process/>
      <OurWork/>
      <AboutSection {...about}/>
      <CTASection/>
    </div>
  );
}
