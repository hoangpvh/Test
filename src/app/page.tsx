'use client'
import Banner from '@/components/organisms/banner/Banner'
import Header from '@/components/organisms/header/Header'
import Products from '@/components/organisms/products/Products'
import ServicesSection from '@/components/organisms/servicess/ServicesSection'
import Solutions from '@/components/organisms/solutions/Solution'

function HomePage() {
  return (
    <div className="w-full flex flex-col items-center justify-start  overflow-hidden">
      <Header />
      <Banner />
      <Solutions />
      <ServicesSection />
      {/* <Products /> */}
      {/* Render the page-specific component here
      <Component {...pageProps} /> */}
    </div>
  )
}

export default HomePage
