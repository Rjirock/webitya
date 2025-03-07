"use client";

import HomeServicesSection from "@/components/Homepage/Services";
import HomeClientLogos from "@/components/Homepage/ClientLogos";
import HomeHero from "@/components/Homepage/HomeHero";
import HomeBusinessSection from "@/components/Homepage/BusinessSection";
import HomeAboutUs from "@/components/Homepage/HomeAboutUs";


const WebityaHero = () => {
  

  return (
   <>
     <HomeHero/>
     <HomeAboutUs/>
     <HomeBusinessSection/>
    <HomeServicesSection/>
   
    <HomeClientLogos/>
   </>
  );
};

export default WebityaHero;
