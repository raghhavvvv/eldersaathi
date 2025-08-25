// src/app/services/rapid-response/page.tsx

import { Hero } from "@/components/Hero";
import Link from "next/link";
import { FaBolt, FaHeadset, FaSyncAlt } from "react-icons/fa"; // Using relevant icons

// Data for the feature list
const features = [
  {
    icon: <FaBolt />,
    text: "Develop an immediate family emergency plan for swift action.",
  },
  {
    icon: <FaHeadset />,
    text: "Establish a helpline for prompt medical care coordination.",
  },
  {
    icon: <FaSyncAlt />,
    text: "Maintain real-time communication and provide regular updates.",
  },
];

export default function RapidResponsePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero 
        title="Rapid Response"
        // You can create a specific hero image for this page or reuse another
        imageUrl="/images/rapid-response-hero.png" 
      />

      {/* 2. Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Introductory Paragraph */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rapid Response</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              In times of urgent need, Elder Saathi's Rapid Response service offers a comprehensive solution. We meticulously develop immediate family emergency plans, establish a helpline for prompt medical coordination, and maintain real-time communication. Our commitment is to provide swift and effective support, ensuring your peace of mind during unforeseen circumstances.
            </p>
          </div>

          {/* 3. Feature List */}
          <div className="space-y-8 max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="flex-shrink-0 text-3xl text-yellow-500 bg-yellow-100 p-4 rounded-full">
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
          <div className="bg-white rounded-lg shadow-md text-center max-w-4xl mx-auto py-12 px-8">
            <h2 className="text-3xl font-bold mb-4">Curious About Elevating Senior Wellness?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Wondering if Your Loved One Deserves More? Reach Out to Eldersaathi Today - Where Every Question Finds a Compassionate Answer!
            </p>
            <Link href="/contact" className="btn btn-primary">
              Discover More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}