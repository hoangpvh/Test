import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <div className="items-center justify-start gap-3 inline-flex">
      <div className="relative">
        <div className="hidden sm:block lg:w-10 lg:h-10 sm:w-8 sm:h-8 relative">
          <Image
            src="/Logo.svg"
            alt="Desktop Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        <div className="block sm:hidden w-7 h-7 relative">
          <Image
            src="/Mobile Logo.svg"
            alt="Mobile Logo"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      </div>

      <div
        className="
        text-purple-darkest sm:text-white 
        text-22 sm:text-26 lg:text-32 
        font-bold font-seravek 
        uppercase
      "
      >
        Funcoding
      </div>
    </div>
  )
}

export default Logo
