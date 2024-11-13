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
      className={`lg:h-[60px] h-[52px] pl-4 pr-[100px] py-3 lg:pl-5 lg:pr-[120px] lg:py-4 bg-[#f0f1ff] rounded-full flex ${className}`}
      onClick={() => inputRef.current?.focus()}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        className="text-[#4b42ae]/50 text-base lg:text-xl font-normal leading-7 outline-none bg-transparent"
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
