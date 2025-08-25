// src/app/services/peace-of-mind/page.tsx

import { Hero } from "@/components/Hero";
import Link from "next/link";
// 1. THIS IS THE FIX: Replace FaCctv with FaVideo
import { FaShieldAlt, FaUserCheck, FaVideo } from "react-icons/fa";

// The list of features for Peace of Mind
const features = [
  { icon: <FaShieldAlt />, text: "Conduct thorough assessments of home safety and implement fall-prevention measures." },
  { icon: <FaUserCheck />, text: "Verify the credentials of home attendants and staff." },
  // 2. Use the correct icon here
  { icon: <FaVideo />, text: "Implement smart safety and security solutions." },
];

export default function PeaceOfMindPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero 
        title="Peace Of Mind"
        imageUrl="/images/peace-hero.png" 
      />

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Introductory Paragraph */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Peace Of Mind</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Experience tranquility through Elder Saathi&apos;s Peace of Mind service. We conduct home safety assessments, implement fall-prevention measures, and deploy smart safety solutions. Our commitment is to establish a secure and worry-free environment, ensuring peace of mind for you or your loved ones.
            </p>
          </div>

          {/* Feature List */}
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

      {/* Final Call to Action Section */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="container mx-auto px-6">
          <div className="bg-[#FFC412]/20 rounded-lg text-center max-w-4xl mx-auto py-12 px-8">
            <h2 className="text-3xl font-bold mb-4">Considering a Change in Senior Living? Not Sure Where to Begin?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Eldersaathi Provides the Guidance and Support You Need. Call Today for Answers and Expert Assistance!
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact us for Assistance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}   