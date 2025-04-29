"use client";

import React from "react";
import Image from "next/image";
import cisco from "@/components/assets/About-image/Cisco-logo.png";
import blamp from "@/components/assets/client-Logo/logos/Biamp-Logo.jpg";
import hp from "@/components/assets/client-Logo/logos/HP-Logo.png";
import  poly from "@/components/assets/client-Logo/logos/poly logo.png";
import commscope from "@/components/assets/client-Logo/logos/commscope.png";
import bose from "@/components/assets/client-Logo/logos/Bose-Logo.png";
import crestron from "@/components/assets/client-Logo/logos/Crestron-Logo.jpg";
import honeywell from "@/components/assets/client-Logo/logos/Honeywell-Logo.jpg";
import aruba from "@/components/assets/client-Logo/logos/Hpe-aruba-networking-logo.svg.png";
import jabra from"@/components/assets/client-Logo/logos/Jabra_Logo.png";
import avacor from "@/components/assets/avocor_logo1.png";
import nec from "@/components/assets/client-Logo/logos/NEC-Logo..png";
import rucks from "@/components/assets/client-Logo/logos/Ruckus-Logo.jpg";
import sennheiser from "@/components/assets/client-Logo/logos/sennheiser1.png";
import fortinent from "@/components/assets/About-image/Fortinet-logo.png";
import alcatel from "@/components/assets/client-Logo/logos/alcatel-lucent.jpg";
import dapath from "@/components/assets/client-Logo/logos/datapath logo.jpg";
import grandstreem from "@/components/assets/client-Logo/logos/logo-grandstream1.png";
import maxhub from "@/components/assets/client-Logo/logos/MAXHUB-Logo-1-3USE.jpg";
import logitech from "@/components/assets/client-Logo/logos/logitechlogo.jpg";
import ironmountain from "@/components/assets/client-Logo/logos/IRM.png";
import panasonic from "@/components/assets/client-Logo/logos/panasonic logo.webp";
import t1v from "@/components/assets/client-Logo/logos/t1v logo.jpg";
import wd from "@/components/assets/client-Logo/logos/western-digitallogo.png";
import zkteco from "@/components/assets/client-Logo/logos/zkteco-logo.png";
import shure from "@/components/assets/client-Logo/logos/shure-logo.png";
import { Card } from "@/components/ui/card";

const LogoScroll = [
  {
    id: 1,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={cisco}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 2,
    component: (
      <Image
        className="aspect-[16/9] object-contain  my-4"
        src={blamp}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 3,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={hp}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 4,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={poly}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id:5,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={commscope}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 6,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={ bose }
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 7,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={crestron}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 8,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={honeywell}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 9,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={aruba}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 10,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={jabra}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 11,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={avacor }
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 12,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={nec}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 13,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={rucks}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 14,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={sennheiser}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 15,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={fortinent}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 16,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={shure}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 17,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={alcatel}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 18,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={dapath}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 20,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={grandstreem}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 21,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={maxhub }
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 22,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={logitech}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 23,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={ wd }
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 24,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={t1v}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 25,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={panasonic}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 26,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={zkteco}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 27,
    component: (
      <Image
        className="aspect-[16/9] object-contain my-4"
        src={ironmountain}
        alt="client Logo"
        width={110}
      />
    ),
  },
];

 export const LogoScrollWithCards = () => {

  return (
    <div className="text-left md:text-right md:justify-between justify-end md:items-end right-auto flex flex-col w-full h-full bg-black">
      <div className="flex overflow-hidden w-full">
        {/* First set of logo cards */}
        <div className="flex flex-shrink-0 items-center justify-between whitespace-nowrap  animate-loop-scroll py-0 px-1">
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
        <div className="flex flex-shrink-0 items-center justify-between whitespace-nowrap  animate-loop-scroll py-10">
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
      </div>
    </div>
  );

}

export default LogoScrollWithCards;
