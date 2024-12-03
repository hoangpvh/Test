import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'

import MainTemplate from '@/components/templates/MainTemplate'

export const metadata: Metadata = {
  title: 'Funcoding',
  description: 'Funcoding',
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
