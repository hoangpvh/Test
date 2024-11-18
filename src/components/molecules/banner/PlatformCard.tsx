import Image from 'next/image'

// Platform Props
interface PlatformProps {
  iconName: string
  altText?: string
}

// Platform Component
const Platform: React.FC<PlatformProps> = ({
  iconName,
  altText = 'Platform Icon',
}) => {
  return (
    <div
      className="
      w-10 h-10 p-1.5 
      lg:w-30 lg:h-30 lg:p-2 
      bg-white rounded lg:rounded-3xl
      border border-neutral-border 
      flex flex-col justify-center items-center gap-2.5
    "
    >
      <div
        className="
        w-7 h-7 
        lg:w-15 lg:h-15 
        relative
      "
      >
        <Image
          src={`/${iconName}.svg`}
          alt={altText}
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
    </div>
  )
}

// PlatformCard Props
interface PlatformCardProps {
  platforms: { iconName: string; altText?: string }[]
  className?: string
}

// PlatformCard Component
const PlatformCard: React.FC<PlatformCardProps> = ({
  platforms,
  className = '',
}) => {
  return (
    <div
      className={`
      h-10 
      flex justify-between items-center 
      -z-10 lg:mt-0 
      ${className}
    `}
    >
      {platforms.map((platform, index) => (
        <Platform
          key={index}
          iconName={platform.iconName}
          altText={platform.altText}
        />
      ))}
    </div>
  )
}

export default PlatformCard
