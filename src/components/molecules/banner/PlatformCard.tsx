import React from 'react'

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
    <div
      className={`h-[40px] flex justify-between items-center z-[-10] lg:mt-0 ${className}`}
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
