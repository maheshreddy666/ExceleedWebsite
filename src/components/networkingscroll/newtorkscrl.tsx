"use client";

import React from "react";
import Image from "next/image";
import cisco from "@/components/assets/About-image/Cisco-logo.png";
import aruba from "@/components/assets/client-Logo/logos/Hpe-aruba-networking-logo.svg.png";
import rucks from "@/components/assets/client-Logo/logos/Ruckus-Logo.jpg";
import fortinent from "@/components/assets/About-image/Fortinet-logo.png";
import commscope from "@/components/assets/client-Logo/logos/commscope.png";
import molex from "@/components/assets/client-Logo/logos/molex-premise.png";
import netgear from "@/components/assets/client-Logo/logos/Netgear-logo.jpg";
import meraki from "@/components/assets/client-Logo/logos/meeraki.png";
import blamp from "@/components/assets/client-Logo/logos/Biamp-Logo.jpg";
import hp from "@/components/assets/client-Logo/logos/HP-Logo.png";
import  poly from "@/components/assets/client-Logo/logos/poly logo.png";
import bose from "@/components/assets/client-Logo/logos/Bose-Logo.png";
import crestron from "@/components/assets/client-Logo/logos/Crestron-Logo.jpg";
import jabra from"@/components/assets/client-Logo/logos/Jabra_Logo.png";
import avacor from "@/components/assets/avocor_logo1.png";
import nec from "@/components/assets/client-Logo/logos/NEC-Logo..png";
import sennheiser from "@/components/assets/client-Logo/logos/sennheiser1.png";
import alcatel from "@/components/assets/client-Logo/logos/alcatel-lucent.jpg";
import dapath from "@/components/assets/client-Logo/logos/datapath logo.jpg";
import grandstreem from "@/components/assets/client-Logo/logos/logo-grandstream1.png";
import maxhub from "@/components/assets/client-Logo/logos/MAXHUB-Logo-1-3USE.jpg";
import logitech from "@/components/assets/client-Logo/logos/logitechlogo.jpg";
import ironmountain from "@/components/assets/client-Logo/logos/IRM.png";
import panasonic from "@/components/assets/client-Logo/logos/panasonic logo.webp";
import t1v from "@/components/assets/client-Logo/logos/t1v logo.jpg";
import newline from "@/components/assets/client-Logo/logos/newline-logo.png";
import webwerks from "@/components/assets/client-Logo/logos/web-works logo.jpg";
import webwerksiron from "@/components/assets/client-Logo/logos/webwerks-logo.png";
import aws from "@/components/assets/client-Logo/logos/awslogo.png";
import azure from "@/components/assets/client-Logo/logos/azure-logo.png";
import shure from "@/components/assets/client-Logo/logos/shure-logo.png";
import lg from "@/components/assets/client-Logo/logos/lg logo.webp";
import samsuing from "@/components/assets/client-Logo/logos/Samsung-logo.png";
import jbl from "@/components/assets/client-Logo/logos/jbl-logo.png";
import { Card } from "@/components/ui/card";

export const wnetworking = [
  {
    id: 1,
    component: (
      <Image
        className="aspect-[16/9] object-contain"
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
        className="aspect-[16/9] object-contain"
        src={aruba}
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
        src={rucks}
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
        src={fortinent}
        alt="client Logo"
        width={110}
      />
    ),
  },
  {
    id: 5,
    component: (
      <Image
        className="aspect-[16/9] object-contain"
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
        className="aspect-[16/9] object-contain"
        src={molex}
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
        src={netgear}
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
        src={meraki}
        alt="client Logo"
        width={110}
      />
    ),
  },
 
];
export const cloud = [
    {
      id: 1,
      component: (
        <Image
          className="aspect-[16/9] object-contain"
          src={webwerks}
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
          src={webwerksiron}
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
          src={aws}
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
          src={azure}
          alt="client Logo"
          width={110}
        />
      ),
    },
    {
      id: 5,
      component: (
        <Image
          className="aspect-[16/9] object-contain"
          src={ironmountain}
          alt="client Logo"
          width={110}
        />
      ),
    },
   
  ];
export const display = [
    {
      id: 1,
      component: (
        <Image
          className="aspect-[16/9] object-contain"
          src={avacor}
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
          src={maxhub}
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
          src={t1v}
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
          src={dapath}
          alt="client Logo"
          width={110}
        />
      ),
    },
    {
      id: 5,
      component: (
        <Image
          className="aspect-[16/9] object-contain"
          src={newline}
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
          src={samsuing}
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
          src={lg}
          alt="client Logo"
          width={110}
        />
      ),
    },
   
  ];
export const audio = [
    {
      id: 1,
      component: (
        <Image
          className="aspect-[16/9] object-contain"
          src={shure}
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
          src={blamp }
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
          className="aspect-[16/9] object-contain"
          src={sennheiser}
          alt="client Logo"
          width={110}
        />
      ),
    },
    {
      id: 5,
      component: (
        <Image
          className="aspect-[16/9] object-contain"
          src={logitech}
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
          src={jabra }
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
          src={bose}
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
          src={poly}
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
            src={jbl}
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
            src={crestron}
            alt="client Logo"
            width={110}
          />
        ),
      },
   
  ];
export const telecom = [
    {
      id: 1,
      component: (
        <Image
          className="aspect-[16/9] object-contain"
          src={nec}
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
          src={panasonic}
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
          src={grandstreem}
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
          src={alcatel}
          alt="client Logo"
          width={110}
        />
      ),
    },
   
   
  ];

export const Networking = () => {

  return (
    <div className="text-left md:text-right md:justify-between justify-end md:items-end right-auto flex flex-col w-full h-full">
      <div className="flex overflow-hidden w-full">
        {/* First set of logo cards */}
        <div className="flex flex-shrink-0 items-center justify-between whitespace-nowrap  animate-loop-scroll py-10">
          {wnetworking.map((item) => ( 
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
          {wnetworking.map((item) => (
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
 export const Clouds = () => {

  return (
    <div className="text-left md:text-right md:justify-between justify-end md:items-end right-auto flex flex-col w-full h-full">
      <div className="flex overflow-hidden w-full">
        {/* First set of logo cards */}
        <div className="flex flex-shrink-0 items-center justify-between whitespace-nowrap  animate-loop-scroll py-10">
          {cloud.map((item) => ( 
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
          {cloud.map((item) => (
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
 export const Displays = () => {

  return (
    <div className="text-left md:text-right md:justify-between justify-end md:items-end right-auto flex flex-col w-full h-full">
      <div className="flex overflow-hidden w-full">
        {/* First set of logo cards */}
        <div className="flex flex-shrink-0 items-center justify-between whitespace-nowrap  animate-loop-scroll py-10">
          {display.map((item) => ( 
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
          {display.map((item) => (
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
 export const Audio = () => {

  return (
    <div className="text-left md:text-right md:justify-between justify-end md:items-end right-auto flex flex-col w-full h-full">
      <div className="flex overflow-hidden w-full">
        {/* First set of logo cards */}
        <div className="flex flex-shrink-0 items-center justify-between whitespace-nowrap  animate-loop-scroll py-10">
          {audio.map((item) => ( 
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
          {audio.map((item) => (
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
 export const Telecom = () => {

  return (
    <div className="text-left md:text-right md:justify-between justify-end md:items-end right-auto flex flex-col w-full h-full">
      <div className="flex overflow-hidden w-full">
        {/* First set of logo cards */}
        <div className="flex flex-shrink-0 items-center justify-between whitespace-nowrap  animate-loop-scroll py-10">
          {telecom.map((item) => ( 
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
          {telecom.map((item) => (
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


