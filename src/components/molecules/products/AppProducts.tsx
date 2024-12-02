import Image from 'next/image'

import { useResponsiveImage } from '@/hooks/useResponsiveImage'

const AppProducts: React.FC = () => {
  const currentImage = useResponsiveImage({
    mobile: '/images/products/AppProductsMobile.png',
    tablet: '/images/products/AppProductsTablet.png',
    desktop: '/images/products/AppProducts.png',
  })

  return (
    <div
      className="h-auto w-full xl:w-1200 gap-10 flex sm:flex-row flex-col justify-center xl:justify-between items-center"
      data-testid="app-products-container"
    >
      <div
        className="flex flex-col gap-6 xl:max-w-531 sm:max-w-332 lg:max-w-432 max-w-520"
        data-testid="text-container"
      >
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
      <div
        className="w-342 h-355 sm:h-[335px] xl:h-[378px] sm:w-432 xl:w-532 relative"
        data-testid="image-container"
      >
        <Image
          src={currentImage}
          alt="App Products"
          fill
          quality={100}
          unoptimized
          sizes="(max-width: 840px) 342px,
                 (max-width: 1025px) 432px,
                 532px"
          style={{
            objectFit: 'contain',
            width: '100%',
            height: '100%',
          }}
          priority
        />
      </div>
    </div>
  )
}

export default AppProducts
