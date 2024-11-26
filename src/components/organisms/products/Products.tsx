import AppProducts from '@/components/molecules/products/AppProducts'
import OtherProducts from '@/components/molecules/products/OtherProducts'
import WebProducts from '@/components/molecules/products/WebProducts'

const Products: React.FC = () => {
  return (
    <div className="w-full h-auto px-4 sm:px-10 lg:px-15 xl:px-[120px] py-20 bg-gradient-to-b from-[#eef3fe] via-[#f3ebfb] to-[#fdefed] flex flex-col justify-start items-center gap-20">
      <AppProducts />
      <WebProducts />
      <OtherProducts />
    </div>
  )
}

export default Products
