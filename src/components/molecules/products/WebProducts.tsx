import WebProductCard from '@/components/atoms/WebProductCard'
import WebProductContent from '@/components/atoms/WebProductContent'

const WebProducts: React.FC = () => {
  return (
    <div className="h-auto w-full xl:w-[1200px] justify-center xl:justify-between items-center gap-10 flex flex-col-reverse sm:flex-row">
      <div className="sm:w-[412px] w-[343px] sm:h-[388px] h-[373px] relative">
        <WebProductContent />
        <WebProductCard />
      </div>
      <div className="flex flex-col gap-6 xl:max-w-[600px] sm:max-w-[332px] lg:max-w-[464px] max-w-[520px]">
        <h2 className="text-[#271454] sm:text-5xl text-4xl font-bold font-helvetica">
          Our Website Products
        </h2>
        <p className=" text-[#4f2a82] text-sm sm:text-lg font-normal font-helvetica leading-tight sm:leading-[25.20px]">
          We create websites that are secure, fast, and tailored to meet your
          business needs. From e-commerce platforms to content-rich sites, we
          deliver experiences that make lasting impressions.
        </p>
      </div>
    </div>
  )
}

export default WebProducts
