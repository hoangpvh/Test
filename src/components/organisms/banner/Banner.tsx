'use client';

import { platformsList } from '@/assets/data';
import ContentSection from '@/components/molecules/banner/ContentSection';
import EmailInputGroup from '@/components/molecules/banner/EmailInputGroup';
import PlatformCard from '@/components/molecules/banner/PlatformCard';

const Banner: React.FC = () => {
  return (
    <div className="w-full max-w-[1740px] h-auto flex flex-col items-center mt-[239px]">
      <ContentSection />
      <EmailInputGroup />

      {platformsList.map((platform, index) => (
        <PlatformCard
          key={index}
          className={platform.className}
          platforms={platform.platforms}
        />
      ))}
    </div>
  );
};

export default Banner;
