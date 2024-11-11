import React, { useRef } from 'react';

interface TextInputProps {
  placeholder: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  className = '',
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`pl-5 pr-[120px] py-4 bg-[#f0f1ff] rounded-full flex ${className}`}
      onClick={() => inputRef.current?.focus()}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        className="text-[#4b42ae]/50 text-xl font-normal leading-7 outline-none bg-transparent"
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
