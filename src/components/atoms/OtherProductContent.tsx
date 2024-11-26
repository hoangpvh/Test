const OtherProductContent: React.FC = () => {
  return (
    <div className="absolute top-[70px] w-[304px] lg:h-[280px] h-[280px] sm:h-[240px] bg-white rounded-2xl flex">
      {/* Left column dots */}
      <div className="flex flex-col gap-3 pl-[21px] pt-[21px]">
        <div className="w-3 h-3 bg-lime-500 rounded-[10px]" />
        <div className="w-3 h-3 bg-[#fcfcfc] rounded-[10px]" />
        <div className="w-3 h-3 bg-[#fcfcfc] rounded-[10px]" />
        <div className="w-3 h-3 bg-[#ffc762] rounded-[10px] mt-[18px]" />
        <div className="w-3 h-3 bg-[#fcfcfc] rounded-[10px]" />
        <div className="w-3 h-3 bg-[#fcfcfc] rounded-[10px]" />
        <div className="w-3 h-3 bg-[#94d0fe] rounded-[10px] mt-[18px]" />
        <div className="w-3 h-3 bg-[#fcfcfc] rounded-[10px]" />
        <div className="w-3 h-3 bg-[#fcfcfc] rounded-[10px]" />
      </div>
      {/* Right bars */}
      <div className="flex flex-col gap-3 pl-[14px] pt-[21px]">
        <div className="w-[169px] h-3 bg-lime-500 rounded-[10px]" />
        <div className="w-[169px] h-3 bg-[#fcfcfc] rounded-[10px]" />
        <div className="w-[169px] h-3 bg-[#fcfcfc] rounded-[10px]" />
        <div className="w-[169px] h-3 bg-[#ffc762] rounded-[10px] mt-[18px]" />
        <div className="w-[169px] h-3 bg-[#fcfcfc] rounded-[10px]" />
        <div className="w-[169px] h-3 bg-[#fcfcfc] rounded-[10px]" />
        <div className="w-[169px] h-3 bg-[#94d0fe] rounded-[10px] mt-[18px]" />
        <div className="w-[169px] h-3 bg-[#fcfcfc] rounded-[10px]" />
        <div className="w-[169px] h-3 bg-[#fcfcfc] rounded-[10px]" />
      </div>
    </div>
  )
}

export default OtherProductContent
