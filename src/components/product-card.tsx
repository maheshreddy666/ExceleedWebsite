import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
    title: string
    category: string
    description: string
    image: string
    href: string
}

export function ProductCard({ title, category, description, image, href }: ProductCardProps) {
    return (
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="relative h-60 w-full overflow-hidden mt-0">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    width={600}
                    height={350}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                    <Badge variant="secondary">{category}</Badge>
                </div>
            </div>
            <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">{title}</h3>
            </CardHeader>
            <CardContent>
                <p className="text-gray-500">{description}</p>
            </CardContent>
            <CardFooter>
                <Link href={href} className="group inline-flex items-center text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </CardFooter>
        </Card>
    )
}
