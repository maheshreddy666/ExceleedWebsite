"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BlogCardProps {
    title: string
    excerpt: string
    date: string
    category: string
    image: string
}

export function BlogCard({ title, excerpt, date, category, image }: BlogCardProps) {
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

        const elements = document.querySelectorAll(".blog-card")
        elements.forEach((element) => {
            observer.observe(element)
        })

        return () => {
            elements.forEach((element) => {
                observer.unobserve(element)
            })
        }
    }, [])

    return (
        <motion.div
            className="blog-card"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
        >
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardHeader className="p-0">
                    <div className="relative h-48 w-full overflow-hidden">
                        <Image
                            src={image || "/placeholder.svg"}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-2 right-2">
                            <Badge variant="secondary">{category}</Badge>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-4">
                    <div className="text-sm text-gray-500 mb-2">{date}</div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{title}</h3>
                    <p className="text-gray-500 line-clamp-3">{excerpt}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    <Link
                        href={`/blog/${title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-sm font-medium text-primary hover:underline"
                    >
                        Read more
                    </Link>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
