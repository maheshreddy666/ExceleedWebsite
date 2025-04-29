"use client";

import React, { useRef } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import image1 from "@/components/assets/datacenter.jpeg";
import image2 from "@/components/assets/bg bulding.webp";
import image3 from "@/components/assets/boardrooms2.jpeg";
import image4 from"@/components/assets/handshakehuman.jpeg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";



const carouselContent = [
  {
    id: 1,
    component: (
      <div>
        <CardContent className="flex items-center justify-center font-jul relative h-[280px] lg:min-h-[600px]">
          <div className="text-center md:min-w-[20px]" >
            <h2 className="font-jul scroll-m-20 pb-2 sm:text-3xl  font-semibold tracking-tight first:mt-0 text-3xl text-white">
              Empowering Solutions, Exceeding Expectations
            </h2>
            <p className=" hidden md:block text-xl text-white ">
              Unlock innovation with Exceleed, delivering cutting-edge IT,
              Telecom, and AV solutions tailored to your needs.
            </p>
          </div>
          <Image
            src={image3}
            className="absolute z-[-6] sm:top-auto top-0 w-full object-cover"
            alt="Background Image1"
          />
        </CardContent>
      </div>
    ),
  },
  {
    id: 2,
    component: (
      <div>
        <CardContent className="flex items-center justify-center font-jul relative h-[280px] lg:min-h-[600px]">
          <div className="text-center">
            <h2 className="font-jul scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-white">
              Passion for Precision
            </h2>
            <p className="text-xl hidden md:block text-white">
              Driven by passion, Exceleed crafts Secured and cost-effective solutions that
              surpass expectations with meticulous attention to detail.
            </p>
          </div>
          <Image
            src={image1}
            className="absolute z-[-5] sm:top-auto top-0"
            alt="Background Image2"
          />
        </CardContent>
      </div>
    ),
  },
  {
    id: 3,
    component: (
      <div>
        <CardContent className="flex items-center justify-center font-jul relative h-[280px] lg:min-h-[600px]">
          <div className="text-center">
            <h2 className="font-jul scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-white">
              Excellence in Every Detail
            </h2>
            <p className="text-xl hidden md:block text-white">
              From concept to delivery, Exceleed ensures swift deployment of
              high-quality solutions, never compromising on excellence.
            </p>
          </div>
          <Image
            src={image2}
            className="absolute z-[-5] sm:top-auto top-0"
            alt="Background Image3"
          />
        </CardContent>
      </div>
    ),
  },
  {
    id: 4,
    component: (
      <div>
        <CardContent className="flex items-center justify-center font-jul relative h-[280px] lg:min-h-[600px]">
          <div className="text-center">
            <h2 className="font-jul scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-white">
              Customer Delight, Our Priority
            </h2>
            <p className="text-xl hidden md:block text-white">
              Committed to your satisfaction, Exceleed goes above and beyond to
              earn your trust, providing unparalleled service and support.
            </p>
          </div>
          <Image
            src={image4}
            className="absolute z-[-5] sm:top-auto top-0 w-full"
            alt="Background Image4"
          />
        </CardContent>
      </div>
    ),
  },
  // {
  //   id: 5,
  //   component: (
  //     <div>
  //       <CardContent className="flex items-center justify-center font-jul relative h-[280px] lg:min-h-[600px]">
  //         <div className="text-center">
  //           <h2 className="font-jul scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-white">
  //             Innovation at Its Finest
  //           </h2>
  //           <p className="text-xl hidden md:block">
  //             Exceleed merges expertise and creativity to redefine industry
  //             standards, delivering innovative solutions tailored to your needs.
  //           </p>
  //         </div>
  //         <Image
  //           src={image2}
  //           className="absolute z-[-5] sm:top-auto top-0"
  //           alt="Background Image5"
  //         />
  //       </CardContent>
  //     </div>
  //   ),
  // },
  // {
  //   id: 5,
  //   component: (
  //     <div>
  //       <CardContent className="flex items-center justify-center font-jul relative h-[280px] lg:min-h-[600px] pt-10">
  //         <div className="text-center">
  //           <h2 className="font-jul scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-white">
  //             Innovation at Its Finest
  //           </h2>
  //           <p className="text-xl hidden md:block">
  //             Exceleed merges expertise and creativity to redefine industry
  //             standards, delivering innovative solutions tailored to your needs.
  //           </p>
  //         </div>
  //         <Image
  //           src={image3}
  //           className="absolute z-[-5] sm:top-auto top-0"
  //           alt="Background Image5"
  //         />
  //       </CardContent>
  //     </div>
  //   ),
  // },
];

const HeroContent = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  const easeoutRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (easeoutRef.current) {
      gsap.from(easeoutRef.current.children, {
        opacity: 0,
        x: 40,
        duration: 2,
        ease: "back.inOut",
        stagger: 0.5,
      });
    }
  });
  
  return (
    <section className="py-0 items-center md:max-w-full bg-black text-white" ref={easeoutRef}>
      <div className="sm:h-fit ">
        <Carousel>
          <CarouselContent>
         
            {carouselContent.map((item) => (
              <CarouselItem key={item.id}>
                <div>{item.component}</div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div>
          <CarouselPrevious className="mt-[10px] ml-12 " />
          <CarouselNext  className="mt-[3px] mr-12" />
          </div>
        </Carousel>
      </div>
    </section>

    
  )
}

export default HeroContent




