import OtherProductCard from '@/components/atoms/OtherProductCard'
import OtherProductContent from '@/components/atoms/OtherProductContent'

const OtherProducts: React.FC = () => {
  return (
    <div className="w-[1200px] h-[420px] justify-between items-center inline-flex">
      <div className="flex-col justify-start items-start gap-6 inline-flex">
        <h2 className="w-[600px] text-[#271454] text-5xl font-bold font-helvetica">
          Many other products
        </h2>
        <p className="w-[554px] text-[#4f2a82] text-lg font-normal font-helvetica leading-[25.20px]">
          From mobile apps to web platforms and enterprise software, we deliver high-performance solutions that adapt to your unique needs. With a focus on quality and user experience, our products transform ideas into impactful digital tools.
        </p>
      </div>
      <div className="w-[469px] h-[420px] relative">
        <OtherProductContent />
        <OtherProductCard />
      </div>
    </div>
  )
}

export default OtherProducts
