"use client";

import React from "react";
import LogoScrollWithCards from "@/components/main/LogoScroll";
import NavThroughtCards from "@/components/main/ProductSection";
import HeroContent from "@/components/main/Content";


const Page: React.FC = () => {
  return (
    <>
      <HeroContent />
      <LogoScrollWithCards />
      <NavThroughtCards />
    </>
  );
};

export default Page;
