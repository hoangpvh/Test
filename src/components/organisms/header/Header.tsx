'use client'
import HeaderLeft from '@/components/molecules/headers/HeaderLeft'
import TopMenu from '@/components/molecules/menu/TopMenu'

const Header: React.FC = () => {
  return (
    <div className="relative lg:h-[148px] lg:px-40 lg:pt-[60px] bg-[#fcfcfc] flex flex-col items-center">
      <div className="absolute w-[297px] h-[297px] top-[-120px] lg:bg-[#fcfcfc] bg-[#565add]/20 rounded-full blur-[80px] -z-50"></div>
      <nav className="fixed w-full top-0 lg:top-[60px] pb-4 pt-10 h-[100px] px-6 lg:h-[88px] lg:max-w-[1200px] lg:px-10 lg:py-5 lg:bg-[#565add] lg:rounded-full rounded-bl-2xl rounded-br-2xl border-b flex justify-between items-center z-50 bg-[#fcfcfc]">
        <HeaderLeft />
        <TopMenu />
      </nav>
    </div>
  )
}

export default Header
