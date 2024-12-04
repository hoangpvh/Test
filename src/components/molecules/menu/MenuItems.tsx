import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import { menuItems } from '@/assets/data'
import Icon from '@/components/atoms/Icon'

const MenuItems: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('/')
  const pathname = usePathname()

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev)

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault() // Prevent default link behavior
    setIsMenuOpen(false)
    setActiveSection(href)

    if (href === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      return
    }

    const element = document.getElementById(href.replace('/', ''))
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.querySelector('[data-testid="mobile-menu"]')
      const menuButton = document.querySelector('[data-testid="menu-button"]')

      if (
        isMenuOpen &&
        mobileMenu &&
        !mobileMenu.contains(event.target as Node) &&
        menuButton &&
        !menuButton.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  const renderMenuItem = (item: { href: string; label: string }) => {
    const isActive = activeSection === item.href

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={(e) => handleScroll(e, item.href)}
        className={`
          sm:px-4 sm:py-2 
          lg:px-5 lg:py-3 
          flex items-center rounded-full
          text-lg lg:text-xl 
          text-white font-poppins
          transition-all duration-200
          ${isActive ? 'bg-primary-light/20 font-semibold' : 'font-medium'}
        `}
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div className="flex items-center">
      {/* Mobile Menu Button */}
      <button
        data-testid="menu-button"
        onClick={handleMenuToggle}
        className="
          sm:hidden 
          cursor-pointer 
          bg-primary-default 
          rounded-lg 
          border border-neutral-overlay 
          shadow-menu
          justify-center items-center 
          gap-1 
          inline-flex 
          w-10 h-10
          transition duration-300
        "
      >
        <Icon icon={AiOutlineMenu} size={24} color="white" />
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex justify-end items-center h-7 sm:h-7 gap-4">
        {menuItems.map(renderMenuItem)}
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div
          data-testid="mobile-menu"
          className="
            lg:hidden 
            flex flex-col items-start 
            absolute top-[100px] right-4 
            bg-primary-default p-4 
            rounded-lg shadow-lg
            z-50
            gap-2
          "
        >
          {menuItems.map(renderMenuItem)}
        </div>
      )}
    </div>
  )
}

export default MenuItems
