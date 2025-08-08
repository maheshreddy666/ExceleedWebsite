"use client"
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import colabaration from "@/components/assets/background image4.webp";
import meetingroom from "@/components/assets/Bg-images/meeting room signing (1).jpg";
import room from "@/components/assets/service-images/Networking-wireless/display-meeting-room.jpg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from 'react'


const AboutPage = () => {
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
        <div className="relative">
            <div className="relative" ref={easeoutRef}>
                <Image src={colabaration} alt="image1" className="h-[300px] lg:min-h-[550px] w-full object-cover" />
                <div className="absolute inset-0 flex justify-center items-center text-white text-center">
                    <div>
                        <h1 className="text-2xl lg:text-6xl font-bold"></h1>
                    </div>
                </div>
            </div>
            <Separator className="my-1" />
            <div className="flex flex-col gap-2">
                <div className="flex flex-col lg:flex-row items-center mt-[-3] bg-slate-300">
                    {/* <div className="flex-shrink-0">
                        <Image src={meetingroom} alt="About Exceleed" className="w-[650px] h-full" />
                    </div> */}
                    <div className="m-5 flex-col justify-center">
                        <p className="text-4xl font-bold justify-center">About Exceleed</p>
                        <p className="mt-4 text-xl">
                            Exceleed, driven with core business principles on delivering the excellent solutions on IT, Telecom and AV for our customers. Establised in 2017, infused with passion of understanding the customer needs and design the best in class and cost-effective solution. Every team member thrive to bring in the excellence in every stage of project delivery with speed as our core driving factor.

                            Well trained and qualified engineers at Exceleed strive to delight customer to gain the preference and confidence. Management team with immense
                            experiance with IT AV and Telecom domine guide the team in designing robust solutions and delivering great customer experiance.


                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AboutPage;
