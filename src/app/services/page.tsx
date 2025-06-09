import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { ServiceCard } from "@/components/service-card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="Our Services"
        description="Comprehensive technology services tailored to meet your business needs."
        image="/placeholder.svg?height=600&width=1200"
      />

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
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
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">IT Consulting Services</h2>
              <p className="text-gray-500 md:text-lg">
                Our IT consulting services help businesses leverage technology to achieve their strategic goals. We
                provide expert guidance on IT strategy, infrastructure planning, and digital transformation.
              </p>
              <p className="text-gray-500 md:text-lg">
                With a deep understanding of both business and technology, our consultants bridge the gap between
                technical capabilities and business objectives, ensuring that your technology investments deliver
                maximum value.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button asChild>
                  <Link href="/services/it-consulting">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl">
              <Image src="/placeholder.svg?height=800&width=1200" alt="IT Consulting" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Service Process</h2>
            <p className="text-gray-500 md:text-lg max-w-[800px]">
              We follow a structured approach to ensure successful service delivery and client satisfaction.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-none shadow-sm">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We begin by understanding your business needs, challenges, and objectives through in-depth
                  consultations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our experts evaluate your current technology environment and identify opportunities for improvement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We deploy tailored solutions with minimal disruption to your business operations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <CardTitle>Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We provide ongoing support and continuous improvement to maximize the value of your technology
                  investments.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
            <p className="text-gray-500 md:text-lg max-w-[800px]">
              Find answers to common questions about our services and how we can help your business.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What industries do you serve?</AccordionTrigger>
                <AccordionContent>
                  We serve a wide range of industries including healthcare, finance, education, retail, manufacturing,
                  and professional services. Our solutions are tailored to meet the specific needs and compliance
                  requirements of each industry.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do you ensure service quality?</AccordionTrigger>
                <AccordionContent>
                  We maintain high service quality through rigorous quality assurance processes, regular training for
                  our team, adherence to industry best practices, and continuous client feedback. We also employ
                  proactive monitoring and maintenance to prevent issues before they impact your business.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What support options do you offer?</AccordionTrigger>
                <AccordionContent>
                  We offer multiple support tiers including standard business hours support, extended hours support, and
                  24/7 premium support. All our service packages include access to our help desk, regular maintenance,
                  and system updates. We also provide emergency response for critical issues.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do you handle data security?</AccordionTrigger>
                <AccordionContent>
                  Data security is our top priority. We implement multi-layered security measures including encryption,
                  access controls, regular security audits, and compliance with industry standards like GDPR, HIPAA, and
                  PCI DSS where applicable. Our team stays updated on the latest security threats and best practices.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Can you scale services as my business grows?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. Our services are designed to scale with your business. We regularly review your technology
                  needs and make recommendations to ensure your infrastructure can support your growth. Our flexible
                  service agreements allow for adjustments as your requirements change.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Ready to Get Started?</h2>
            <p className="text-gray-500 md:text-lg max-w-[800px]">
              Contact us today to discuss how our services can help your business thrive.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/demo">
                  Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
