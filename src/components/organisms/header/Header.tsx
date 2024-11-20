import Logo from '@/components/molecules/logo/Logo'
import MenuItems from '@/components/molecules/menu/MenuItems'

const Header: React.FC = () => {
  return (
    <div
      role="banner"
      className="w-full h-25 sm:h-70 lg:h-22 bg-neutral-background sm:bg-white flex flex-col items-center sm:mt-10"
    >
      <div
        data-testid="decorative-circle"
        className="absolute w-75 h-75 sm:hidden -mt-30 bg-primary-default/20 rounded-full blur-banner z-10"
      ></div>
      <nav
        className="fixed left-1/2 -translate-x-1/2 w-full sm:max-w-[calc(100%-160px)] 
        lg:w-1200 pb-4 pt-10 px-6 
        sm:px-5 h-25 sm:h-70 lg:h-22 sm:py-5 
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
