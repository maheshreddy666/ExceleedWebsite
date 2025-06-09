import React from 'react';
import { MobileNav } from "@/components/mobile-nav";
import Image from "next/image"
import Link from "next/link"
// import { Button } from "@/components/ui/button";
import ExceleedLogo from "@/components/projectUsedImages/ComponyLogo/Exceleed_Logo.webp"
import UserDemo from "@/components/main/userDemo"

const HeaderPage = () => {
    return (
        <div>
            <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
                <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={ExceleedLogo} alt="Exceleed Logo" width={180} height={60} className="h-8 w-[150px]" />
                    </Link>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                            About
                        </Link>
                        <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
                            Products
                        </Link>
                        <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
                            Services
                        </Link>
                        <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
                            Blog
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4 bg-sky-500">
                        <UserDemo />
                        <MobileNav />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HeaderPage
