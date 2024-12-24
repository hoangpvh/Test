'use client'

import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('@/components/organisms/banner/Banner'), {
  loading: () => <div>Loading...</div>,
})
const Products = dynamic(
  () => import('@/components/organisms/products/ProductSection')
)
const ServicesSection = dynamic(
  () => import('@/components/organisms/servicess/ServicesSection')
)
const Solutions = dynamic(
  () => import('@/components/organisms/solutions/SolutionSection')
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
