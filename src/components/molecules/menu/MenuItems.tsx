'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import { menuItems } from '@/assets/data'
import Icon from '@/components/atoms/Icon'

const MenuItems: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const renderMenuItem = (item: { href: string; label: string }) => {
    const isActive =
      pathname === item.href || (item.href === '/' && pathname === '/')

    return (
      <Link
        key={item.href}
        href={item.href}
        className={`
          sm:px-1 sm:py-1 lg:px-3 lg:py-2 
          flex items-center rounded-full
          text-lg sm:text-xl lg:text-2xl 
          text-white font-poppins
          transition duration-200
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
        onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        "
      >
        <Icon icon={AiOutlineMenu} size={24} color="white" />
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex justify-end items-center h-7 sm:h-7 gap-3">
        {menuItems.map(renderMenuItem)}
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div
          className="
            lg:hidden 
            flex flex-col items-start 
            absolute top-24 right-4 
            bg-primary-default p-4 
            rounded-lg shadow-lg
            z-50
          "
        >
          {menuItems.map(renderMenuItem)}
        </div>
      )}
    </div>
  )
}

export default MenuItems
