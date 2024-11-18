import Platform from '@/components/atoms/Platform'
interface PlatformCardProps {
  platforms: { iconName: string; altText?: string }[]
  className?: string
}

const PlatformCard: React.FC<PlatformCardProps> = ({
  platforms,
  className,
}) => {
  return (
    <div className={` flex justify-between items-center z-[-10] ${className}`}>
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
