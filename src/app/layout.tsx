import '@/styles/globals.css'

import type { Metadata } from 'next'

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
      </body>
    </html>
  )
}
