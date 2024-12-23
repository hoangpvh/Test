import React, { useRef, useState } from 'react'

interface TextInputProps {
  placeholder: string
  className?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  id?: string
  name?: string
  autoComplete?: string
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  className = '',
  onChange,
  value,
  id,
  name,
  autoComplete,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)
  const handleContainerClick = () => {
    if (inputRef.current && typeof inputRef.current.focus === 'function') {
      inputRef.current.focus()
    }
  }

  return (
    <div
      className={`h-12 pl-5 lg:pr-30 py-2 rounded-full flex items-center bg-secondary ${className}`}
      onClick={handleContainerClick}
    >
      <input
        ref={inputRef}
        type="text"
        value={value}
        id={id}
        name={name}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={`bg-transparent outline-none w-full ${
          isFocused ? 'text-[#B8C5C6]' : 'text-[#B8C5C6]'
        }`}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  )
}

export default TextInput
