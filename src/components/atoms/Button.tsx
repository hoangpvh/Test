'use client'
interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string
  icon?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className = '',
  label,
  icon,
}) => {
  return (
    <button
      className={`h-[52px] rounded-full shadow hover:bg-[#6469ff] active:bg-[#292db8] transition-colors duration-200 ${className}`}
      style={{ boxShadow: '0 0 0 4px rgba(85, 89, 221, 0.4)' }}
      onClick={onClick}
    >
      {icon && (
        <div className="w-6 h-6 flex justify-center items-center">{icon}</div>
      )}
      <span className="text-center text-[#f0f1ff] text-base lg:text-2xl font-normal font-['Helvetica'] leading-7">
        {label}
      </span>
    </button>
  )
}

export default Button
