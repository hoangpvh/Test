const WebProductCard: React.FC = () => {
  return (
    <div className="absolute left-[167px] bottom-[18px] w-[176.50px] h-56 bg-white rounded-xl shadow">
      <div className="left-[13.50px] top-[22px] absolute text-[#231645] text-xs font-medium font-['Inter'] leading-none">
        DATA POINTS
      </div>
      <div className="left-[10.50px] top-[56px] absolute flex-col justify-start items-start gap-[7px] inline-flex">
        <div className="pl-[7px] pr-1.5 pt-1 pb-[3px] bg-white rounded-xl border border-[#e7e4f3] justify-center items-center gap-2.5 inline-flex">
          <div className="text-[#271454] text-xs font-normal font-['Inter'] leading-none">
            Open to work
          </div>
        </div>
        <div className="pl-[7px] pr-1.5 pt-1 pb-[3px] bg-white rounded-xl border border-[#e7e4f3] justify-center items-center gap-2.5 inline-flex">
          <div className="text-[#271454] text-xs font-normal font-['Inter'] leading-none">
            Employee summary
          </div>
        </div>
        <div className="pl-[7px] pr-1.5 pt-1 pb-[3px] bg-white rounded-xl border border-[#e7e4f3] justify-center items-center gap-2.5 inline-flex">
          <div className="text-[#271454] text-xs font-normal font-['Inter'] leading-none">
            Time in current role
          </div>
        </div>
        <div className="pl-[7px] pr-1.5 pt-1 pb-[3px] bg-white rounded-xl border border-[#e7e4f3] justify-center items-center gap-2.5 inline-flex">
          <div className="text-[#271454] text-xs font-normal font-['Inter'] leading-none">
            Time at current company
          </div>
        </div>
        <div className="pl-[7px] pr-1.5 pt-1 pb-[3px] bg-white rounded-xl shadow border border-[#e7e4f3] justify-center items-center gap-2.5 inline-flex">
          <div className="text-[#271454] text-xs font-normal font-['Inter'] leading-none">
            Work history
          </div>
        </div>
      </div>
      <div className="w-[184px] h-[187px] left-[112px] top-[-71px] absolute">
        <div className="w-[125px] h-[125px] left-0 top-0 absolute bg-[#b861fe] rounded-full blur-3xl" />
        <div className="w-[140px] h-[140px] left-[44px] top-[47px] absolute bg-[#efb4ff] rounded-full blur-3xl" />
      </div>
    </div>
  )
}
export default WebProductCard
