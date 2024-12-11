import Image from 'next/image'
import { useTranslations } from 'next-intl'

const AppProducts: React.FC = () => {
  const t = useTranslations('products')

  return (
    <div className="h-auto w-full xl:w-1200 gap-10 flex sm:flex-row flex-col justify-center xl:justify-between items-center">
      <div className="flex flex-col gap-6 xl:max-w-531 sm:max-w-332 lg:max-w-432 max-w-520">
        <h1 className="text-purple-darkest2 sm:text-5xl text-4xl font-bold font-helvetica">
          {t('app.title')}
        </h1>
        <p className="text-purple-darkest2Light text-sm sm:text-lg font-normal font-helvetica leading-tight sm:leading-25.20">
          {t('app.description')}
        </p>
      </div>
      <div className="w-342 h-355 sm:h-[335px] xl:h-[378px] sm:w-432 xl:w-532 relative">
        <picture className="relative block w-full h-full">
          <source
            media="(min-width: 1025px)"
            srcSet="/images/products/AppProducts.webp"
          />
          <source
            media="(min-width: 840px)"
            srcSet="/images/products/AppProductsTablet.webp"
          />
          <Image
            src="/images/products/AppProductsMobile.webp"
            alt={t('app.imageAlt')}
            fill
            quality={100}
            sizes="(max-width: 640px) 342px, (max-width: 1024px) 432px, 532px"
            style={{ objectFit: 'contain' }}
          />
        </picture>
      </div>
    </div>
  )
}

export default AppProducts
