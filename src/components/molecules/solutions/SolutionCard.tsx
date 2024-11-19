import { IconType } from 'react-icons'

import Icon from '@/components/atoms/Icon'

interface SolutionCardProps {
  title: string
  description: string
  icon: IconType
  iconColor?: string
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  icon,
  iconColor = '#FFFFFF',
}) => {
  return (
    <div className="w-343 sm:w-110 lg:w-90 lg:h-60 sm:h-65 h-45 p-6 bg-secondary rounded-2xl flex flex-col justify-start items-start gap-2.5">
      <div className="flex flex-col justify-start items-start gap-6 w-full">
        <div className="flex justify-start items-start gap-5 lg:gap-6 w-full">
          <div className="relative w-14 h-14">
            <div className="absolute top-0 left-0 w-14 h-14 bg-secondary-light rounded-full"></div>
            <div className="absolute top-3.5 left-3.5 flex justify-center items-center">
              <Icon icon={icon} size={28} color={iconColor} />{' '}
            </div>
          </div>
          <div className="flex-grow text-white text-base lg:text-lg font-bold leading-7 lg:leading-loose font-['Helvetica']">
            {title}
          </div>
        </div>
        <div className="text-white text-sm sm:text-lg lg:text-lg font-normal leading-25.20 lg:leading-loose font-['Helvetica']">
          {description}
        </div>
      </div>
    </div>
  )
}

export default SolutionCard
