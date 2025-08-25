// src/components/Hero.tsx

import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl: string; // Changed from backgroundImage to imageUrl
  children?: React.ReactNode;
}

export const Hero = ({ title, subtitle, imageUrl, children }: HeroProps) => {
  return (
    <div 
      className="relative h-[50vh] sm:h-[60vh] min-h-[400px] sm:min-h-[500px] bg-cover bg-center" 
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4 sm:px-6">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4 leading-tight" dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle && <p className="text-sm sm:text-lg md:text-xl max-w-xs sm:max-w-2xl md:max-w-3xl leading-relaxed">{subtitle}</p>}
        {children && <div className="mt-4 sm:mt-6 md:mt-8">{children}</div>}
      </div>
    </div>
  );
};