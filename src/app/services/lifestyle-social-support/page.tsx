// src/app/services/lifestyle-and-social-support/page.tsx

import { Hero } from "@/components/Hero";
import Link from "next/link";
// Importing relevant icons for the feature list
import { 
  FaGift, FaBoxOpen, FaLaptop, FaShoppingCart, 
  FaFileSignature, FaHome, FaPlane 
} from "react-icons/fa";

// The list of features for Lifestyle and Social Support
const features = [
  { icon: <FaGift />, text: "Organize and execute memorable events and celebrations." },
  { icon: <FaBoxOpen />, text: "Assist with packing, moving, or relocation." },
  { icon: <FaLaptop />, text: "Guide on utilizing everyday technology." },
  { icon: <FaShoppingCart />, text: "Support online/offline shopping, government tasks, and utility needs." },
  { icon: <FaFileSignature />, text: "Assist with legal, financial, tax planning, and filing." },
  { icon: <FaHome />, text: "Aid in Will preparation and Property Management." },
  { icon: <FaPlane />, text: "Curate enjoyable group tours for seniors." },
];

export default function LifestyleAndSocialSupportPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero 
        title="Lifestyle And Social Support"
        imageUrl="/images/lifestyle-hero.png" // Reusing a hero image
      />

      {/* 2. Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Introductory Paragraph */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lifestyle And Social Support</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Enjoy an enriched lifestyle with Elder Saathi's Lifestyle and Social Support. We organize events, offer technology guidance, and provide assistance with both online and offline activities. Connect with us for a vibrant and socially engaged senior living experience.
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
          {/* Using a light teal background for the box */}
          <div className="bg-[#E3F2EF] rounded-lg text-center max-w-4xl mx-auto py-12 px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to embark on a journey of enhanced senior wellness?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Empower Your Loved Ones with Eldersaathi's Holistic Care. Discover Tailored Support That Transforms Senior Living. Contact Us - Your First Step to a More Vibrant Life!
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}