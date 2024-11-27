import AppProductCard from '@/components/atoms/AppProductCard'
import AppProductContent from '@/components/atoms/AppProductContent'

const AppProducts: React.FC = () => {
  return (
    <div className="h-auto w-full xl:w-1200 sm:h-378 gap-10 flex sm:flex-row flex-col justify-center xl:justify-between items-center">
      <div className="flex flex-col gap-6 xl:max-w-531 sm:max-w-332 lg:max-w-432 max-w-520">
        <h1 className="text-purple-darkest2 sm:text-5xl text-4xl font-bold font-helvetica">
          Our Mobile App Products
        </h1>
        <p className="text-purple-darkest2Light text-sm sm:text-lg font-normal font-helvetica leading-tight sm:leading-25.20">
          Our mobile app solutions combine sleek design with reliable
          performance to engage users and support business growth. We develop
          customized apps across all platforms, ensuring security, scalability,
          and a seamless user experience.
        </p>
      </div>
      <div className="w-342 h-330 sm:w-432 xl:w-532 xl:h-378 relative">
        <AppProductContent className="absolute left-0 top-0" />
        <AppProductCard className="absolute right-0 top-113 sm:left-25 lg:left-147 sm:top-53 xl:top-70" />
      </div>
    </div>
  )
}

export default AppProducts
