import AppProductCard from '@/components/atoms/AppProductCard'
import AppProductContent from '@/components/atoms/AppProductContent'

const AppProducts: React.FC = () => {
  return (
    <div className="w-full px-4 lg:px-0 lg:w-[1200px] flex-col justify-between items-center inline-flex">
      <div className="h-[234px] flex flex-col justify-start items-start gap-6">
        <div className="w-full lg:w-[531px] text-[#271454]  text-4xl lg:text-5xl font-bold font-['Helvetica']">
          Our Mobile App Products
        </div>
        <div className="w-full lg:w-[531px] text-[#4f2a82] text-sm lg:text-lg font-normal font-['Helvetica'] lg:leading-[25.20px] ">
          Our mobile app solutions combine sleek design with reliable
          performance to engage users and support business growth. We develop
          customized apps across all platforms, ensuring security, scalability,
          and a seamless user experience.
        </div>
      </div>
      <div className="relative">
        <AppProductContent />
        <AppProductCard />
      </div>
    </div>
  )
}

export default AppProducts
