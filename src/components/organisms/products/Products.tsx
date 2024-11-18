import AppProducts from '@/components/molecules/products/AppProducts'
import OtherProducts from '@/components/molecules/products/OtherProducts'
import WebProducts from '@/components/molecules/products/WebProducts'

const Products: React.FC = () => {
  return (
    <div className="h-[2115.61px] lg:h-[1506px] px-0 lg:px-[120px] py-20 bg-gradient-to-b from-[#eef3fe] via-[#f3ebfb] to-[#fdefed] flex-col justify-start items-center gap-20 inline-flex">
      <AppProducts />
      <WebProducts />
      <OtherProducts />
    </div>
  )
}

export default Products
