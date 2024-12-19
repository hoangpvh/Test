import Image from 'next/image'
import { useTranslations } from 'next-intl'

const WebProducts: React.FC = () => {
  const t = useTranslations('products')

  return (
    <div className="h-auto w-full xl:w-1200 justify-center xl:justify-between items-center gap-10 flex flex-col-reverse sm:flex-row">
      <div className="sm:w-412 w-343 sm:h-388 h-373 relative">
        <picture className="relative block w-full h-full">
          <source
            media="(min-width: 1025px)"
            srcSet="/images/products/WebProducts.webp"
          />
          <source
            media="(min-width: 840px)"
            srcSet="/images/products/WebProductsTablet.webp"
          />
          <Image
            src="/images/products/WebProductsMobile.webp"
            alt="Web Products by Funcoding"
            fill
            unoptimized
            quality={100}
            sizes="(max-width: 840px) 343px, (max-width: 1025px) 412px, 412px"
            style={{ objectFit: 'contain' }}
          />
        </picture>
      </div>
      <div className="flex flex-col gap-6 xl:max-w-600 sm:max-w-332 lg:max-w-464 max-w-520">
        <h2 className="text-purple-darkest2 sm:text-5xl text-4xl font-bold font-helvetica">
          {t('web.title')}
        </h2>
        <p className="text-purple-darkest2Light text-sm sm:text-lg font-normal font-helvetica leading-tight sm:leading-25.20">
          {t('web.description')}
        </p>
      </div>
    </div>
  )
}

export default WebProducts
