// src/app/services/holistic-well-being/page.tsx

import { Hero } from "@/components/Hero";
import Link from "next/link";
// Using relevant icons from react-icons
import { FaClipboardCheck, FaSpa, FaHeartbeat } from "react-icons/fa";

// Data for the feature list, specific to this service
const features = [
  {
    icon: <FaClipboardCheck />,
    text: "Conduct regular wellness check-ins.",
  },
  {
    icon: <FaSpa />,
    text: "Provide rejuvenating therapeutic services (acupuncture, massage, yoga).",
  },
  {
    icon: <FaHeartbeat />,
    text: "Deliver empathetic Holistic Mental Health Support.",
  },
];

export default function HolisticWellBeingPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero 
        title="Holistic Well-Being"
        imageUrl="/images/holistic-hero.png" // Reusing a hero image
      />

      {/* 2. Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Introductory Paragraph */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Holistic Well-Being</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Embrace a holistic approach to wellness with Elder Saathi's comprehensive programs. From regular check-ins to personalized nutritional consultations, we curate services that foster a healthy and fulfilling lifestyle. Prioritizing your well-being, we provide support that goes beyond conventional boundaries.
            </p>
          </div>

          {/* 3. Feature List */}
          <div className="space-y-8 max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="flex-shrink-0 text-3xl text-[#00C29C] bg-[#E3F2EF] p-4 rounded-full">
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
          {/* Using a light teal background for the box */}
          <div className="bg-[#E3F2EF] rounded-lg text-center max-w-4xl mx-auto py-12 px-8">
            <h2 className="text-3xl font-bold mb-4">Ready for Senior Living at Its Best?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Eldersaathi is Your Companion on the Path to Wellness. Call Today for Expert Support and Unmatched Care.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}