// src/app/about/page.tsx

import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";
import Link from "next/link";

// This is the new features array with paths to your PNG files
const features = [
  { iconSrc: "/images/quick-response.png", title: "Quick Response" },
  { iconSrc: "/images/24-7-support.png", title: "24/7 Support" },
  { iconSrc: "/images/comprehensive-care.png", title: "Comprehensive Care" },
  { iconSrc: "/images/skilled-team.png", title: "Skilled Team" },
  { iconSrc: "/images/modern-technology.png", title: "Modern Technology" },
  { iconSrc: "/images/affordable-solutions.png", title: "Affordable Solutions" },
];

export default function AboutPage() {
  return (
    <>
      <Hero 
        title="About us"
        imageUrl="/images/about-us-hero.png"
      />

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-4">
              <p className="font-semibold text-[#00C29C]">About us</p>
              <h2 className="text-4xl font-bold">ElderSaathi - Your Partner in Senior Wellness</h2>
            </div>
            <div className="text-gray-600 leading-relaxed pt-2">
              <p>✨ Crafting Joyful Journeys in Aging, Wherever You Are. At Elder Saathi, we understand the profound desire to provide the best care for your parents, even from miles away. Step into a world where compassion knows no distance, and the well-being of your loved ones is our top priority.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#00C29C] p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission:</h3>
              <p className="text-gray-200 leading-relaxed">Enhancing senior well-being with compassion and care. Eldersaathi provides personalized support, emergency response, and holistic health coordination.</p>
            </div>
            <div className="bg-[#FFC412]/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#263238]">Our Vision:</h3>
              <p className="text-[#263238]/90 leading-relaxed">Creating a world where seniors thrive, ElderSaathi redefines care with innovation, community, and empowerment. We aspire to be your ultimate partner in senior wellness...</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* The mapping logic now passes the new props correctly */}
            {features.map((feature) => (
              <FeatureCard key={feature.title} iconSrc={feature.iconSrc} title={feature.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] pt-20 pb-20">
        <div className="container mx-auto px-6">
          <div className="bg-[#FFC412]/20 rounded-lg text-center max-w-4xl mx-auto py-12 px-8">
            <h2 className="text-3xl font-bold mb-4">Join Us in Redefining Senior Care:</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Embark on a journey where aging is embraced with compassion and innovation. Connect with ElderSaathi today for a personalized and compassionate approach to senior wellness.
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