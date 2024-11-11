import HeaderLeft from '@/components/molecules/headers/HeaderLeft';
import TopMenu from '@/components/molecules/menu/TopMenu';

const NavBar: React.FC = () => {
  return (
    <div className="w-full h-[148px] px-40 pt-[60px] flex-col justify-center items-center inline-flex">
      <nav className="fixed top-[60px] z-50 w-[1200px] h-[88px] px-10 py-5 bg-[#565add] rounded-[999px] shadow justify-between inline-flex">
        <HeaderLeft />
        <TopMenu />
      </nav>
    </div>
  );
};

export default NavBar;
