import Logo from '@/components/atoms/Logo'

const HeaderLeft: React.FC = () => {
  return (
    <div className="justify-start items-center gap-3 lg:gap-2 flex">
      <Logo />
      <div className="text-[#1b0448] lg:text-white text-[22px] lg:text-[32px] font-bold font-seravek uppercase">
        Funcoding
      </div>
    </div>
  )
}

export default HeaderLeft
