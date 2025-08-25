// src/app/contact/page.tsx

import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
// Make sure you have react-icons installed: npm install react-icons
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function ContactPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero 
        title="Contact Us"
        // Ensure you have an image for this hero section
        imageUrl="/images/contact-us-hero.png" 
      />

      {/* 2. Main Content Section */}
      <section className="bg-[#F5F5F5] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          
          {/* Left Column: Contact Details Card */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Contact Us</h2>
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-2">Call us on:</h3>
              <p className="text-gray-600 text-sm sm:text-base">Delhi: +91 8279732311</p>
              <p className="text-gray-600 text-sm sm:text-base">Chennai: +91 9176358803</p>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-2">Write us at:</h3>
              <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                <MdOutlineMail />
                <span>contactus@eldersaathi.com</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-2">Follow us:</h3>
              <div className="flex space-x-3">
                 <a href="#" aria-label="Facebook" className="p-2 bg-gray-200 rounded text-gray-700 hover:bg-[#00C29C] hover:text-white"><FaFacebookF /></a>
                 <a href="#" aria-label="Instagram" className="p-2 bg-gray-200 rounded text-gray-700 hover:bg-[#00C29C] hover:text-white"><FaInstagram /></a>
                 <a href="#" aria-label="LinkedIn" className="p-2 bg-gray-200 rounded text-gray-700 hover:bg-[#00C29C] hover:text-white"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Fill out the form</h2>
            <ContactForm />
          </div>

        </div>
      </section>
    </>
  );
}