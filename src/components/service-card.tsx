"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Cloud, Laptop, Phone, Settings, Shield, Video } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
    title: string
    description: string
    icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        const elements = document.querySelectorAll(".service-card")
        elements.forEach((element) => {
            observer.observe(element)
        })

        return () => {
            elements.forEach((element) => {
                observer.unobserve(element)
            })
        }
    }, [])

    const getIcon = () => {
        switch (icon) {
            case "laptop":
                return <Laptop className="h-10 w-10" />
            case "phone":
                return <Phone className="h-10 w-10" />
            case "video":
                return <Video className="h-10 w-10" />
            case "cloud":
                return <Cloud className="h-10 w-10" />
            case "shield":
                return <Shield className="h-10 w-10" />
            case "settings":
                return <Settings className="h-10 w-10" />
            default:
                return <Laptop className="h-10 w-10" />
        }
    }

    return (
        <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                    <div className="rounded-full bg-primary/10 p-3 w-fit">{getIcon()}</div>
                    <CardTitle className="mt-4">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-500">{description}</p>
                </CardContent>
                <CardFooter>
                    <Link
                        href={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="group inline-flex items-center text-sm font-medium text-primary"
                    >
                        Learn more
                        <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
                            <ArrowRight className="ml-1 h-4 w-4" />
                        </motion.div>
                    </Link>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
