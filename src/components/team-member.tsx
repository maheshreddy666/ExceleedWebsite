import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface TeamMemberProps {
    name: string
    role: string
    bio: string
    image: string
}

export function TeamMember({ name, role, bio, image }: TeamMemberProps) {
    return (
        <Card className="overflow-hidden">
            <div className="relative h-64 w-full">
                <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </div>
            <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-sm text-primary font-medium">{role}</p>
            </CardHeader>
            <CardContent>
                <p className="text-gray-500">{bio}</p>
            </CardContent>
        </Card>
    )
}
