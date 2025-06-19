'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ExceleedLogo from '@/components/projectUsedImages/ComponyLogo/Exceleed_Logo.webp';
import UserDemo from '@/components/main/userDemo';

const HeaderPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Handle link clicks: close mobile menu and redirect
  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    router.push(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={ExceleedLogo}
            alt="Exceleed Logo"
            width={140}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLinks onClick={handleLinkClick} isMobile={false} />
          <UserDemo />
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-xl p-2 focus:outline-none"
          >
            {isMobileMenuOpen ? '×' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t z-40 px-6 py-4 flex flex-col gap-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <NavLinks onClick={handleLinkClick} isMobile={true} />
          <UserDemo />
        </div>
      )}
    </header>
  );
};

// Reusable NavLinks component
const NavLinks = ({
  onClick,
  isMobile,
}: {
  onClick: (href: string) => void;
  isMobile: boolean;
}) => {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <>
      {links.map(({ label, href }) => (
        <button
          key={href}
          onClick={() => onClick(href)}
          className={`${
            isMobile ? 'text-lg' : 'text-sm'
          } font-medium hover:text-sky-600 text-left`}
        >
          {label}
        </button>
      ))}
    </>
  );
};

export default HeaderPage;
