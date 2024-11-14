import OtherProductCard from '@/components/atoms/OtherProductCard';
import OtherProductContent from '@/components/atoms/OtherProductContent';

const AppProducts: React.FC = () => {
  return (
    <div className="w-full px-4 lg:px-0 lg:w-[1200px] flex-col justify-between items-start inline-flex gap-10">
      <div className="h-[206px] flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch text-[#271454] text-4xl font-bold font-['Helvetica']">
          Many other products
        </div>
        <div className="self-stretch text-[#4f2a82] text-sm font-normal font-['Helvetica'] leading-tight">
          From mobile apps to web platforms and enterprise software, we deliver
          high-performance solutions that adapt to your unique needs. With a
          focus on quality and user experience, our products transform ideas
          into impactful digital tools.
        </div>
      </div>
      <div className="relative">
        <OtherProductContent />
        <OtherProductCard />
      </div>
    </div>
  );
};

export default AppProducts;
