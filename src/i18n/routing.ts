import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'ja'],
  defaultLocale: 'ja',
  localeDetection: false,
})

export type Locale = (typeof routing.locales)[number]
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)

export const getInitialLocale = (): string => {
  if (typeof window !== 'undefined') {
    const savedLocale = localStorage.getItem('preferredLanguage')
    if (savedLocale && routing.locales.includes(savedLocale as Locale)) {
      return savedLocale
    }
  }

  return 'ja'
}
