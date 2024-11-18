import { IconType } from 'react-icons'

interface IconProps {
  size?: number
  color?: string
  icon: IconType
}

const Icon: React.FC<IconProps> = ({
  size = 24,
  color = 'white',
  icon: IconComponent,
}) => {
  return <IconComponent size={size} color={color} />
}

export default Icon
