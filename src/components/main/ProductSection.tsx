"use client";

import React from "react";
import { main_page_secoundaryContent } from "@/components/listOfComponets/Service&Product";
import { Card } from "@/components/ui/apple-cards-carousel1";
import AboutUs from "@/components/assets/About-image/About-Us1.jpg";
import blog from "@/components/assets/blogus.jpg";
import sollution from "@/components/assets/sollution.jpg";
import product from "@/components/assets/teleconferencing-systems-1.jpg";
import { link } from "fs"; // This import doesn't seem to be used and can be removed.
import { DialogDemo } from "./root";

const data = [
  {
    category: "",
    title: "ABOUT US",
    src: AboutUs.src,
    href: "/About"
  },
  {
    category: "",
    title: "PRODUCT",
    src: product.src,
    href: "/product"
  },
  {
    category: "",
    title: "SERVICES",
    src: sollution.src,
    href: "service_solution"
  },
  {
    category: "",
    title: "BLOG",
    src: blog.src,
    href: "/Blog"
  },
 
];

const NavThroughtCards = () => {
  const cards = data.map((card, index) => (
    <Card key={index} card={card}  />
  ));

  return (
    <div className="bg-black">
      <div className="h-full w-full overflow-x-auto dark:bg-neutral-800 p-9 md:p-14 rounded-3xl">
        <div className="flex sticky sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards}
        </div>
      </div>
    </div>
  );
};

export default NavThroughtCards;
