'use client'
import Footer from '@/components/organisms/footer/Footer'
import Header from '@/components/organisms/header/Header'

interface MainTemplateProps {
  children: React.ReactNode
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default MainTemplate
