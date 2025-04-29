"use client";
import React from "react";
import Image from "next/image";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PinContainer } from "@/components/ui/3d-pin";
import MapComponent from "@/components/assets/company_location.png";
import { DialogDemo } from "@/components/main/root";

const Page = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDay = currentDate.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

  // Define office working hours for each day
  const officeWorkingHours = [
    { day: "Sunday", hours: "Closed" },
    { day: "Monday", hours: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
    { day: "Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
  ];

  const currentWorkingHours = officeWorkingHours[currentDay];
  return (
    <div className="bg-accent-foreground text-white font-jul">
      <div className="text-center">
        <div className="items-center">
          <div className="items-center">
          </div>
        </div>
      </div>
      <footer className="flex flex-col justify-between items-center  bg-gray-800">
        <div className="flex items-center">
          <PinContainer
            title="Exceleed.com"
            href="https://maps.app.goo.gl/W2bms4xY3wtAzC7VA"
            className="w-fit h-fit"
          >
            <div className="w-[10rem] h-[10rem] relative">
              <Image src={MapComponent} alt="Exceleed" className="rounded object-cover" layout="fill" />
            </div>
          </PinContainer>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <p className="text-primary font-semibold text-white">Office Working Hours:</p>
            <p className="text-primary font-semibold text-white">
              {daysOfWeek[currentDay]}: {currentWorkingHours.hours}
            </p>
            <p className="text-primary font-semibold text-white">contact : 96866 88686</p>
          </div>
          <div>
       
          </div>
          <div className="flex justify-between">
          <DialogDemo />
          </div>
        </div>
      </footer>
      <div className="text-center bg-gray-800 py-2">
        <code className="relative rounded px-[0.3rem] py-[0.2rem] font-mono  font-semibold text-xl">
          Copyright © 2023 Exceleed - All Rights Reserved.
        </code>
      </div>
    </div>
  );
};

export default Page;
