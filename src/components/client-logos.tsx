"use client";

import React from "react";
import Image from "next/image";
import Cisco from "@/components/projectUsedImages/CustomerLogo/Cisco-logo.png";
import Bose from "@/components/projectUsedImages/CustomerLogo/Bose-Logo.png";
import Creston from "@/components/projectUsedImages/CustomerLogo/Crestron-Logo.jpg";
import Fortinet from "@/components/projectUsedImages/CustomerLogo/Fortinet-logo.png";
import Hp from "@/components/projectUsedImages/CustomerLogo/HP-Logo.png";
import HoneyWell from "@/components/projectUsedImages/CustomerLogo/Honeywell-Logo.jpg";
import Ruckus from "@/components/projectUsedImages/CustomerLogo/Ruckus-Logo.jpg";
import Poly from "@/components/projectUsedImages/CustomerLogo/poly logo.png";
import commscope from "@/components/projectUsedImages/CustomerLogo/commscope.png";
import crestron from "@/components/projectUsedImages/CustomerLogo/Crestron-Logo.jpg";
import hpearuba from "@/components/projectUsedImages/CustomerLogo/Hpe-aruba-networking-logo.svg.png";
import jabra from "@/components/projectUsedImages/CustomerLogo/Jabra_Logo.png";
import Nec from "@/components/projectUsedImages/CustomerLogo/NEC-Logo..png";
import Sennheiser from "@/components/projectUsedImages/CustomerLogo/Sennheiser-Logo.png";
import alcatel from "@/components/projectUsedImages/CustomerLogo/alcatel-lucent.jpg";
// import aver from "@/components/projectUsedImages/CustomerLogo/aver-logo.png";
import avocor from "@/components/projectUsedImages/CustomerLogo/avocor-logo.jpg";
import adatapath from "@/components/projectUsedImages/CustomerLogo/datapath logo.jpg";
import grandstreem from "@/components/projectUsedImages/CustomerLogo/grand-streem.jpeg";
import ironmountain from "@/components/projectUsedImages/CustomerLogo/ironmountainlogo.png";
import logitech from "@/components/projectUsedImages/CustomerLogo/logitechlogo.jpg";
import paloalto from "@/components/projectUsedImages/CustomerLogo/paloalto.png";
import panasonic from "@/components/projectUsedImages/CustomerLogo/panasonic logo.webp";
import shure from "@/components/projectUsedImages/CustomerLogo/shure-logo.png";
import t1v from "@/components/projectUsedImages/CustomerLogo/t1v logo.jpg";
import westren from "@/components/projectUsedImages/CustomerLogo/western-digitallogo.png";


export function ClientLogos() {
    const logos = [
        { name: "Cisco", src: Cisco },
        { name: "HP", src: Hp },
        { name: "Poly", src: Poly },
        { name: "Fortinet", src: Fortinet },
        { name: "Bose", src: Bose },
        { name: "Crestron", src: Creston },
        { name: "Honeywell", src: HoneyWell },
        { name: "Ruckus", src: Ruckus },
        { name: "Commascope", src: commscope },
        { name: "crestron", src: crestron },
        { name: "hpearuba", src: hpearuba },
        { name: "jabra", src: jabra },
        { name: "Nec", src: Nec },
        { name: "Sennheiser", src: Sennheiser },
        { name: "alcatel", src: alcatel },
        // { name: "aver", src: aver },
        { name: "avocor", src: avocor },
        { name: "adatapath", src: adatapath },
        { name: "grandstreem", src: grandstreem },
        { name: "ironmountain", src: ironmountain },
        { name: "logitech", src: logitech },
        { name: "paloalto", src: paloalto },
        { name: "panasonic", src: panasonic },
        { name: "shure", src: shure },
        { name: "t1v", src: t1v },
        { name: "westren", src: westren },
    ];

    return (
        <div className="marquee-wrapper py-6">
            <div className="marquee-content flex flex-wrap justify-center items-center gap-4">
                {[...logos, ...logos].map((logo, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center w-[140px] h-[80px] bg-white rounded-xl shadow-lg p-2"
                    >
                        <Image
                            src={logo.src}
                            alt={`${logo.name} logo`}
                            width={120}
                            height={60}
                            className="object-contain w-full h-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
