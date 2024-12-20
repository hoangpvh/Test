import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import React, { useCallback, useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'

import Icon from '@/components/atoms/Icon'

const HEADER_OFFSET = 80

const MenuItems: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('/')
  const [isScrolling, setIsScrolling] = useState(false)
  const t = useTranslations('menu')
  const router = useRouter()
  const pathname = usePathname()
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)

  const menuItems = [
    { key: 'home', href: '/', label: t('home'), scrollTo: 'top' },
    {
      key: 'products',
      href: '#products',
      label: t('products'),
      scrollTo: 'products',
    },
    {
      key: 'contact',
      href: '#contact',
      label: t('contact'),
      scrollTo: 'contact',
    },
  ]

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev)

  const handleLanguageButtonClick = () => {
    setIsLanguageDropdownOpen((prev) => !prev)
  }

  const handleLanguageSelect = (locale: string) => {
    const currentLocale = pathname?.split('/')[1]
    const newPath = pathname?.replace(`/${currentLocale}`, `/${locale}`)
    router.push(newPath ?? '/')
    setIsLanguageDropdownOpen(false)
    localStorage.setItem('preferredLanguage', locale)
  }

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    setIsMenuOpen(false)
    setActiveSection(href)
    setIsScrolling(true)

    if (!href.startsWith('#')) {
      window.location.href = href
      return
    }

    if (href === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      setTimeout(() => setIsScrolling(false), 1000)
      return
    }

    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setTimeout(() => setIsScrolling(false), 1000)
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
  useEffect(() => {
    const handleScrollEvent = () => {
      if (isScrolling) return

      const sections = menuItems
        .map((item) => ({
          id: item.href.replace('#', ''),
          href: item.href,
          element:
            item.href === '/'
              ? null
              : document.getElementById(item.href.replace('#', '')),
        }))
        .filter((item) => item.element !== null)

      if (window.scrollY < 100) {
        setActiveSection('/')
        return
      }

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          const sectionTop = rect.top + window.scrollY
          const sectionHeight = rect.height
          const viewportMiddle = window.scrollY + window.innerHeight / 2

          if (
            viewportMiddle >= sectionTop &&
            viewportMiddle <= sectionTop + sectionHeight
          ) {
            setActiveSection(section.href)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScrollEvent)
    return () => window.removeEventListener('scroll', handleScrollEvent)
  }, [isScrolling])

  useEffect(() => {
    const savedLocale = localStorage.getItem('preferredLanguage')
    if (savedLocale) {
      const currentLocale = pathname?.split('/')[1]
      if (savedLocale !== currentLocale) {
        const newPath = pathname?.replace(
          `/${currentLocale}`,
          `/${savedLocale}`
        )
        router.push(newPath ?? '/')
      }
    } else {
      const currentLocale = pathname?.split('/')[1]
      if (currentLocale !== 'ja') {
        const newPath = pathname?.replace(`/${currentLocale}`, '/ja')
        router.push(newPath ?? '/')
      }
      localStorage.setItem('preferredLanguage', 'ja')
    }
  }, [])

  const renderLanguageButton = () => {
    const currentLocale = pathname?.split('/')[1]
    const languageLabel = currentLocale === 'en' ? t('english') : t('japanese')
    const flagSrc =
      currentLocale === 'en'
        ? '/images/united kingdom.svg'
        : '/images/japan.svg'

    return (
      <div className="relative hidden">
        <button
          onClick={handleLanguageButtonClick}
          className="h-10 px-3 py-1 bg-[#f0f1ff]/10 rounded-full border border-[#f0f1ff]/50 justify-start items-center gap-2 inline-flex"
        >
          <div className="justify-center items-center gap-2 flex">
            <img
              src={flagSrc}
              alt={`${currentLocale} flag`}
              className="w-6 h-6 object-cover rounded-full"
            />
            <div className="hidden xl:block text-xl font-normal font-poppins leading-relaxed text-white">
              {languageLabel}
            </div>
            <div className="w-6 h-6 relative justify-center items-center flex">
              <Icon icon={IoIosArrowDown} size={20} color="white" />
            </div>
          </div>
        </button>

        {isLanguageDropdownOpen && (
          <div className="absolute right-0 px-2 py-3 flex flex-col gap-2 w-40 bg-white rounded-2xl shadow-lg overflow-hidden z-50">
            <button
              onClick={() => handleLanguageSelect('en')}
              className={`w-full px-4 py-2 text-left flex items-center gap-2 rounded-lg
                ${
                  currentLocale === 'en'
                    ? 'bg-[#F7F8FA] text-[#18203c]'
                    : 'bg-white text-[#666f8d]'
                }`}
            >
              <img
                src="/images/united kingdom.svg"
                alt="English flag"
                className="w-6 h-6 object-cover rounded-full"
              />
              <span>English</span>
            </button>
            <button
              onClick={() => handleLanguageSelect('ja')}
              className={`w-full px-4 py-2 text-left flex items-center gap-2 rounded-lg
                ${
                  currentLocale === 'ja'
                    ? 'bg-[#F7F8FA] text-[#18203c]'
                    : 'bg-white text-[#666f8d]'
                }`}
            >
              <img
                src="/images/japan.svg"
                alt="Japanese flag"
                className="w-6 h-6 object-cover rounded-full"
              />
              <span>日本語</span>
            </button>
          </div>
        )}
      </div>
    )
  }
  const renderMenuItem = (item: { href: string; label: string }) => {
    const isActive = activeSection === item.href

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={(e) => handleScroll(e, item.href)}
        className={`
          px-2 py-3
          lg:px-4 lg:py-3
          flex items-center rounded-full
          text-base lg:text-lg
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

      <nav className="hidden sm:flex justify-end items-center h-7 sm:h-7 gap-4">
        {menuItems.map(renderMenuItem)}
        {renderLanguageButton()}
      </nav>

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
          {renderLanguageButton()}
        </div>
      )}
    </div>
  )
}

export default MenuItems
