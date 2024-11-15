'use client'
import React, { useRef, useState } from 'react'

interface TextInputProps {
  placeholder: string
  className?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  className = '',
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div
      className={`lg:h-[60px] h-[52px] pl-4 pr-[100px] py-3 lg:pl-5 lg:pr-[120px] lg:py-4 rounded-full flex items-center ${className} ${isFocused ? 'border-[#6569ff] text-[#6569ff]' : 'border-[#fff] text-[#4b42ae]/50'}`}
      style={{
        backgroundColor: isFocused ? '#e0e7ff' : '#f0f1ff',
        borderWidth: '2px',
      }}
      onClick={() => inputRef.current?.focus()}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        className={`bg-transparent outline-none ${isFocused ? 'text-[#6569ff]' : 'text-[#4b42ae]/50'}`}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  )
}

export default TextInput
