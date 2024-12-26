import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const ContentSection: React.FC = () => {
  const t = useTranslations('banner')

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      data-testid="content-section"
      className="w-full h-209 lg:h-206 flex flex-col justify-start items-center lg:gap-10 gap-5 lg:animate-fade-in-top"
    >
      <div className="w-full mx-5 h-28 flex justify-center items-center">
        <div
          data-testid="banner-line"
          className="absolute w-54 lg:w-435 h-12 lg:h-24 xl:h-28 sm:h-16 border-l-4 border-primary-default [html[lang='en']_&]:lg:ml-75 [html[lang='ja']_&]:lg:ml-[380px] [html[lang='en']_&]:xl:ml-65 [html[lang='ja']_&]:xl:ml-[360px] [html[lang='en']_&]:sm:ml-28 [html[lang='ja']_&]:sm:ml-[180px] sm:mb-4 self-end -ml-30 xl:-mb-6 lg:-mb-4 mb-1 -z-100 bg-gradient-banner"
        />
        <div
          data-testid="heading-container"
          className="absolute text-center text-purple-dark text-4xl font-bold font-helvetica leading-15 w-full flex flex-col justify-center sm:flex-row
            [html[lang='en']_&]:sm:text-5xl [html[lang='ja']_&]:sm:text-4xl
            [html[lang='en']_&]:lg:text-[62px] [html[lang='ja']_&]:lg:text-[52px]
            [html[lang='en']_&]:xl:text-[90px] [html[lang='ja']_&]:xl:text-[80px]"
        >
          <span>{t('title')}</span>
          <span>&nbsp;{t('title2')}</span>
        </div>
      </div>
      <div
        data-testid="description-container"
        className="max-w-500 sm:max-w-824 lg:px-10 lg:max-w-1236 xl:max-w-1536 px-4 py-2.5 text-center text-purple-medium sm:leading-10 leading-18 text-sm lg:text-[26px] sm:text-22 font-normal font-helvetica lg:leading-42.67"
      >
        {t('description')}
      </div>
    </motion.div>
  )
}

export default ContentSection
