'use client'
const ContentSection: React.FC = () => {
  return (
    <div className="w-full h-[209px] 2xl:h-[206px] flex flex-col justify-start items-center lg:gap-10 gap-5">
      <div className="w-full mx-[20px] h-28 flex justify-center items-center">
        <div className="absolute w-[216px] lg:w-[435px] h-12 lg:h-28 bg-gradient-to-r from-[#d2d5ff] to-[#f0f1ff] border-l-4 border-[#565add] 2xl:ml-[228px] self-end ml-[-120px] lg:mb-[-4px] mb-1 -z-100 md:ml-[-320px] md:-mb-1 lg:ml-[300px]" />
        <div className="absolute text-center text-[#2b1c50] text-4xl 2xl:text-[90px] md:text-[60px] font-bold font-['Helvetica'] md:leading-[72px] leading-[60px] w-full flex flex-col justify-center lg:flex-row">
          <span>Code with Joy.</span>
          <span>&nbsp;Innovate with Fun!</span>
        </div>
      </div>
      <div className="h-[74px] max-w-[500px] lg:px-[60px] sm:max-w-[824px] 2xl:px-[166px] 2xl:max-w-[1536px] sm:px-[20%] px-4 py-2.5 grow shrink basis-0 text-center text-[#3d2e7c] leading-[18px] text-sm lg:text-[28px] sm:text-lg font-normal font-['Helvetica'] lg:leading-[42.67px]">
        With a commitment to quality and collaboration, we transform ideas into
        powerful, scalable solutions designed to propel your business forward.
      </div>
    </div>
  )
}

export default ContentSection
