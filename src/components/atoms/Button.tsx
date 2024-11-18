'use client'
interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  leftIcon?: React.ReactNode
  title: string
  titleClassName?: string
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className = '',
  leftIcon,
  title,
  titleClassName = '',
}) => {
  return (
    <button
      className={`h-13 rounded-full shadow-primary hover:bg-primary-hover active:bg-primary-active transition-colors duration-200 ${className}`}
      onClick={onClick}
    >
      {leftIcon && (
        <div className="w-6 h-6 flex justify-center items-center">
          {leftIcon}
        </div>
      )}
      <span
        className={`text-center text-primary-light text-base sm:text-2xl font-normal font-['Helvetica'] leading-7 ${titleClassName}`}
      >
        {title}
      </span>
    </button>
  )
}

export default Button
