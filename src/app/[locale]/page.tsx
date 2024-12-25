'use client'

import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('@/components/organisms/banner/Banner'), {
  ssr: false,
})
const Products = dynamic(
  () => import('@/components/organisms/products/ProductSection'),
  {
    ssr: false,
  }
)
const ServicesSection = dynamic(
  () => import('@/components/organisms/servicess/ServicesSection'),
  {
    ssr: false,
  }
)
const Solutions = dynamic(
  () => import('@/components/organisms/solutions/SolutionSection'),
  {
    ssr: false,
  }
)

function HomePage() {
  return (
    <div className="w-full flex flex-col items-center justify-start overflow-hidden">
      <Banner />
      <Solutions />
      <ServicesSection />
      <Products />
    </div>
  )
}

export default HomePage
