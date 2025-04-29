"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/assets/Exceleed_Logo.png";
import { Button } from "@/components/ui/button";
import { ChevronRight, PanelLeft, Linkedin, Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import {DialogDemo} from "@/components/main/root"


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Nav() {
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

  function handleItemClick(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div
      className="container flex h-15 max-w-screen-2xl items-center justify-between text-white"
      ref={easeoutRef}
    >
      <div>
        <Link href="/">
          <Image src={Logo} alt="Exceleed" width={230} height={20} />
        </Link>
      </div>
      <div className="mr-4 flex md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <PanelLeft className="text-primary" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side={"right"} className="">
            <SheetHeader>
              <SheetTitle>
                <Link href="/">
                </Link>
              </SheetTitle>
            </SheetHeader>
            <Separator className="my-4" />
            <SheetDescription className="justify-between space-x-4 p-2">
              <div className="flex flex-col space-y-10">
                <div className="text-lg font-semibold">
                <Link
                    href="/"
                    className="flex h-9 w-fit items-center justify-center  transition-colors "
                  >
                    Home
                  </Link>
                  <Link
                    href="/About"
                    className="flex h-9 w-fit items-center justify-center  transition-colors "
                  >
                    ABOUT
                  </Link>
                </div>
                <div className="text-lg font-semibold">
                  <Link
                    href="/product"
                    className="flex h-9 w-fit items-center justify-center  transition-colors "
                  >
                    PRODUCT
                  </Link>
                </div>
                <div className="text-lg font-semibold">
                  <Link
                    href="/service_solution"
                    className="flex h-9 w-fit items-center justify-center  transition-colors "
                  >
                    SERVICE
                  </Link>
                </div>
                <div className="text-lg font-semibold">
                  {/* <Link
                    href="/customer_review"
                    className="flex h-9 w-fit items-center justify-center  transition-colors "
                  >
                    CUSTOMER
                  </Link> */}
                </div>

             
              </div>

              <div className="text-lg font-semibold">
                  <Link
                    href="/Blog"
                    className="flex h-9 w-fit items-center justify-center  transition-colors "
                  >
                    Blog
                  </Link>
                </div>
            </SheetDescription>
            <Separator className="my-4 mt-40" />
            <SheetFooter>
              <p className=" transition-colors h-9 font-semibold">
                CONNECT WITH US ------------&gt;
              </p>
              <div className="flex space-x-6">
                <Instagram className="transition-colors" />
              </div>
              <div className="flex space-x-6">
                <Linkedin className="transition-colors" />
              </div>
              <div className="flex space-x-6">
                <Twitter className="transition-colors" />
              </div>
            </SheetFooter>
          </SheetContent>
          <SheetClose />
        </Sheet>
      </div>
      <div className="hidden md:grid space-x-4">
        <div className="Links justify-between font-jul font-semibold p-2 min-w-fit space-x-7 ">
        <Link
            href="/"
            className="Links transition-colors"
          >
            <span className="invert-0 ">Home</span>
          </Link>
          <Link
            href="/About"
            className="Links transition-colors"
          >
            <span>About</span>
          </Link>
          <Link
            href="/product"
            className="Links transition-colors"
          >
            <span>Product</span>
          </Link>
          <Link
            href="/service_solution"
            className="Links transition-colors"
          >
            <span>Service</span>
          </Link>
         
          {/* <Link
            href="/customer_review"
            className="Links transition-colors"
          >
            <span>Customer</span>
          </Link>
           */}

          <Link
            href="/Blog"
            className="Links transition-colors"
          >
            <span>Blog</span>
          </Link>
          <DialogDemo/>
        </div>
      </div>
    </div>
  );
}



