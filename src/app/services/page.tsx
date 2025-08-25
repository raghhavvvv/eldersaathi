// src/app/services/page.tsx

import { Hero } from "@/components/Hero";
import { DetailedServiceCard } from "@/components/DetailedServiceCard";
import { FaqItem } from "@/components/FaqItem";

// Data for our services. Ensure you have the corresponding images.
const services = [
  {
    iconSrc: "/images/service-rapid-response.svg",
    title: "Rapid Response",
    description: "Ensure swift action during emergencies with our Rapid Response service. From immediate family emergency plans to real-time communication, we&apos;ve got your back.",
    href: "/services/rapid-response"
  },
  {
    iconSrc: "/images/service-holistic-well-being.svg",
    title: "Holistic Well-Being",
    description: "Embrace a holistic approach to wellness. Our programs cover everything from regular check-ins to nutritional consultations, fostering a healthy lifestyle.",
    href: "/services/holistic-well-being"
  },
  {
    iconSrc: "/images/service-healthcare-coordination.svg",
    title: "Healthcare Coordination",
    description: "Navigate the complexities of healthcare seamlessly. Our expert coordination ensures timely and quality medical care, providing you with peace of mind.",
    href: "/services/healthcare-coordination"
  },
  {
    iconSrc: "/images/service-daily-living-support.svg",
    title: "Daily Living Support",
    description: "Simplify daily tasks with our Daily Living Support. From bill payments to transportation assistance, Elder Saathi is your one-stop solution for convenient living.",
    href: "/services/daily-living-support"
  },
  {
    iconSrc: "/images/service-lifestyle-support.svg",
    title: "Lifestyle and Social Support",
    description: "Enhance your lifestyle with our support. From event organization to technology guidance, we&apos;re here to make your senior years enjoyable and connected.",
    href: "/services/lifestyle-social-support"
  },
  {
    iconSrc: "/images/service-peace-of-mind.svg",
    title: "Peace of Mind",
    description: "Experience tranquility with our Peace of Mind service. From fall-prevention measures to smart safety solutions, we ensure a secure and worry-free environment.",
    href: "/services/peace-of-mind"
  },
];

const faqs = [
    { question: "How can I contact ElderSaathi in case of an emergency?", answer: "For urgent matters, reach us immediately through our helpline or contact us via [emergency contact details], ensuring rapid response and support." },
    { question: "What makes ElderSaathi a trustworthy partner in senior care?", answer: "ElderSaathi stands out as a reliable partner due to our commitment to compassionate care, innovative solutions, and personalized attention, ensuring a holistic and supportive experience." },
    { question: "Can I trust ElderSaathi with my loved one&apos;s well-being?", answer: "Absolutely. ElderSaathi&apos;s expert team, with leadership in healthcare, technology, and service domains, ensures that your loved one receives the best care and support." },
    { question: "Who needs Eldersaathi support?", answer: [ "Individuals living away from their aging parents or family members.", 
        "NRIs seeking reliable and comprehensive support for their parents in India.", 
        "Those with busy lifestyles or geographical constraints making it challenging to manage elder care.", 
        "Anyone looking for tailored assistance and peace of mind in ensuring the well-being of their loved ones." ] },
    { question: "How does Lifestyle and Social Support enhance senior living?", answer: "Elder Saathi enriches senior living with Lifestyle and Social Support. Our services include event organization, technology guidance, and assistance in both online and offline activities, creating a vibrant and socially engaged experience." }
];


export default function ServicesPage() {
  return (
    <>
      <Hero 
        title="Our Services"
        imageUrl="/images/services-hero.png" // Ensure you have this image
      />

      {/* Intro Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-lg text-gray-700 leading-relaxed">
                Our services transcend traditional boundaries, offering comprehensive support that adapts to the evolving needs of our elders. From healthcare coordination to community building, we stand at the forefront of empowering senior lives.
            </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <DetailedServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12">FAQs</h2>
            <div className="divide-y divide-gray-200">
                {faqs.map((faq) => (
                    <FaqItem key={faq.question} {...faq} />
                ))}
            </div>
        </div>
      </section>
    </>
  );
}