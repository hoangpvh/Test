import { motion } from 'framer-motion'

import { solutions } from '@/assets/data'
import { useTranslations } from 'next-intl'
import Button from '@/components/atoms/Button'
import SolutionCard from '@/components/molecules/solutions/SolutionCard'

const SolutionSection = () => {
  const t = useTranslations()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  }

  const BaseContent = () => (
    <div
      className="flex-col xl:flex-row xl:justify-between sm:items-center 
                    items-center inline-flex xl:gap-0 gap-10 lg:hidden"
    >
      <div className="flex-col justify-start items-start xl:gap-5 gap-4 inline-flex">
        <div
          className="text-secondary-dark-2 text-lg sm:text-lg 
                       font-semibold font-helvetica leading-normal"
        >
          {t('solutions.howCanWeHelp')}
        </div>

        <div className="flex-col justify-start items-start xl:gap-30 flex gap-5">
          <div
            className="xl:w-100 text-white sm:text-20 text-4xl xl:text-16 
                         font-bold font-helvetica capitalize leading-46.80 
                         xl:leading-83.20 sm:leading-26"
          >
            {t('solutions.title')}
          </div>

          <div className="flex flex-col justify-start items-start gap-5 xl:gap-15 sm:gap-8">
            <div
              className="xl:w-100 text-text-neutral text-sm sm:text-22 xl:text-lg 
                           font-normal font-helvetica leading-snug xl:leading-28.80"
            >
                              {t('solutions.subtitle')}
            </div>

            <div className="justify-center items-center inline-flex w-full [html[lang='en']_&]:xl:w-162 [html[lang='ja']_&]:xl:w-[168px]">
              <Button
                                  title={t('solutions.viewMore')}
                onClick={() => console.log('View!')}
                className="w-full px-6 py-3 lg:py-3 sm:py-4 bg-primary-default"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex-col justify-start items-start xl:gap-6 gap-5 
                     inline-flex xl:w-[880px] lg:w-[900px]"
      >
        <div
          className="justify-center xl:justify-end items-start xl:gap-6 
                       gap-5 inline-flex flex-wrap"
        >
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              solutionKey={solution.key}
              icon={solution.icon}
            />
          ))}
        </div>
      </div>
    </div>
  )

  const AnimatedContent = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="flex-col xl:flex-row xl:justify-between sm:items-center 
                 items-center xl:gap-0 gap-10 hidden lg:flex"
    >
      <motion.div
        variants={itemVariants}
        className="flex-col justify-start items-start xl:gap-5 gap-4 inline-flex"
      >
        <motion.div
          variants={itemVariants}
          className="text-secondary-dark-2 text-lg sm:text-lg 
                   font-semibold font-helvetica leading-normal"
        >
          {t('solutions.howCanWeHelp')}
        </motion.div>

        <div className="flex-col justify-start items-start xl:gap-30 flex gap-5">
          <motion.div
            variants={itemVariants}
            className="xl:w-100 text-white sm:text-20 text-4xl xl:text-16 
                     font-bold font-helvetica capitalize leading-46.80 
                     xl:leading-83.20 sm:leading-26"
          >
                            {t('solutions.title')}

          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-start items-start gap-5 xl:gap-15 sm:gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="xl:w-100 text-text-neutral text-sm sm:text-22 xl:text-lg 
                       font-normal font-helvetica leading-snug xl:leading-28.80"
            >
                              {t('solutions.subtitle')}

            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="justify-center items-center inline-flex xl:w-162 w-full"
            >
              <Button
                                  title={t('solutions.viewMore')}

                onClick={() => console.log('View!')}
                className="w-full px-6 py-3 lg:py-3 sm:py-4 bg-primary-default"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="flex-col justify-start items-start xl:gap-6 gap-5 
                 inline-flex xl:w-[880px] lg:w-[900px]"
      >
        <div
          className="justify-center xl:justify-end items-start xl:gap-6 
                      gap-5 inline-flex flex-wrap"
        >
          {solutions.map((solution, index) => (
            <SolutionCard
            key={index}
            solutionKey={solution.key}
            icon={solution.icon}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <section
      id="solutions"
      className="w-full h-auto px-4 py-10 xl:h-200 1920:px-90 xl:px-50 sm:px-15 
                 sm:py-25 xl:py-148 bg-primary-dark mt-79 sm:mt-39 xl:mt-38 
                 justify-start lg:justify-center lg:items-center inline-flex lg:px-15"
    >
      <BaseContent />
      <AnimatedContent />
    </section>
  )
}

export default SolutionSection
