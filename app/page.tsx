import WhatYouGet from "@/components/sections/what-you-get";
import Hero from "@/components/sections/hero";
import WhyChooseUs from "@/components/sections/why-choose-us";
import OurServices from "@/components/sections/our-services";

export default function Home() {
  return (
    <div>
      <Hero/>
      <WhyChooseUs/>
      <WhatYouGet/>
      <OurServices/>
    </div>
  );
}
