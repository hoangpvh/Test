const ContentSection: React.FC = () => {
  return (
    <div className="self-stretch h-[206px] px-[200px] flex-col justify-center items-center gap-10">
      <div className="w-[1340px] h-28 flex justify-center items-center">
        <div className="w-[435px] h-28 bg-gradient-to-r from-[#d2d5ff] to-[#f0f1ff] border-l-4 border-[#565add] ml-[228px]" />
        <div className="absolute text-center text-[#2b1c50] text-[90px] font-bold font-['Helvetica'] leading-[72px]">
          Code with Joy. Innovate with Fun!
        </div>
      </div>
      <div className="text-center text-[#3d2e7c] text-[28px] font-normal font-['Helvetica'] leading-[42.67px]">
        With a commitment to quality and collaboration, we transform ideas into
        powerful,
        <br />
        scalable solutions designed to propel your business forward.
      </div>
    </div>
  );
};

export default ContentSection;
