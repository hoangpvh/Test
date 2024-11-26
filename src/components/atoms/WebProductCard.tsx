const WebProductCard: React.FC = () => {
  return (
    <div className="w-[176.50px] sm:w-[212px] h-52 lg:left-[200px] left-[167px] top-[131px] absolute bg-white rounded-2xl shadow overflow-hidden">
      <div className="left-[13.50px] top-[22px] sm:left-[23px] absolute text-[#231645] font-medium text-xs font-inter leading-none">
        DATA POINTS
      </div>

      <div className="left-[10.5px] sm:left-[22px] top-[56px] absolute flex-col justify-start items-start gap-[7px] inline-flex">
        {[
          'Open to work',
          'Employee summary',
          'Time in current role',
          'Time at current company',
          'Work history',
        ].map((item, index) => (
          <div
            key={index}
            className="pl-[7px] pr-1.5 pt-1 pb-[3px] bg-white rounded-xl border border-[#e7e4f3] justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-[#271454] text-xs font-normal font-inter leading-none">
              {item}
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Background */}
      <div className="w-[184px] h-[187px] left-[112px] top-[-71px] absolute">
        <div className="w-[125px] h-[125px] left-0 top-0 absolute bg-[#b861fe] rounded-full blur-3xl" />
        <div className="w-[140px] h-[140px] left-[44px] top-[47px] absolute bg-[#efb4ff] rounded-full blur-3xl" />
      </div>
    </div>
  )
}

export default WebProductCard
