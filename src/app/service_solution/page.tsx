"use client"
import React, { useRef } from "react";
import Image from "next/image";
import dummy from "@/components/assets/dummy image.png";
import automition from"@/components/assets/service-images/Display/automition.jpg";
import network from"@/components/assets/m3.jpg";
import meeting from"@/components/assets/av4.jpg";
import avsollution from"@/components/assets/avc.jpg";
import computers from"@/components/assets/computers.jpg";




import { ServiceContentOfNetworkings } from "@/components/listOfComponets/Service&Product";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";

type DummyContentProps = {
  id: number;
};

const DummyContent: React.FC<DummyContentProps> = ({ id }) => {
  const content = ServiceContentOfNetworkings.find((item) => item.id === id);
  return content ? content.Component : null;
};

const Solutions = [
  {
    category: "Networking",
    title: "Technology&consulting",
    src:network.src,
    content: <DummyContent id={1} />,
  },
  {
    category: "Managed",
    title: " Network Services",
    src:computers.src,
    content: <DummyContent id={2} />,
  },
  {
    category: "Desiging",
    title: " Meeting Rooms",
    src:meeting.src,
    content: <DummyContent id={3} />,
  },
  {
    category: "Audio & Video",
    title: "Consulting",
    src: avsollution.src,
    content: <DummyContent id={4} />,
  },
];

function Page() {
  const cards = Solutions.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="bg-black">
      <div className="h-full dark:bg-neutral-800 p-9 md:p-14 rounded-3xl">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200">
          Get to know about the Services.
        </h2>
        <Carousel items={cards} />
      </div>
    </div>
  );
}

export default Page;

