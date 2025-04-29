"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import dts1 from "@/components/assets/service-images/Networking-wireless/Networking.jpg";
import display from "@/components/assets/display.jpg";
import av from"@/components/assets/service-images/Display/audio-visual.jpg";
import telecom from"@/components/assets/service-images/Display/Telephone.jpg";
import automition from"@/components/assets/service-images/Display/automition.jpg";
import { ProductContentOfDisplay } from "@/components/listOfComponets/Service&Product";
import cld from"@/components/assets/About-image/amazon cloud.jpg";


type DummyContentProps = {
  id: number;
};

const DummyContent: React.FC<DummyContentProps> = ({ id }) => {
  const content = ProductContentOfDisplay.find((item) => item.id === id);
  return content ? content.Component : null;
};

const data = [
  {
    category: "Networking and wireless",
    title: "Advanced Networking and Wireless Solutions",
    src: dts1.src,
    content: <DummyContent id={1} />,
  },

  {
    category: "Cloud Storage",
    title: " Secure, Scalable, and Accessible Data Managemen",
    src:cld.src,
    content: <DummyContent id={6} />,
  },
  {
    category: "Display",
    title: "Interactive Display Solutions for Engaging Experiences",
    src: display.src,
    content: <DummyContent id={2} />,
  },
  {
    category: "Audio and Visual",
    title: "Immersive Audio-Visual Experiences",
    src:av.src,
    content: <DummyContent id={3} />,
  },
  {
    category: "Telecom",
    title: "VoIP Business Phone System",
    src:telecom.src,
    content: <DummyContent id={4} />,
  },
  {
    category: "Automition",
    title: "Smart Automation Solutions for Seamless Efficiency",
    src:automition.src,
    content: <DummyContent id={5} />, // Assuming reusing the first component for demonstration
  },
 
];

function Product() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="bg-black">
      <div className="h-full dark:bg-neutral-800 p-9 md:p-14 rounded-3xl">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200">
          Get to know about the Products.
        </h2>
        <Carousel items={cards} />
      </div>
    </div>
  );
}

export default Product;
