import Image from "next/image"
import Link from "next/link"
// import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { TeamMember } from "@/components/team-member"
import { PageHeader } from "@/components/page-header";
import bgimage from "@/components/projectUsedImages/backgroundimages/av4.jpg"
import DialogDemo from "@/components/main/userDemo"


export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="About Us"
        description="Learn more about our mission, values, and the team behind Exceleed."
        image="/placeholder.svg?height=600&width=1200"
      />

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-gray-500 md:text-lg">
                Founded in 2010, Exceleed began with a simple mission: to provide businesses with technology solutions
                that truly exceed expectations. What started as a small IT consulting firm has grown into a
                comprehensive technology partner serving clients across multiple industries.
              </p>
              <p className="text-gray-500 md:text-lg">
                Our journey has been defined by continuous innovation, unwavering commitment to quality, and a
                client-first approach. As technology evolved, so did we, expanding our expertise to include telecom, AV
                solutions, cloud services, and cybersecurity.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl ">
              <Image src={bgimage} alt="Exceleed office" placeholder="blur" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Mission & Values</h2>
            <p className="text-gray-500 md:text-lg max-w-[800px]">
              At Exceleed, we`&apos;`,re driven by a commitment to empower businesses through innovative technology solutions
              that drive growth and efficiency.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary h-6 w-6"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-500">
                We strive for excellence in everything we do, from the solutions we design to the support we provide.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary h-6 w-6"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-500">
                We conduct our business with the highest level of integrity, transparency, and ethical standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary h-6 w-6"
                >
                  <path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9" />
                  <path d="M12 16v6" />
                  <path d="m16 16-4 6" />
                  <path d="m8 16 4 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-500">
                We embrace innovation and continuously explore new technologies to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary h-6 w-6"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Client Focus</h3>
              <p className="text-gray-500">
                We put our clients at the center of everything we do, focusing on their unique needs and challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary h-6 w-6"
                >
                  <path d="M2 12h20" />
                  <path d="M12 2v20" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-500">
                We believe in the power of collaboration, working closely with our clients and partners to achieve
                success.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary h-6 w-6"
                >
                  <path d="M12 2v4" />
                  <path d="M12 18v4" />
                  <path d="M4.93 4.93l2.83 2.83" />
                  <path d="M16.24 16.24l2.83 2.83" />
                  <path d="M2 12h4" />
                  <path d="M18 12h4" />
                  <path d="M4.93 19.07l2.83-2.83" />
                  <path d="M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Adaptability</h3>
              <p className="text-gray-500">
                We embrace change and continuously adapt to evolving technologies and market demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Leadership Team</h2>
            <p className="text-gray-500 md:text-lg max-w-[800px]">
              Meet the experienced professionals who lead our company with vision and expertise.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <TeamMember
              name="Sarah Johnson"
              role="Chief Executive Officer"
              bio="With over 20 years of experience in the technology sector, Sarah leads our company with vision and strategic insight."
              image="/placeholder.svg?height=400&width=400"
            />
            <TeamMember
              name="Michael Chen"
              role="Chief Technology Officer"
              bio="Michael brings deep technical expertise and innovation leadership to drive our technology strategy and development."
              image="/placeholder.svg?height=400&width=400"
            />
            <TeamMember
              name="David Rodriguez"
              role="VP of Sales"
              bio="David leads our sales team with a client-first approach, ensuring we deliver solutions that truly meet client needs."
              image="/placeholder.svg?height=400&width=400"
            />
            <TeamMember
              name="Priya Patel"
              role="VP of Operations"
              bio="Priya oversees our operations with efficiency and excellence, ensuring smooth delivery of all client projects."
              image="/placeholder.svg?height=400&width=400"
            />
            <TeamMember
              name="James Wilson"
              role="VP of Product Development"
              bio="James drives our product strategy with a focus on innovation and market-leading solutions."
              image="/placeholder.svg?height=400&width=400"
            />
            <TeamMember
              name="Lisa Thompson"
              role="VP of Customer Success"
              bio="Lisa ensures our clients achieve their goals through effective implementation and ongoing support."
              image="/placeholder.svg?height=400&width=400"
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Ready to Work With Us?</h2>
            <p className="text-gray-500 md:text-lg max-w-[800px]">
              Let`&apos;`,s discuss how our solutions can help your business thrive in today`&apos;`,s digital landscape.
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <DialogDemo />
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
