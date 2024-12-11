import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ToastContainer } from 'react-toastify'

import MainTemplate from '@/components/templates/MainTemplate'
import { Locale, routing } from '@/i18n/routing'

export const metadata: Metadata = {
  title: 'Funcoding Inc',
  description:
    'Frontend, backend, infrastructure, mobile apps, AI, etc. We have a broad skill sets to make various type of services.',
  icons: {
    icon: '/images/Mobile Logo.svg',
    shortcut: '/images/Mobile Logo.svg',
    apple: '/images/Mobile Logo.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/Mobile Logo.svg',
    },
  },
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { locale: Locale }
}>) {
  const { locale } = await params
  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <MainTemplate>{children}</MainTemplate>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            style={{ zIndex: 9999, top: '124px' }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
