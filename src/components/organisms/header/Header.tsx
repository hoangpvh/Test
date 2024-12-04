import { motion } from 'framer-motion'

import Logo from '@/components/molecules/logo/Logo'
import MenuItems from '@/components/molecules/menu/MenuItems'

const Header: React.FC = () => {
  return (
    <div
      role="banner"
      className="w-full h-25 sm:h-70 lg:h-22 flex flex-col items-center sm:mt-10"
    >
      <div
        data-testid="decorative-circle"
        className="absolute w-75 h-75 sm:hidden -mt-30 bg-primary-default/20 rounded-full blur-banner z-10"
      ></div>
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed w-full sm:w-[calc(100%-2rem)] 
        lg:max-w-1200 pb-4 pt-10 px-6 
        sm:p-5 h-25 sm:h-22 lg:px-10
        bg-neutral-background sm:bg-primary-default 
        rounded-bl-2xl rounded-br-2xl sm:rounded-full 
        flex justify-between items-center 
        z-50 lg:animate-fade-in-top"
      >
        <Logo />
        <MenuItems />
      </motion.nav>
    </div>
  )
}

export default Header
