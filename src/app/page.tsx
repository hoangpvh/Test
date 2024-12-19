'use client'
import Banner from '@/components/organisms/banner/Banner'
import Products from '@/components/organisms/products/ProductSection'
import ServicesSection from '@/components/organisms/servicess/ServicesSection'
import Solutions from '@/components/organisms/solutions/SolutionSection'

function HomePage() {
  return (
    <div className="w-full flex flex-col items-center justify-start overflow-hidden">
      {/* <Banner /> */}
      <Solutions />
      <ServicesSection />
      <Products />
    </div>
  )
}

export default HomePage
