import Logo from '@/components/atoms/Logo';

const HeaderLeft: React.FC = () => {
  return (
    <div className="justify-start items-center gap-3 flex">
      <Logo />
      <div className="text-white text-[32px] font-bold font-seravek uppercase">
        Funcoding
      </div>
    </div>
  );
};

export default HeaderLeft;
