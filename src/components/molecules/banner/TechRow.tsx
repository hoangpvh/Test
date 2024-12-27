import { motion } from 'framer-motion'
import Image from 'next/image'
interface LogoProps {
  name: string
  alt?: string
}

const Logo: React.FC<LogoProps> = ({ name, alt = 'Technology Logo' }) => (
  <div
    data-testid="tech-logo"
    className="w-10 h-10 p-1.5 sm:p-4 sm:w-20 sm:h-20 lg:w-30 lg:h-30 lg:p-2 
              bg-white rounded-lg sm:rounded-2xl lg:rounded-3xl
              border border-neutral-border 
              flex flex-col justify-center items-center gap-2.5"
  >
    <Image
      src={`/images/${name}.svg`}
      alt={alt}
      width={60}
      height={60}
      className="object-contain"
    />
  </div>
)

interface TechRowProps {
  logos: { name: string; alt?: string }[]
  className?: string
}

const TechRow: React.FC<TechRowProps> = ({ logos, className = '' }) => {
  return (
    <div
      data-testid="tech-row"
      className={`flex justify-between items-center -z-10 ${className}`}
    >
      <div className="w-full flex justify-between items-center lg:hidden">
        {logos.map((logo, index) => (
          <Logo key={index} name={logo.name} alt={logo.alt} />
        ))}
      </div>

      <div className="hidden w-full lg:flex justify-between items-center">
        {logos.map((logo, index) => {
          let initialX = '0'
          let initialY = '0'

          if (logo.name === 'Visual Studio Code') {
            initialX = index === 0 ? '-100vw' : '100vw'
            initialY = '-100vh'
          } else if (logo.name === 'Figma Logomark') {
            initialX = index === 0 ? '-100vw' : '100vw'
            initialY = '-100vh'
          } else if (logo.name === 'Shopify Logomark') {
            initialX = index === 0 ? '-110vw' : '110vw'
            initialY = '-30vh'
          } else if (logo.name === 'Wordpress Logomark') {
            initialX = index === 0 ? '-110vw' : '110vw'
            initialY = '-30vh'
          } else if (logo.name === 'Notion Logomark') {
            initialX = index === 0 ? '-100vw' : '100vw'
            initialY = '100vh'
          } else if (logo.name === 'Webflow Logomark') {
            initialX = index === 0 ? '-100vw' : '100vw'
            initialY = '100vh'
          }

          return (
            <motion.div
              key={index}
              initial={{
                x: initialX,
                y: initialY,
                opacity: 0,
              }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              transition={{ type: 'spring', stiffness: 10, damping: 5 }}
            >
              <Logo name={logo.name} alt={logo.alt} />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default TechRow
