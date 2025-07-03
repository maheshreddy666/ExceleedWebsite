import Image from "next/image"

interface PageHeaderProps {
    title: string
    description: string
    image: string
}

export function PageHeader({ title, description, image }: PageHeaderProps) {
    return (
        <section className="relative overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
                <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
            </div>

            <div className="w-full relative z-10 px-4 py-16 md:py-24 lg:py-32 md:px-6">
                <div className="max-w-3xl">
                    <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none mb-4">{title}</h1>
                    <p className="max-w-[600px] text-gray-200 md:text-xl">{description}</p>
                </div>
            </div>
        </section>
    )
}
