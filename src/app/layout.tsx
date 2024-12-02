import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'

import MainTemplate from '@/components/templates/MainTemplate'

export const metadata: Metadata = {
  title: 'Funcoding',
  description: '',
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
          style={{ zIndex: 9999, top: '140px' }}
        />
      </body>
    </html>
  )
}
