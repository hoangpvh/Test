'use client'
import Footer from '@/components/organisms/footer/Footer'
import Header from '@/components/organisms/header/Header'

interface MainTemplateProps {
  children: React.ReactNode
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <div data-testid="main-template">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainTemplate
