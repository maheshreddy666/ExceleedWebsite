"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, } from "lucide-react"
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

            <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-white rounded-l-2xl shadow-lg px-5 py-6"
            >
                <div className="flex flex-col h-full space-y-6">
                    {/* Close Button Row */}
                    <div className="flex items-center justify-end">
                        <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>

                            <span className="sr-only">Close menu</span>
                        </Button>
                    </div>

                    {/* Navigation Items */}
                    <nav className="flex-1 overflow-auto space-y-4">
                        <ul className="grid gap-3 text-base font-medium">
                            <li>
                                <Link href="/" onClick={() => setOpen(false)} className="block py-2 px-3 rounded-lg hover:bg-gray-100">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" onClick={() => setOpen(false)} className="block py-2 px-3 rounded-lg hover:bg-gray-100">
                                    About
                                </Link>
                            </li>

                            {/* Products Accordion */}
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="products" className="border-none">
                                    <AccordionTrigger className="py-2 px-3 rounded-lg hover:bg-gray-100">
                                        Products
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="pl-4 space-y-1">
                                            <li>
                                                <Link href="/products/it" onClick={() => setOpen(false)} className="block py-1 px-2 rounded hover:bg-gray-100">
                                                    IT Solutions
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/products/telecom" onClick={() => setOpen(false)} className="block py-1 px-2 rounded hover:bg-gray-100">
                                                    Telecom
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/products/av" onClick={() => setOpen(false)} className="block py-1 px-2 rounded hover:bg-gray-100">
                                                    AV Systems
                                                </Link>
                                            </li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            {/* Services Accordion */}
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="services" className="border-none">
                                    <AccordionTrigger className="py-2 px-3 rounded-lg hover:bg-gray-100">
                                        Services
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="pl-4 space-y-1">
                                            <li>
                                                <Link href="/services/consulting" onClick={() => setOpen(false)} className="block py-1 px-2 rounded hover:bg-gray-100">
                                                    Consulting
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/services/implementation" onClick={() => setOpen(false)} className="block py-1 px-2 rounded hover:bg-gray-100">
                                                    Implementation
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/services/support" onClick={() => setOpen(false)} className="block py-1 px-2 rounded hover:bg-gray-100">
                                                    Support
                                                </Link>
                                            </li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <li>
                                <Link href="/blog" onClick={() => setOpen(false)} className="block py-2 px-3 rounded-lg hover:bg-gray-100">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Bottom CTA */}
                    <div className="pt-4 border-t">
                        <DialogDemo />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
