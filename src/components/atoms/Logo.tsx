'use client'
import Image from 'next/image'
const Logo: React.FC = () => {
  return (
    <div className="relative">
      {/* Logo cho desktop */}
      <div className="hidden lg:block w-10 h-10 relative">
        <Image src="/Logo.svg" alt="Desktop Logo" width={40} height={40} />
      </div>

      {/* Logo cho mobile */}
      <div className="block lg:hidden w-7 h-7 relative">
        <Image
          src="/Mobile Logo.svg"
          alt="Mobile Logo"
          width={24}
          height={24}
        />
      </div>
    </div>
  )
}

export default Logo
