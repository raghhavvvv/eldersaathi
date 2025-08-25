'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Plans', href: '/plans' },
  { name: 'Blogs', href: '/blogs' },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" onClick={closeMobileMenu}>
          <Image src="/images/logo.png" alt="ElderSaathi Logo" width={150} height={40} />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[#263238] hover:text-[#00C29C] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Desktop Contact Button */}
        <Link href="/contact" className="btn btn-primary hidden md:block">
          Contact Us
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-[#263238] hover:text-[#00C29C] transition-colors p-2"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="block text-[#263238] hover:text-[#00C29C] transition-colors py-2 border-b border-gray-100 last:border-b-0"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="btn btn-primary block text-center mt-4"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};