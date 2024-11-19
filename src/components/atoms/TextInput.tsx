import React, { useRef, useState } from 'react'

interface TextInputProps {
  placeholder: string
  className?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  className = '',
  onChange,
  value,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)
  const handleContainerClick = () => inputRef.current?.focus()

  return (
    <div
      className={`lg:h-15 h-13 pl-4 pr-25 py-3 lg:pl-5 lg:pr-30 lg:py-4 rounded-full flex items-center border-2 bg-primary-light ${className} ${
        isFocused
          ? 'border-primary-focus text-primary-focus'
          : 'border-white text-purple-light/50'
      }`}
      onClick={handleContainerClick}
    >
      <input
        ref={inputRef}
        type="text"
        value={value}
        placeholder={placeholder}
        className={`bg-transparent outline-none w-full ${
          isFocused ? 'text-primary-focus' : 'text-purple-light/50'
        }`}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  )
}

export default TextInput
