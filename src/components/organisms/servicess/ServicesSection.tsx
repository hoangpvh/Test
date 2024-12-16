import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import { services1, services2 } from '@/assets/data'
import ServiceRow from '@/components/molecules/servicess/ServiceRow'

const ServicesSection: React.FC = () => {
  const [width, setWidth] = useState(0)
  const carousel1 = useRef<HTMLDivElement>(null)
  const carousel2 = useRef<HTMLDivElement>(null)

  const repeatedServices1 = Array(10).fill(services1).flat()
  const repeatedServices2 = Array(10).fill(services2).flat()

  useEffect(() => {
    if (carousel1.current && carousel2.current) {
      const width1 =
        carousel1.current.scrollWidth - carousel1.current.offsetWidth
      const width2 =
        carousel2.current.scrollWidth - carousel2.current.offsetWidth
      setWidth(Math.max(width1, width2))
    }
  }, [])

  const BaseContent = () => (
    <div className="flex-col justify-center items-center gap-5 sm:gap-15 inline-flex lg:hidden">
      <div className="flex flex-col justify-center items-center sm:flex-row gap-5">
        {services2.map((service, index) => (
          <ServiceRow
            key={`mobile-service2-${index}`}
            label={service.label}
            gradientFrom={service.gradientFrom}
            gradientTo={service.gradientTo}
            borderColor={service.borderColor}
          />
        ))}
      </div>

      <div className="flex flex-col justify-center items-center sm:flex-row gap-5">
        {services1.map((service, index) => (
          <ServiceRow
            key={`mobile-service1-${index}`}
            label={service.label}
            gradientFrom={service.gradientFrom}
            gradientTo={service.gradientTo}
            borderColor={service.borderColor}
          />
        ))}
      </div>
    </div>
  )

  const AnimatedContent = () => (
    <div className="hidden lg:block w-full">
      <div className="overflow-hidden relative w-full">
        <motion.div
          ref={carousel1}
          className="flex justify-start items-center gap-15"
          animate={{
            x: [0, -width],
          }}
          transition={{
            x: {
              repeat: Infinity,
              duration: 70,
              ease: 'linear',
            },
          }}
          initial={{ x: 0 }}
        >
          {repeatedServices1.map((service, index) => (
            <ServiceRow
              key={`service1-${index}`}
              label={service.label}
              gradientFrom={service.gradientFrom}
              gradientTo={service.gradientTo}
              borderColor={service.borderColor}
            />
          ))}
        </motion.div>
      </div>

      <div className="overflow-hidden relative w-full mt-5 sm:mt-15">
        <motion.div
          ref={carousel2}
          className="flex justify-start items-center gap-15"
          animate={{
            x: [0, -width],
          }}
          transition={{
            x: {
              repeat: Infinity,
              duration: 68,
              ease: 'linear',
            },
          }}
          initial={{ x: 0 }}
        >
          {repeatedServices2.map((service, index) => (
            <ServiceRow
              key={`service2-${index}`}
              label={service.label}
              gradientFrom={service.gradientFrom}
              gradientTo={service.gradientTo}
              borderColor={service.borderColor}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )

  return (
    <div className="w-full px-4 sm:px-0 py-10 xl:py-50 sm:py-40 flex flex-col justify-start items-center gap-5 sm:gap-15 overflow-hidden">
      <BaseContent />
      <AnimatedContent />
    </div>
  )
}

export default ServicesSection
