"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import DialogDemo from "@/components/main/userDemo"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function MobileNav() {
    const [open, setOpen] = useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between border-b pb-4">
                        <Link href="/" onClick={() => setOpen(false)} className="font-bold text-xl">
                            Exceleed
                        </Link>
                        <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </div>
                    <nav className="flex-1 overflow-auto py-4">
                        <ul className="grid gap-2">
                            <li>
                                <Link href="/" onClick={() => setOpen(false)} className="flex items-center py-2 text-lg font-medium">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center py-2 text-lg font-medium"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="products" className="border-none">
                                        <AccordionTrigger className="py-2 text-lg font-medium">Products</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="grid gap-2 pl-4">
                                                <li>
                                                    <Link
                                                        href="/products/it"
                                                        onClick={() => setOpen(false)}
                                                        className="flex items-center py-1 text-base"
                                                    >
                                                        IT Solutions
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/products/telecom"
                                                        onClick={() => setOpen(false)}
                                                        className="flex items-center py-1 text-base"
                                                    >
                                                        Telecom
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/products/av"
                                                        onClick={() => setOpen(false)}
                                                        className="flex items-center py-1 text-base"
                                                    >
                                                        AV Systems
                                                    </Link>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="services" className="border-none">
                                        <AccordionTrigger className="py-2 text-lg font-medium">Services</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="grid gap-2 pl-4">
                                                <li>
                                                    <Link
                                                        href="/services/consulting"
                                                        onClick={() => setOpen(false)}
                                                        className="flex items-center py-1 text-base"
                                                    >
                                                        Consulting
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/services/implementation"
                                                        onClick={() => setOpen(false)}
                                                        className="flex items-center py-1 text-base"
                                                    >
                                                        Implementation
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/services/support"
                                                        onClick={() => setOpen(false)}
                                                        className="flex items-center py-1 text-base"
                                                    >
                                                        Support
                                                    </Link>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center py-2 text-lg font-medium"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className=" pt-4">
                        <DialogDemo />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
