import OtherProductCard from '@/components/atoms/OtherProductCard'
import OtherProductContent from '@/components/atoms/OtherProductContent'

const OtherProducts: React.FC = () => {
  return (
    <div className="w-full xl:w-[1200px] gap-10 h-auto flex justify-center sm:flex-row flex-col xl:justify-between items-center">
      <div className="flex flex-col gap-6 xl:max-w-[600px] sm:max-w-[332px] lg:max-w-[464px]">
        <div className="text-[#271454] text-4xl sm:text-5xl font-bold font-helvetica">
          Many other products
        </div>
        <div className="text-[#4f2a82] text-sm sm:text-lg font-normal font-helvetica leading-[25.20px]">
          From mobile apps to web platforms and enterprise software, we deliver
          high-performance solutions that adapt to your unique needs. With a
          focus on quality and user experience, our products transform ideas
          into impactful digital tools.
        </div>
      </div>
      <div className="relative sm:w-[469px] sm:h-[355px] xl:h-[420px] w-[343px] h-[350px] flex">
        <OtherProductContent />
        <OtherProductCard />
      </div>
    </div>
  )
}

export default OtherProducts
