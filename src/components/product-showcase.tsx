"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"


export function ProductShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const products = [
        {
            id: 1,
            name: "Smart Conference System",
            description: "Advanced audio-visual solution for modern meeting rooms",
            image: "/Products/Flux_Dev_A_modern_meeting_room_setup_with_a_sleek_polished_woo_2.jpg",
        },
        {
            id: 2,
            name: "Secure Cloud Infrastructure",
            description: "Enterprise-grade cloud solutions with top-tier security",
            image: "/Products/datacenter.jpeg",
        },
        {
            id: 3,
            name: "Unified Communications",
            description: "Seamless integration of voice, video, and messaging",
            image: "/Products/av4.jpg",
        },
        {
            id: 4,
            name: "Network Optimization",
            description: "Performance-focused network solutions for businesses",
            image: "/Products/Network-Optimization-Featured-Image.png",
        },
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        const currentContainer = containerRef.current;
        if (currentContainer) {
            observer.observe(currentContainer);
        }

        return () => {
            if (currentContainer) {
                observer.unobserve(currentContainer);
            }
        }
    }, [])

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <div ref={containerRef} className="relative  px-4 max-w-7xl mx-auto">
            <motion.div
                className="overflow-hidden rounded-xl shadow-lg"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
            >
                <div className="relative aspect-video md:aspect-[16/7]">
                    <div
                        className="flex transition-transform duration-500 ease-in-out h-full"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {products.map((product) => (
                            <div key={product.id} className="min-w-full h-full relative">
                                <Image
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    width={1280}
                                    height={720}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:p-8">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{product.name}</h3>
                                    <p className="text-gray-200 max-w-md">{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            <div className="flex justify-center mt-4 gap-2">
                {products.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 w-2 rounded-full transition-all ${index === currentIndex ? "bg-primary w-4" : "bg-gray-300"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full h-10 w-10"
                onClick={prevSlide}
                aria-label="Previous product"
            >
                <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full h-10 w-10"
                onClick={nextSlide}
                aria-label="Next product"
            >
                <ChevronRight className="h-6 w-6" />
            </Button>
        </div>
    )
}
