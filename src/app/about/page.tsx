import Image from "next/image"
// import Link from "next/link"
// import { ArrowRight } from "lucide-react"

// import { Button } from "@/components/ui/button"
import { TeamMember } from "@/components/team-member"
import { PageHeader } from "@/components/page-header";
import bgimage from "@/components/projectUsedImages/backgroundimages/av4.jpg"
import DialogDemo from "@/components/main/userDemo"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <PageHeader
        title="About Us"
        description="Learn more about our mission, values, and the team behind Exceleed."
        image="/placeholder.svg?height=600&width=1200"
      />

      <section className="py-12 md:py-16 lg:py-20 w-full mx-0">
        <div className="w-full mx-0">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-2 items-center w-full px-2 md:px-4">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-gray-500 text-base md:text-lg">
                Founded in 2010, Exceleed began with a simple mission: to provide businesses with technology solutions
                that truly exceed expectations. What started as a small IT consulting firm has grown into a
                comprehensive technology partner serving clients across multiple industries.
              </p>
              <p className="text-gray-500 text-base md:text-lg">
                Our journey has been defined by continuous innovation, unwavering commitment to quality, and a
                client-first approach. As technology evolved, so did we—expanding into telecom, AV, cloud, and cybersecurity.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl w-full">
              <Image src={bgimage} alt="Exceleed office" placeholder="blur" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gray-50 w-full mx-0">
        <div className="w-full mx-0 px-2 md:px-4">
          <div className="text-center space-y-4 mb-12 w-full">
            <h2 className="text-3xl font-bold tracking-tighter">Our Mission & Values</h2>
            <p className="text-gray-500 text-base md:text-lg max-w-[800px] mx-auto">
              At Exceleed, we’re driven by a commitment to empower businesses through innovative technology solutions
              that drive growth and efficiency.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {[
              {
                title: "Excellence",
                desc: "We strive for excellence in everything we do.",
                icon: "star",
              },
              {
                title: "Integrity",
                desc: "We operate with transparency and ethical standards.",
                icon: "shield",
              },
              {
                title: "Innovation",
                desc: "We embrace new technology for better solutions.",
                icon: "activity",
              },
              {
                title: "Client Focus",
                desc: "Our clients come first in every decision.",
                icon: "users",
              },
              {
                title: "Collaboration",
                desc: "We succeed together by working closely with partners.",
                icon: "link",
              },
              {
                title: "Adaptability",
                desc: "We adjust quickly to evolving needs.",
                icon: "refresh-ccw",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <i className={`lucide lucide-${item.icon} text-primary h-6 w-6`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 w-full mx-0">
        <div className="w-full mx-0 px-2 md:px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Leadership Team</h2>
            <p className="text-gray-500 text-base md:text-lg max-w-[800px] mx-auto">
              Meet the experienced professionals who lead our company with vision and expertise.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {[
              { name: "Sarah Johnson", role: "CEO", image: "/placeholder.svg", bio: "20+ years of tech leadership." },
              { name: "Michael Chen", role: "CTO", image: "/placeholder.svg", bio: "Expert in digital innovation." },
              { name: "David Rodriguez", role: "VP Sales", image: "/placeholder.svg", bio: "Client-first strategy expert." },
              { name: "Priya Patel", role: "VP Ops", image: "/placeholder.svg", bio: "Smooth project delivery lead." },
              { name: "James Wilson", role: "VP Product", image: "/placeholder.svg", bio: "Innovation-driven strategist." },
              { name: "Lisa Thompson", role: "VP Customer", image: "/placeholder.svg", bio: "Client success champion." },
            ].map((member, idx) => (
              <TeamMember key={idx} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gray-50 w-full mx-0">
        <div className="w-full mx-0 px-2 md:px-4 text-center flex flex-col items-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">Ready to Work With Us?</h2>
          <p className="text-gray-500 text-base md:text-lg max-w-[800px]">
            Lets discuss how our solutions can help your business thrive.
          </p>
          <div className="flex flex-col gap-3 min-[400px]:flex-row">
            <DialogDemo />
            {/* <Link href="/contact">
              <Button className="px-6 py-2 border rounded-lg hover:bg-gray-100">Contact Us</Button>
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  )
}

