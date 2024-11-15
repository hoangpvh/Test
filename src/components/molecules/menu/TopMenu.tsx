'use client'

import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import Icon from '@/components/atoms/Icon'
import MenuItem from '@/components/atoms/MenuItems'

const TopMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="flex items-center">
      <div
        className="lg:hidden cursor-pointer bg-[#565add] rounded-lg border border-[#e0daf3] justify-center items-center gap-[6.40px] inline-flex w-10 h-10"
        style={{ boxShadow: '0 0 0 1px rgba(85, 89, 221, 0.1)' }}
        onClick={toggleMenu}
      >
        <Icon icon={AiOutlineMenu} size={24} color="#fff" />
      </div>

      <nav className="hidden lg:flex justify-end items-center h-7 gap-3 lg:h-12 lg:gap-4">
        <MenuItem href="/" label="Home" />
        <MenuItem href="/products" label="Our Products" />
        <MenuItem href="/blogs" label="Blogs" />
        <MenuItem href="/contact" label="Contact Us" />
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-start absolute top-24 right-4 bg-[#565add] p-4 rounded-lg shadow-lg">
          <MenuItem href="/" label="Home" />
          <MenuItem href="/products" label="Our Products" />
          <MenuItem href="/blogs" label="Blogs" />
          <MenuItem href="/contact" label="Contact Us" />
        </div>
      )}
    </div>
  )
}

export default TopMenu
