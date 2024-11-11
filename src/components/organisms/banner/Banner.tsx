'use client';

import ContentSection from '@/components/molecules/banner/ContentSection';
import EmailInputGroup from '@/components/molecules/banner/EmailInputGroup';
import PlatformCard from '@/components/molecules/banner/PlatformCard';

const Banner: React.FC = () => {
  return (
    <div className="w-full max-w-[1740px] h-auto flex flex-col items-center mt-[239px]">
      <ContentSection />
      <EmailInputGroup />

      <PlatformCard
        className="w-[1448px] h-[120px] mt-[-143px] flex justify-between items-center"
        platforms={[
          { iconName: 'Notion Logomark', altText: 'Notion Logo' },
          { iconName: 'Webflow Logomark', altText: 'Webflow Logo' },
        ]}
      />

      <PlatformCard
        className="w-[1056px] h-[120px] mt-[36px] flex justify-between items-center"
        platforms={[
          { iconName: 'Shopify Logomark', altText: 'Shopify Logo' },
          { iconName: 'Wordpress Logomark', altText: 'Wordpress Logo' },
        ]}
      />

      <PlatformCard
        className="w-[636px] h-[120px] mt-[-13px] flex justify-between items-center"
        platforms={[
          { iconName: 'Visual Studio Code', altText: 'Visual Code Logo' },
          { iconName: 'Figma Logomark', altText: 'Figma Logo' },
        ]}
      />
    </div>
  );
};

export default Banner;
