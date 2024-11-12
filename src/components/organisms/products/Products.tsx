import AppProductCard from '@/components/atoms/AppProductCard';
import AppProducts from '@/components/molecules/products/AppProducts';

const Products: React.FC = () => {
  return (
    <div className="h-[1506px] px-[120px] py-20 bg-gradient-to-b from-[#eef3fe] via-[#f3ebfb] to-[#fdefed] flex-col justify-start items-center gap-20 inline-flex">
      <div className="w-[1200px] justify-between items-center inline-flex">
        <AppProducts />
        <AppProductCard />
      </div>
    </div>
  );
};

export default Products;
