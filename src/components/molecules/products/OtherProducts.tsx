import Image from 'next/image'
import { useTranslations } from 'next-intl'

const OtherProducts: React.FC = () => {
  const t = useTranslations('products')

  return (
    <div className="w-full xl:w-1200 gap-10 h-auto flex justify-center sm:flex-row flex-col xl:justify-between items-center">
      <div className="flex flex-col gap-6 xl:max-w-600 sm:max-w-332 lg:max-w-464 max-w-520">
        <h2 className="text-purple-darkest2 text-4xl sm:text-5xl font-bold font-helvetica">
          {t('other.title')}
        </h2>
        <p className="text-purple-darkest2Light text-sm sm:text-lg font-normal font-helvetica leading-25.20">
          {t('other.description')}
        </p>
      </div>
      <div className="relative sm:w-469 sm:h-355 xl:h-420 w-343 h-350 flex">
        <picture className="relative block w-full h-full">
          <source
            media="(min-width: 1025px)"
            srcSet="/images/products/OtherProducts.webp"
          />
          <source
            media="(min-width: 840px)"
            srcSet="/images/products/OtherProductsTablet.webp"
          />
          <Image
            src="/images/products/OtherProductsMobile.webp"
            alt="Other Products by Funcoding"
            fill
            unoptimized
            quality={100}
            sizes="(max-width: 840px) 343px, (max-width: 1025px) 469px, 469px"
            style={{ objectFit: 'contain' }}
          />
        </picture>
      </div>
    </div>
  )
}

export default OtherProducts
