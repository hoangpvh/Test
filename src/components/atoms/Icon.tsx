import { IconType } from 'react-icons'

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number
  color?: string
  icon: IconType
}

const Icon: React.FC<IconProps> = ({
  size = 24,
  color = 'white',
  icon: IconComponent,
  ...props
}) => <IconComponent size={size} color={color} {...props} />

export default Icon
