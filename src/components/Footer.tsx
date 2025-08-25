// src/components/Footer.tsx

import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    // Use the very light grey background and dark text
    <footer className="bg-[#F5F5F5] text-[#263238]">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        
        {/* This div uses flexbox and has responsive padding for alignment */}
        <div className="border-t border-gray-200 pt-8 sm:pt-12 lg:pt-16 flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-12 lg:px-16">
          
          {/* Left Side: Logo and Motto */}
          <div className="space-y-3 sm:space-y-4">
            <Link href="/">
              {/* Use the default dark-text logo */}
              <Image src="/images/logo.png" alt="ElderSaathi Logo" width={120} height={32} className="sm:w-[150px] sm:h-[40px]" />
            </Link>
            <p className="text-gray-600 max-w-xs text-sm sm:text-base leading-relaxed">
              Take the first step towards vibrant senior wellness today!
            </p>
          </div>

          {/* Right Side: Important Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-bold text-base sm:text-lg">Important Links</h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
              <li><Link href="/" className="hover:text-[#00C29C] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#00C29C] transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-[#00C29C] transition-colors">Services</Link></li>
              <li><Link href="/plans" className="hover:text-[#00C29C] transition-colors">Plans</Link></li>
              <li><Link href="/blogs" className="hover:text-[#00C29C] transition-colors">Blogs</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};