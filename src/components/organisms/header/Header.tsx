import Logo from '@/components/molecules/logo/Logo'
import MenuItems from '@/components/molecules/menu/MenuItems'

const Header: React.FC = () => {
  return (
    <div className="w-full sm:h-130 bg-neutral-background flex flex-col items-center">
      <div
        className="w-75 h-75 sm:hidden
        -mt-30
        bg-primary-default/20 
        rounded-full 
        blur-banner
        z-10"
      ></div>
      <nav
        className="fixed w-full sm:min-w-sm sm:max-w-780 
        lg:max-w-header-lg top-0 sm:top-60 pb-4 pt-10 px-6 
        sm:px-5 h-[100px]sm:h-[70px] lg:h-[88px] sm:py-5 
        bg-neutral-background sm:bg-primary-default 
        rounded-bl-2xl rounded-br-2xl sm:rounded-full 
        border-b sm:border-none flex justify-between items-center 
        z-50"
      >
        <Logo />
        <MenuItems />
      </nav>
    </div>
  )
}

export default Header
