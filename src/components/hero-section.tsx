"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import About from "@/components/projectUsedImages/backgroundimages/About-Us.jpg"

export function HeroSection() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section className="relative overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={About}
                    alt="Modern office space"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
            </div>

            <div className="w-full relative z-10 px-4 py-24 md:py-32 lg:py-40 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                            Empowering Solutions, Exceeding Expectations
                        </h1>
                        <p className="max-w-[600px] text-gray-200 md:text-xl">
                            Unlock innovation with Exceleed, delivering cutting-edge IT, telecom, and AV solutions tailored to your
                            needs.
                        </p>
                        <div className="flex flex-col gap-3 min-[400px]:flex-row">
                            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                                <Link href="/solutions">
                                    Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="bg-sky-500" asChild>
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hidden lg:block"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm p-6">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl" />
                            <div className="relative z-10 h-full flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-white mb-4">Tailored Technology Solutions</h3>
                                <ul className="space-y-3">
                                    {["IT Consulting", "Telecom Solutions", "AV Integration", "Cloud Services"].map((item, i) => (
                                        <motion.li
                                            key={item}
                                            className="flex items-center text-white"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                                        >
                                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                                <Button variant="link" className="text-white mt-4 p-0" asChild>
                                    <Link href="/services">
                                        Learn more about our services <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <span className="text-white text-sm mb-2">Scroll to explore</span>
                    <ChevronDown className="h-6 w-6 text-white animate-bounce" />
                </motion.div>
            </div>
        </section>
    )
}
