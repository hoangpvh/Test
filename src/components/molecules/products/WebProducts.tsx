import WebProductCard from '@/components/atoms/WebProductCard';
import WebProductContent from '@/components/atoms/WebProductContent';

const WebProducts: React.FC = () => {
  return (
    <div className="w-full px-4 lg:px-0 lg:w-[1200px] flex-col justify-between items-start gap-10 inline-flex">
      <div className="h-[186px] flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch text-[#271454] text-4xl font-bold font-['Helvetica']">
          Our Website Products
        </div>
        <div className="self-stretch text-[#4f2a82] text-sm font-normal font-['Helvetica'] leading-tight">
          We create websites that are secure, fast, and tailored to meet your
          business needs. From e-commerce platforms to content-rich sites, we
          deliver experiences that make lasting impressions.
        </div>
      </div>
      <div className="relative">
        <WebProductContent />
        <WebProductCard />
      </div>
    </div>
  );
};

export default WebProducts;
