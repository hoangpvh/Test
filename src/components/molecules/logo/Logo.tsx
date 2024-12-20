import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.reload()
  }

  return (
    <Link
      href="/"
      className="items-center justify-start gap-3 inline-flex"
      onClick={handleClick}
    >
      <div className="relative">
        <div className="hidden sm:block lg:w-10 lg:h-10 sm:w-8 sm:h-8 relative">
          <Image
            src="/images/Logo.svg"
            alt="Funcoding Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        <div className="block sm:hidden w-7 h-7 relative">
          <Image
            src="/images/Mobile Logo.svg"
            alt="Funcoding Logo"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      </div>

      <div
        className="
        text-purple-darkest sm:text-white 
        text-22 sm:text-28 lg:text-32
        font-bold font-seravek 
        uppercase
      "
      >
        Funcoding Inc.
      </div>
    </Link>
  )
}

export default Logo
