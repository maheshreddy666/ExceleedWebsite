import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import AboutUs from "@/components/projectUsedImages/backgroundimages/handshakehuman.jpeg"
import { Button } from "@/components/ui/button"
import { ClientLogos } from "@/components/client-logos"
import { ServiceCard } from "@/components/service-card"
import { BlogCard } from "@/components/blog-card"
import { ProductShowcase } from "@/components/product-showcase"
import { HeroSection } from "@/components/hero-section"
import ExceleedLogo from "@/components/projectUsedImages/ComponyLogo/Exceleed_Logo.webp"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <section id="clients" className="py-12 bg-gray-50 flex items-center">
          <div className="w-full px-4 md:px-6">
            <h2 className="text-center text-xl font-medium tracking-tight mb-8">
              Partnered with Industry Leaders
            </h2>
            <ClientLogos />
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="w-full grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Exceleed is a leading consulting and technology company dedicated to delivering innovative solutions
                that exceed expectations. Our team of experts brings years of experience in IT, telecom, and AV
                solutions.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/about">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="aspect-video overflow-hidden rounded-xl">
              <Image
                src={AboutUs}
                alt="Team collaboration"
                width={1280}
                height={720}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        <section id="products" className="py-16 md:py-24 bg-gray-50">
          <div className="w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Cutting-edge solutions designed to transform your business operations and enhance productivity.
              </p>
            </div>
            <ProductShowcase />
            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive services tailored to meet your specific business needs and challenges.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="IT Consulting"
                description="Strategic IT consulting to align technology with your business objectives."
                icon="laptop"
              />
              <ServiceCard
                title="Telecom Solutions"
                description="Advanced telecommunication systems for seamless connectivity."
                icon="phone"
              />
              <ServiceCard
                title="AV Integration"
                description="Comprehensive audio-visual solutions for modern workspaces."
                icon="video"
              />
              <ServiceCard
                title="Cloud Services"
                description="Secure and scalable cloud infrastructure for your business."
                icon="cloud"
              />
              <ServiceCard
                title="Cybersecurity"
                description="Robust security measures to protect your valuable data."
                icon="shield"
              />
              <ServiceCard
                title="Managed Services"
                description="Proactive monitoring and management of your IT environment."
                icon="settings"
              />
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/services">Explore All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="blog" className="py-16 md:py-24 bg-gray-50">
          <div className="w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Insights</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest trends and insights in technology and business.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <BlogCard
                title="The Future of Remote Work Technology"
                excerpt="Discover how emerging technologies are reshaping the remote work landscape."
                date="April 15, 2023"
                category="Technology"
                image="/placeholder.svg?height=400&width=600"
              />
              <BlogCard
                title="Cybersecurity Best Practices for 2023"
                excerpt="Essential security measures every business should implement this year."
                date="March 22, 2023"
                category="Security"
                image="/placeholder.svg?height=400&width=600"
              />
              <BlogCard
                title="Cloud Migration: A Step-by-Step Guide"
                excerpt="Learn how to seamlessly transition your business to the cloud."
                date="February 10, 2023"
                category="Cloud"
                image="/placeholder.svg?height=400&width=600"
              />
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/blog">Read More Articles</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="cta" className="py-16 md:py-24">
          <div className="w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Business?
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Schedule a demo today and discover how our solutions can help you achieve your business goals.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/demo">Request a Demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="w-full flex flex-col gap-6 py-8 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4 md:gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src={ExceleedLogo} alt="Exceleed Logo" width={150} height={40} className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-gray-500 max-w-[350px]">
              Empowering solutions, exceeding expectations. Delivering cutting-edge IT, telecom, and AV solutions
              tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/products/it" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    IT Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/telecom"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Telecom
                  </Link>
                </li>
                <li>
                  <Link href="/products/av" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    AV Systems
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/consulting"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/implementation"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Implementation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/support"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="w-full flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
            <p className="text-xs text-gray-500">© 2023 Exceleed. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
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
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
