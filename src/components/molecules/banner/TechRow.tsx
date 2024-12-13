import Image from 'next/image'
interface LogoProps {
  name: string
  alt?: string
}

const TechLogo: React.FC<LogoProps> = ({ name, alt = 'Technology Logo' }) => (
  <div
    data-testid="tech-logo"
    className="w-10 h-10 p-1.5 sm:w-20 sm:h-20 sm:p-1 xl:w-30 xl:h-30 xl:p-2 
                  bg-white rounded sm:rounded-2xl lg:rounded-3xl
                  border border-neutral-border 
                  flex flex-col justify-center items-center gap-2.5"
  >
    <div className="w-7 h-7 sm:w-10 sm:h-10 xl:w-15 xl:h-15 relative">
      <Image
        src={`/images/${name}.svg`}
        alt={alt}
        width={60}
        height={60}
        className="object-contain"
      />
    </div>
  </div>
)

interface TechRowProps {
  logos: { name: string; alt?: string }[]
  className?: string
}

const TechRow: React.FC<TechRowProps> = ({ logos, className = '' }) => (
  <div
    data-testid="tech-row"
    className={`h-10 flex justify-between items-center -z-10 lg:mt-0 ${className}`}
  >
    {logos.map((logo, index) => (
      <TechLogo key={index} name={logo.name} alt={logo.alt} />
    ))}
  </div>
)

export default TechRow
