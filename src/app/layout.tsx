import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'

import MainTemplate from '@/components/templates/MainTemplate'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap"
          rel="stylesheet"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap"
          />
        </noscript>
      </head>
      <body>
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
      </body>
    </html>
  )
}
