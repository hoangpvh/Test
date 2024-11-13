const ContentSection: React.FC = () => {
  return (
    <div className="w-full h-[209px] lg:h-[206px] lg:px-[200px] flex flex-col justify-start items-center lg:gap-10 gap-5">
      <div className="lg:w-[1340px] w-full mx-[20px] h-28 flex justify-center items-center">
        <div className="absolute w-[216px] lg:w-[435px] h-12 lg:h-28 bg-gradient-to-r from-[#d2d5ff] to-[#f0f1ff] border-l-4 border-[#565add] lg:ml-[228px] self-end ml-[-120px] lg:mb-[-4px] mb-1" />
        <div className="absolute text-center text-[#2b1c50] text-4xl lg:text-[90px] font-bold font-['Helvetica'] lg:leading-[72px] leading-[60px] w-[335px] lg:w-full">
          Code with Joy. Innovate with Fun!
        </div>
      </div>
      <div className="h-[74px] lg:px-[166px] px-4 py-2.5 grow shrink basis-0 text-center text-[#3d2e7c] leading-[18px] text-sm lg:text-[28px] font-normal font-['Helvetica'] lg:leading-[42.67px]">
        With a commitment to quality and collaboration, we transform ideas into
        powerful, scalable solutions designed to propel your business forward.
      </div>
    </div>
  );
};

export default ContentSection;
