import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { IconType } from 'react-icons'

import Icon from '@/components/atoms/Icon'

interface SolutionCardProps {
  solutionKey: string
  icon: IconType
  iconColor?: string
  index?: number
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  solutionKey,
  icon,
  iconColor = '#FFFFFF',
  index = 0,
}) => {
  const t = useTranslations('solutions')
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: index * 0.1,
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 + index * 0.1,
      },
    },
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
        delay: 0.3 + index * 0.1,
      },
    },
  }

  const BaseCard = () => (
    <div
      className="w-343 sm:w-110 xl:w-90 xl:h-60 sm:h-65 h-52 p-6 
                  bg-secondary rounded-2xl flex flex-col justify-start items-start gap-2.5 lg:hidden"
    >
      <div className="flex flex-col justify-start items-start gap-6 w-full">
        <div className="flex justify-start items-start gap-5 xl:gap-6 w-full">
          <div className="relative w-14 h-14">
            <div className="absolute top-0 left-0 w-14 h-14 bg-secondary-light rounded-full" />
            <div className="absolute top-3.5 left-3.5 flex justify-center items-center">
              <Icon
                data-testid="icon"
                icon={icon}
                size={28}
                color={iconColor}
              />
            </div>
          </div>
          <div
            className="flex-grow text-white text-base sm:text-22 xl:text-lg 
                       font-bold leading-7 sm:leading-10 xl:leading-loose font-helvetica"
          >
            {t(`${solutionKey}.title`)}
          </div>
        </div>
        <div
          className="text-white text-sm sm:text-xl xl:text-lg 
                     font-normal leading-25.20 sm:leading-9 xl:leading-loose font-helvetica"
        >
          {t(`${solutionKey}.description`)}
        </div>
      </div>
    </div>
  )

  const AnimatedCard = () => (
    <motion.div
      data-testid="solution-card"
      className="w-343 sm:w-110 xl:w-90 xl:h-60 sm:h-65 h-52 p-6 
                bg-secondary rounded-2xl flex-col justify-start items-start gap-2.5
                hidden lg:flex"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex flex-col justify-start items-start gap-6 w-full">
        <div className="flex justify-start items-start gap-5 xl:gap-6 w-full">
          <motion.div className="relative w-14 h-14" variants={iconVariants}>
            <div className="absolute top-0 left-0 w-14 h-14 bg-secondary-light rounded-full" />
            <motion.div
              className="absolute top-3.5 left-3.5 flex justify-center items-center"
              whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            >
              <Icon icon={icon} size={28} color={iconColor} />
            </motion.div>
          </motion.div>

          <motion.div
            variants={contentVariants}
            className="flex-grow text-white text-base sm:text-22 xl:text-lg 
                     font-bold leading-7 sm:leading-10 xl:leading-loose font-helvetica"
          >
            {t(`${solutionKey}.title`)}
          </motion.div>
        </div>

        <motion.div
          variants={contentVariants}
          className="text-white text-sm sm:text-xl xl:text-lg 
                   font-normal leading-25.20 sm:leading-9 xl:leading-loose font-helvetica"
        >
          {t(`${solutionKey}.description`)}
        </motion.div>
      </div>
    </motion.div>
  )

  return (
    <>
      <BaseCard />
      <AnimatedCard />
    </>
  )
}

export default SolutionCard
