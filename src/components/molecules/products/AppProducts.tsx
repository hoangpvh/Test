import AppProductCard from '@/components/atoms/AppProductCard'
import AppProductContent from '@/components/atoms/AppProductContent'

const AppProducts: React.FC = () => {
  return (
    <div className="h-auto w-full xl:w-[1200px] sm:h-[378px] gap-10 flex sm:flex-row flex-col justify-center xl:justify-between items-center">
      <div className="flex flex-col gap-6 xl:max-w-[531px] sm:max-w-[332px] lg:max-w-[432px]">
        <div className="text-[#271454] sm:text-5xl text-4xl font-bold font-['Helvetica']">
          Our Mobile App Products
        </div>
        <div className="text-[#4f2a82] text-sm sm:text-lg font-normal font-helvetica leading-tight sm:leading-[25.20px]">
          Our mobile app solutions combine sleek design with reliable
          performance to engage users and support business growth. We develop
          customized apps across all platforms, ensuring security, scalability,
          and a seamless user experience.
        </div>
      </div>
      <div className="w-[342px] h-[330px] sm:w-[432px] xl:w-[532px] xl:h-[378px] relative">
        <AppProductContent className="absolute left-0 top-0" />
        <AppProductCard className="absolute right-0 top-[113px] sm:left-[100px] lg:left-[147px] sm:top-[53px] xl:top-[70px]" />
      </div>
    </div>
  )
}

export default AppProducts
