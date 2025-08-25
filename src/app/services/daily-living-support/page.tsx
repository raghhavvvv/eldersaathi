// src/app/services/daily-living-support/page.tsx

import { Hero } from "@/components/Hero";
import Link from "next/link";
// Importing relevant icons for the feature list
import { 
  FaFileInvoice, FaStethoscope, FaUniversity, FaUserCog, 
  FaPlaneDeparture, FaTools, FaShoppingCart, FaBroom 
} from "react-icons/fa";

const features = [
  { icon: <FaFileInvoice />, text: "Monitor and manage bill payments." },
  { icon: <FaStethoscope />, text: "Accompany individuals to medical appointments." },
  { icon: <FaUniversity />, text: "Support banking and insurance needs." },
  { icon: <FaUserCog />, text: "Select, train, and supervise domestic staff." },
  { icon: <FaPlaneDeparture />, text: "Facilitate transportation and travel arrangements." },
  { icon: <FaTools />, text: "Provide assistance for home and vehicle maintenance." },
  { icon: <FaShoppingCart />, text: "Coordinate grocery and food deliveries." },
  { icon: <FaBroom />, text: "Arrange services like cleaning, pest control, laundry, and grooming." },
];

export default function DailyLivingSupportPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero 
        title="Daily Living Support"
        imageUrl="/images/daily-living-hero.png" // Reusing a hero image
      />

      {/* 2. Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Introductory Paragraph */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Daily Living Support</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Simplify your daily routine with Elder Saathi's Daily Living Support. From handling bill payments and transportation assistance to managing home and vehicle maintenance, we offer a range of services under one roof. Elevate your daily living experience with our tailored support.
            </p>
          </div>

          {/* 3. Feature List */}
          <div className="space-y-8 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-6 p-4 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0 text-3xl text-[#00C29C]">
                  {feature.icon}
                </div>
                <p className="text-lg text-gray-700">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final Call to Action Section */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="container mx-auto px-6">
          {/* Using a light yellow background for the box */}
          <div className="bg-[#FFC412]/20 rounded-lg text-center max-w-4xl mx-auto py-12 px-8">
            <h2 className="text-3xl font-bold mb-4">Exploring Senior Living Options? Curious About Comprehensive Support?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Unlock the Door to Elder Well-being! Connect with Eldersaathi for Expert Care and Compassionate Support. Your Journey to Fulfilling Senior Living Starts Here!
            </p>
            <Link href="/services" className="btn btn-primary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}