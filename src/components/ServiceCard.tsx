import Image from 'next/image';

interface ServiceCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

export const ServiceCard = ({ iconSrc, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center flex flex-col items-center h-full">
      <div className="mb-3 sm:mb-4 flex-shrink-0">
        <Image src={iconSrc} alt={`${title} icon`} width={60} height={60} className="sm:w-20 sm:h-20" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 leading-tight">{title}</h3>
      <p className="text-sm sm:text-base text-brand-medium-gray flex-grow leading-relaxed">{description}</p>
    </div>
  );
};