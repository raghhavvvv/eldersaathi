// src/components/DetailedServiceCard.tsx

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface DetailedServiceCardProps {
  iconSrc: string;
  title: string;
  description: string;
  href: string;
}

export const DetailedServiceCard = ({ iconSrc, title, description, href }: DetailedServiceCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2">
      <div className="mb-6">
        <Image 
          src={iconSrc}
          alt={`${title} icon`}
          width={90}
          height={90}
        />
      </div>
      <h3 className="text-xl font-bold mb-4 flex-grow">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link href={href} className="mt-auto px-6 py-2 border-2 border-[#00C29C] text-[#00C29C] font-semibold rounded-md hover:bg-[#00C29C] hover:text-white transition-colors">
        KNOW MORE
      </Link>
    </div>
  );
};