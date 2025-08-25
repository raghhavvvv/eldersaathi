// src/app/services/healthcare-coordination/page.tsx

import { Hero } from "@/components/Hero";
import Link from "next/link";
// Importing a variety of icons for the detailed list
import { 
  FaHospitalUser, FaHome, FaCalendarCheck, FaProcedures, FaFileInvoiceDollar, 
  FaPills, FaDumbbell, FaCar, FaHandHoldingHeart, FaBed, FaBriefcaseMedical 
} from "react-icons/fa";

// The long list of features specific to this service
const features = [
  { icon: <FaHospitalUser />, text: "Expertly manage hospital stays and medical care." },
  { icon: <FaHome />, text: "Coordinate and optimize healthcare services at home." },
  { icon: <FaCalendarCheck />, text: "Schedule and facilitate tests, check-ups, and appointments." },
  { icon: <FaProcedures />, text: "Plan and support surgical procedures." },
  { icon: <FaFileInvoiceDollar />, text: "Assist in navigating and processing insurance claims." },
  { icon: <FaPills />, text: "Provide efficient pharmaceutical delivery services." },
  { icon: <FaDumbbell />, text: "Offer personalized nutrition and exercise consultations." },
  { icon: <FaCar />, text: "Coordinate local logistics and provide companion support." },
  { icon: <FaHandHoldingHeart />, text: "Deliver empathetic Holistic Mental Health Support." },
  { icon: <FaBed />, text: "Facilitate the rental or purchase of medical equipment." },
  { icon: <FaBriefcaseMedical />, text: "Manage post-hospitalization care effectively." },
];

export default function HealthcareCoordinationPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero 
        title="Healthcare Co-ordination"
        imageUrl="/images/healthcare-hero.png" // Reusing a hero image
      />

      {/* 2. Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Introductory Paragraph */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Healthcare Co-ordination</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Navigating the healthcare landscape can be complex, but with Elder Saathi, it becomes seamless. Our Healthcare Coordination service ensures timely and quality medical care for your loved ones. Trust us to handle the intricacies, offering you assurance and comfort.
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
            <h2 className="text-3xl font-bold mb-4">Every Moment Matters!</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose Eldersaathi for Unmatched Senior Care. Call Our Compassionate Team Today and Begin the Journey to a Life Filled with Joy and Comfort!
            </p>
            <Link href="/contact" className="btn btn-primary">
              Request Assistance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}