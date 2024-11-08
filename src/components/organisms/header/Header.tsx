import HeaderLeft from '@/components/molecules/headers/HeaderLeft';
import TopMenu from '@/components/molecules/menu/TopMenu';

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-6 z-50 w-[1200px] h-[88px] px-10 py-5 bg-[#565add] rounded-[999px] shadow justify-between items-end inline-flex">
      <HeaderLeft />
      <TopMenu />
    </nav>
  );
};

export default NavBar;
