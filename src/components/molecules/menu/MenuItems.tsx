import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import { menuItems } from '@/assets/data'
import Icon from '@/components/atoms/Icon'

interface MenuItem {
  key: string
  href: string
  label: string
  scrollTo: string
}

const HEADER_OFFSET = 80

const MenuItems: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('/#top')

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matchingItem = menuItems.find(
            (item) => item.scrollTo === entry.target.id
          )
          if (matchingItem) {
            setActiveSection(matchingItem.href)
          }
        }
      })
    }, options)

    menuItems.forEach((item) => {
      const element = document.getElementById(item.scrollTo)
      if (element) {
        observer.observe(element)
      }
    })

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('/#top')
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      menuItems.forEach((item) => {
        const element = document.getElementById(item.scrollTo)
        if (element) {
          observer.unobserve(element)
        }
      })
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev)

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    setIsMenuOpen(false)
    setActiveSection(href)

    if (!href.startsWith('#')) {
      window.location.href = href
      return
    }

    if (href === '/#top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      return
    }

    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition =
        elementPosition + window.pageYOffset - HEADER_OFFSET

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

  const renderMenuItem = useCallback(
    (item: MenuItem) => {
      const isActive = activeSection === item.href

      return (
        <Link
          key={item.key}
          href={item.href}
          onClick={(e) => handleScroll(e, item.href)}
          className={`
          px-4 py-3
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
    },
    [activeSection]
  )

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
        <span className="sr-only">Open Menu</span>
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
