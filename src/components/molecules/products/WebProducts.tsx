import Image from 'next/image'

import { useResponsiveImage } from '@/hooks/useResponsiveImage'

const WebProducts: React.FC = () => {
  const currentImage = useResponsiveImage({
    mobile: '/images/products/WebProductsMobile.png',
    tablet: '/images/products/WebProductsTablet.png',
    desktop: '/images/products/WebProducts.png',
  })

  return (
    <div className="h-auto w-full xl:w-1200 justify-center xl:justify-between items-center gap-10 flex flex-col-reverse sm:flex-row">
      <div className="sm:w-412 w-343 sm:h-388 h-373 relative">
        <Image
          src={currentImage}
          alt="Web Products"
          fill
          quality={100}
          unoptimized
          sizes="(max-width: 840px) 343px,
                 (max-width: 1025px) 412px,
                 412px"
          style={{
            objectFit: 'contain',
            width: '100%',
            height: '100%',
          }}
          priority
        />
      </div>
      <div className="flex flex-col gap-6 xl:max-w-600 sm:max-w-332 lg:max-w-464 max-w-520">
        <h2 className="text-purple-darkest2 sm:text-5xl text-4xl font-bold font-helvetica">
          Our Website Products
        </h2>
        <p className="text-purple-darkest2Light text-sm sm:text-lg font-normal font-helvetica leading-tight sm:leading-25.20">
          We create websites that are secure, fast, and tailored to meet your
          business needs. From e-commerce platforms to content-rich sites, we
          deliver experiences that make lasting impressions.
        </p>
      </div>
    </div>
  )
}

export default WebProducts
