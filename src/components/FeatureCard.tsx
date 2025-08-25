
import Image from 'next/image'; // Make sure to import the Image component
import React from 'react';

interface FeatureCardProps {
  iconSrc: string;
  title: string;
}

export const FeatureCard = ({ iconSrc, title }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
      
      <div>
        <Image
          src={iconSrc}
          alt={`${title} icon`}
          width={60}  // Using a fixed size for consistency
          height={60}
        />
      </div>

      <h3 className="font-bold text-lg text-[#263238]">{title}</h3>
    </div>
  );
};