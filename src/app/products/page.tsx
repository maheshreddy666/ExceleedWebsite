import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageHeader } from "@/components/page-header"
import { ProductCard } from "@/components/product-card"

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="Our Products"
        description="Discover our comprehensive range of technology solutions designed to transform your business."
        image="/placeholder.svg?height=600&width=1200"
      />

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="it">IT</TabsTrigger>
                <TabsTrigger value="telecom">Telecom</TabsTrigger>
                <TabsTrigger value="av">AV</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProductCard
                  title="Smart Conference System"
                  category="AV Solutions"
                  description="Advanced audio-visual solution for modern meeting rooms with integrated controls and seamless connectivity."
                  image="/placeholder.svg?height=400&width=600"
                  href="/products/smart-conference-system"
                />
                <ProductCard
                  title="Secure Cloud Infrastructure"
                  category="IT Solutions"
                  description="Enterprise-grade cloud solutions with top-tier security features and scalable architecture."
                  image="/placeholder.svg?height=400&width=600"
                  href="/products/secure-cloud-infrastructure"
                />
                <ProductCard
                  title="Unified Communications"
                  category="Telecom Solutions"
                  description="Seamless integration of voice, video, and messaging for enhanced team collaboration."
                  image="/Products/image.png"
                  href="/services"
                />
                <ProductCard
                  title="Network Optimization"
                  category="IT Solutions"
                  description="Performance-focused network solutions for businesses with advanced monitoring and management."
                  image="/placeholder.svg?height=400&width=600"
                  href="/products/network-optimization"
                />
                <ProductCard
                  title="Digital Signage System"
                  category="AV Solutions"
                  description="Dynamic digital signage solutions for impactful visual communications in any environment."
                  image="/placeholder.svg?height=400&width=600"
                  href="/products/digital-signage-system"
                />
                <ProductCard
                  title="VoIP Phone Systems"
                  category="Telecom Solutions"
                  description="Advanced VoIP solutions that enhance communication while reducing costs."
                  image="/Products/polycom (1).webp"
                  href="/products/voip-phone-systems"
                />
              </div>
            </TabsContent>

            <TabsContent value="it" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProductCard
                  title="Secure Cloud Infrastructure"
                  category="IT Solutions"
                  description="Enterprise-grade cloud solutions with top-tier security features and scalable architecture."
                  image="/placeholder.svg?height=400&width=600"
                  href="/products/secure-cloud-infrastructure"
                />
                <ProductCard
                  title="Network Optimization"
                  category="IT Solutions"
                  description="Performance-focused network solutions for businesses with advanced monitoring and management."
                  image="/placeholder.svg?height=400&width=600"
                  href="/products/network-optimization"
                />
                <ProductCard
                  title="Cybersecurity Suite"
                  category="IT Solutions"
                  description="Comprehensive security solutions to protect your business from evolving cyber threats."
                  image="/placeholder.svg?height=400&width=600"
                  href="/products/cybersecurity-suite"
                />
              </div>
            </TabsContent>

            <TabsContent value="telecom" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProductCard
                  title="Unified Communications"
                  category="Telecom Solutions"
                  description="Seamless integration of voice, video, and messaging for enhanced team collaboration."
                  image="/Products/image.png"
                  href="/Products/image.png"
                />
                <ProductCard
                  title="VoIP Phone Systems"
                  category="Telecom Solutions"
                  description="Advanced VoIP solutions that enhance communication while reducing costs."
                  image="/Products/polycom (1).webp"
                  href="/products/voip-phone-systems"
                />
                <ProductCard
                  title="Mobile Workforce Solutions"
                  category="Telecom Solutions"
                  description="Empower your mobile workforce with seamless connectivity and collaboration tools."
                  image="/Products/yealink2.jpg"
                  href="/products/mobile-workforce-solutions"
                />
              </div>
            </TabsContent>

            <TabsContent value="av" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProductCard
                  title="Smart Conference System"
                  category="AV Solutions"
                  description="Advanced audio-visual solution for modern meeting rooms with integrated controls and seamless connectivity."
                  image="/placeholder.svg?height=400&width=600"
                  href="/products/smart-conference-system"
                />
                <ProductCard
                  title="Digital Signage System"
                  category="AV Solutions"
                  description="Dynamic digital signage solutions for impactful visual communications in any environment."
                  image="/placeholder.svg?height=400&width=600"
                  href="/products/digital-signage-system"
                />
                <ProductCard
                  title="Immersive Presentation Systems"
                  category="AV Solutions"
                  description="Create engaging presentations with our immersive audio-visual systems."
                  image="/placeholder.svg?height=400&width=600"
                  href="/products/immersive-presentation-systems"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Featured Product</h2>
              <h3 className="text-2xl font-semibold">Smart Conference System Pro</h3>
              <p className="text-gray-500 md:text-lg">
                Transform your meeting spaces with our flagship Smart Conference System Pro. This comprehensive solution
                integrates cutting-edge audio-visual technology with intuitive controls to create seamless collaboration
                experiences.
              </p>
              <ul className="space-y-2">
                {[
                  "4K video conferencing with AI-powered camera tracking",
                  "Crystal-clear audio with noise cancellation",
                  "Wireless content sharing from any device",
                  "Integrated room controls for lighting, blinds, and climate",
                  "Seamless calendar integration and one-touch meeting start",
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button asChild>
                  <Link href="/products/smart-conference-system-pro">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/demo">Request a Demo</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Smart Conference System Pro"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">How We Deliver</h2>
            <p className="text-gray-500 md:text-lg max-w-[800px]">
              Our product implementation process ensures a smooth transition and maximum value for your business.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center text-center space-y-2">
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
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Consultation</h3>
              <p className="text-gray-500">We assess your needs and recommend the right solutions.</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
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
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Design</h3>
              <p className="text-gray-500">We create a tailored implementation plan for your environment.</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
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
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Implementation</h3>
              <p className="text-gray-500">Our experts deploy and configure your solutions with minimal disruption.</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Support</h3>
              <p className="text-gray-500">We provide ongoing support and optimization to ensure long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Ready to Transform Your Business?</h2>
            <p className="text-gray-500 md:text-lg max-w-[800px]">
              Schedule a demo today and discover how our products can help you achieve your business goals.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/demo">
                  Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
