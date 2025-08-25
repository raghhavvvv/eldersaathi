// src/app/page.tsx

import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";
// Import the icons we need
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const services = [
  { iconSrc: "/images/service-rapid-response.svg", title: "Rapid Response", description: "" },
  { iconSrc: "/images/service-holistic-well-being.svg", title: "Holistic Well-Being", description: "" },
  { iconSrc: "/images/service-healthcare-coordination.svg", title: "Healthcare Coordination", description: "" },
  { iconSrc: "/images/service-daily-living-support.svg", title: "Daily Living Support", description: "" },
  { iconSrc: "/images/service-lifestyle-support.svg", title: "Lifestyle and Social Support", description: "" },
  { iconSrc: "/images/service-peace-of-mind.svg", title: "Peace of Mind", description: "" },
];

export default function HomePage() {
  return (
    <>
      <Hero 
        title="Your Partner in<br/>Senior Wellness"
        subtitle="Welcome to ElderSaathi, where compassionate elder care meets innovative support for families living away. We specialize in providing tailored solutions to ensure your parents receive the best care, even when miles apart."
        imageUrl="/images/hero-home.png"
      >
        <Link href="/about" className="btn btn-primary">
          Learn More
        </Link>
      </Hero>

      {/* ... (previous sections remain the same) ... */}
      <section className="bg-[#FAFAFA] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:px-16">
            <div className="bg-[#00C29C] p-6 sm:p-8 rounded-lg text-white"><h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Mission:</h3><p className="text-gray-200 leading-relaxed text-sm sm:text-base">Enhancing senior well-being with compassion and care. Eldersaathi provides personalized support, emergency response, and holistic health coordination.</p></div>
            <div className="bg-[#FFC412] p-6 sm:p-8 rounded-lg"><h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#263238]">Our Vision:</h3><p className="text-[#263238]/90 leading-relaxed text-sm sm:text-base">Creating a world where seniors thrive, ElderSaathi redefines care with innovation, community, and empowerment. We aspire to be your ultimate partner in senior wellness, embodying reliability, empathy, and service excellence.</p></div>
        </div>
      </section>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center"><h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Our Services</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">{services.map(service => (<ServiceCard key={service.title} {...service} />))}</div></div>
      </section>

      <section className="bg-[#F5F5F5] py-12 sm:py-16 lg:py-20">
        {/* The container centers the box horizontally */}
        <div className="container mx-auto px-4 sm:px-6">
          {/* This inner div is the green box itself */}
          <div className="bg-[#D4E2BE] rounded-lg text-center max-w-4xl mx-auto py-8 sm:py-12 px-6 sm:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-[#263238] leading-tight">Ready to embark on a journey of enhanced senior wellness?</h2>
            <p className="text-sm sm:text-base text-[#263238]/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Reach out to us today and discover how Eldersaathi can support you or your loved ones on the path to a fulfilling life. Call now to connect with our compassionate team!
            </p>
            <Link href="/contact" className="btn btn-light">
              Contact us for Assistance
            </Link>
          </div>
        </div>
      </section>


      {/* NEW Contact Us Section */}
      <section className="bg-[#F5F5F5] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column: Contact Info Card */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Contact Us</h2>
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-2">Call us on:</h3>
              <p className="text-gray-600 text-sm sm:text-base">Delhi: +91 8279732311</p>
              <p className="text-gray-600 text-sm sm:text-base">Chennai: +91 9176358803</p>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-2">Write us at:</h3>
              <p className="text-gray-600 text-sm sm:text-base">contactus@eldersaathi.com</p>
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

          {/* Right Column: Form Card */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Fill out the form</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}