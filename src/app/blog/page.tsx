import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { BlogCard } from "@/components/blog-card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="Blog & Insights"
        description="Stay updated with the latest trends and insights in technology and business."
        image="/products/insights_blog.png"
      />

      <section className="py-12 md:py-16 lg:py-20">
        <div className="w-full px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">Latest Articles</h2>
            <div className="w-full md:w-auto">
              <form className="flex w-full max-w-sm items-center space-x-2">
                <Input type="search" placeholder="Search articles..." className="max-w-xs" />
                <Button type="submit">Search</Button>
              </form>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <BlogCard
              title="The Future of Remote Work Technology"
              excerpt="Discover how emerging technologies are reshaping the remote work landscape and enabling more productive distributed teams."
              date="April 15, 2023"
              category="Technology"
              image="/placeholder.svg?height=400&width=600"
            />
            <BlogCard
              title="Cybersecurity Best Practices for 2023"
              excerpt="Essential security measures every business should implement this year to protect against evolving cyber threats."
              date="March 22, 2023"
              category="Security"
              image="/placeholder.svg?height=400&width=600"
            />
            <BlogCard
              title="Cloud Migration: A Step-by-Step Guide"
              excerpt="Learn how to seamlessly transition your business to the cloud with this comprehensive migration guide."
              date="February 10, 2023"
              category="Cloud"
              image="/placeholder.svg?height=400&width=600"
            />
            <BlogCard
              title="AI in Business: Beyond the Hype"
              excerpt="Practical applications of artificial intelligence that are delivering real business value today."
              date="January 28, 2023"
              category="AI"
              image="/placeholder.svg?height=400&width=600"
            />
            <BlogCard
              title="5G Technology: What It Means For Your Business"
              excerpt="Explore how 5G connectivity will transform business operations and enable new opportunities."
              date="December 15, 2022"
              category="Telecom"
              image="/placeholder.svg?height=400&width=600"
            />
            <BlogCard
              title="Creating Effective Hybrid Meeting Spaces"
              excerpt="Design considerations and technology solutions for inclusive and productive hybrid meetings."
              date="November 30, 2022"
              category="AV Solutions"
              image="/placeholder.svg?height=400&width=600"
            />
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="w-full px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Featured Article</h2>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/products/Digital-Transformation.jpg"
                    alt="Digital Transformation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>Digital Transformation</Badge>
                    <span className="text-sm text-gray-500">May 5, 2023</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Digital Transformation: A Comprehensive Guide for 2023</h3>
                  <p className="text-gray-500 mb-4">
                    Digital transformation has become a critical initiative for businesses looking to remain competitive
                    in todays rapidly evolving marketplace. This comprehensive guide explores the key components of a
                    successful digital transformation strategy, from technology selection to change management.
                  </p>
                  <p className="text-gray-500 mb-4">
                    Well dive into real-world case studies, examine common challenges, and provide actionable insights
                    to help your organization navigate its digital transformation journey successfully.
                  </p>
                  <Button asChild>
                    <Link href="/blog/digital-transformation-guide">
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tighter mb-6">Categories</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge className="px-3 py-1 cursor-pointer">All</Badge>
                <Badge variant="outline" className="px-3 py-1 cursor-pointer">
                  Technology
                </Badge>
                <Badge variant="outline" className="px-3 py-1 cursor-pointer">
                  Security
                </Badge>
                <Badge variant="outline" className="px-3 py-1 cursor-pointer">
                  Cloud
                </Badge>
                <Badge variant="outline" className="px-3 py-1 cursor-pointer">
                  AI
                </Badge>
                <Badge variant="outline" className="px-3 py-1 cursor-pointer">
                  Telecom
                </Badge>
                <Badge variant="outline" className="px-3 py-1 cursor-pointer">
                  AV Solutions
                </Badge>
                <Badge variant="outline" className="px-3 py-1 cursor-pointer">
                  Digital Transformation
                </Badge>
              </div>

              <h2 className="text-xl font-bold tracking-tighter mb-6">Popular Posts</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Cloud Security"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium line-clamp-2">
                      <Link href="/blog/cloud-security-best-practices" className="hover:text-primary">
                        Cloud Security Best Practices for Enterprise
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">June 12, 2023</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                    <Image src="/placeholder.svg?height=100&width=100" alt="IT Budget" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium line-clamp-2">
                      <Link href="/blog/it-budget-planning" className="hover:text-primary">
                        IT Budget Planning: Strategies for 2023
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">May 28, 2023</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Hybrid Work"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium line-clamp-2">
                      <Link href="/blog/hybrid-work-technology" className="hover:text-primary">
                        Technology Essentials for the Hybrid Workplace
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">April 15, 2023</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-500 mb-4">Stay updated with our latest insights and news.</p>
                <form className="space-y-4">
                  <Input type="email" placeholder="Your email address" />
                  <Button className="w-full">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
