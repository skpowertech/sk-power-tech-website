'use client'

import ServiceCard from "@/components/services/service-card";
import ServiceTabs from "@/components/services/service-tabs";
import { servicesDetails } from "@/lib/constants";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const ServicesPage = () => {

  const [activeServiceIndex, setActiveServiceIndex] = useState(0)

  const handleServiceChange = (index: number) => {
    setActiveServiceIndex(index)
  }

  return (
    <div className="relative pb-8 md:pb-16" >
      <div className="relative inset-x-0 h-56 sm:h-64 md:h-72 lg:h-80 " >
        <Image 
          src={'/images/services/services-page-cover.png'} 
          alt="Technicians working on CCTV and electrical infrastructure in industrial engineering environment"
          fill  
          className="object-cover object- w-full h-full"
        ></Image>
        <div className="absolute inset-0 bg-linear-to-r from-[#020817] via-[#020817]/85 to-[#020817]/40" ></div>
        <div className="flex flex-col justify-center absolute z-10 inset-0 text-white max-container padding" >
            <h1 className="text-slate-200 mb-2" >Services</h1>
            <p className="max-w-lg text-slate-400 text-sm sm:text-base" >End-to-end security and electrical solutions for residential, commercial, and industrial environments.</p>
        </div>
      </div>
      <div className="flex flex-col gap-12 max-container padding">
        <ServiceTabs
            activeIndex={activeServiceIndex}
            onTabClick={handleServiceChange}
          />  
        <AnimatePresence mode="wait" >
          <ServiceCard key={activeServiceIndex} {...servicesDetails[activeServiceIndex]} ></ServiceCard>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServicesPage;
