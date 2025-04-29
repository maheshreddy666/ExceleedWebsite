"use client";

import React from "react";
import Image from "next/image";
import cie from "@/components/assets/client-Logo/cie.png";
import sansera from "@/components/assets/client-Logo/SanseraLogo.png";
import Mindstec from "@/components/assets/client-Logo/mindsteclogo_135x45.png";
import triveni from "@/components/assets/client-Logo/triveni.png";
import Whatfix from "@/components/assets/client-Logo/Whatfix_Logo_RGB_Color.png";
import Techmah from "@/components/assets/client-Logo/Logo-True-Colors.png";
import cisco from"@/components/assets/About-image/Cisco-logo.png";
import Udtruck from "@/components/assets/client-Logo/ud-truck1.png";
import Iampl from "@/components/assets/client-Logo/logo1.png";
import Zenfold from "@/components/assets/client-Logo/cropped-logo-2024.png";
import { Card } from "@/components/ui/card";

const LogoScroll = [
  {
    id: 1,
    component: (
      <Image
        className="aspect-[16/9] object-contain"
        src={cie}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 2,
    component: (
      <Image
        className="aspect-[16/9] object-contain"
        src={sansera}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 3,
    component: (
      <Image
        className="aspect-[16/9] object-contain"
        src={Mindstec}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 4,
    component: (
      <Image
        className="aspect-[16/9] object-contain"
        src={triveni}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id:5,
    component: (
      <Image
        className="aspect-[16/9] object-contain"
        src={Whatfix}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 6,
    component: (
      <Image
        className="aspect-[16/9] object-contain"
        src={Techmah}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 7,
    component: (
      <Image
        className="aspect-[16/9] object-contain"
        src={Udtruck}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 8,
    component: (
      <Image
        className="aspect-[16/9] object-contain"
        src={Iampl}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 9,
    component: (
      <Image
        className="aspect-[16/9] object-contain"
        src={Zenfold}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 10,
    component: (
      <Image
        className="aspect-[16/9] object-contain"
        src={cisco}
        alt="client Logo"
        width={110}
      />
    ),
  },
];

export const ProductsLogo = () => {

  return (
    <div className="lg:col-start-4 md:col-start-3 md:col-end-6 col-start-1 col-end-7 text-left md:text-right md:justify-between justify-end md:items-end right-auto flex flex-col w-full h-full">
      <div className="flex overflow-hidden max-w-[400px] md:min-w-[1556px]">
        {/* First set of logo cards */}
        <div className="flex flex-shrink-0 items-center justify-between whitespace-nowrap  animate-loop-scroll ">
          {LogoScroll.map((item) => (
            <div key={item.id}>
              <Card
                className="m-2 px-5"
                style={{
                  minWidth: "10rem",
                }}
              >
                {item.component}
              </Card>
            </div>
          ))}
        </div>

        {/* Second set of logo cards */}
        <div className="flex flex-shrink-0 items-center justify-between whitespace-nowrap absolute animate-loop-scroll ">
          {LogoScroll.map((item) => (
            <div key={item.id}>
              <Card
                className="m-1 px-2"
                style={{
                  minWidth: "10rem",
                }}
              >
                {item.component}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default ProductsLogo;
