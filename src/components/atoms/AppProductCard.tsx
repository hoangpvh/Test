const AppProductCard: React.FC = () => {
  return (
    <div className="w-[225.34px] h-[242px] bg-white rounded-2xl shadow border border-[#eff1f4] absolute -bottom-[25px] right-0">
      <div className="pl-3 pr-5 py-2 left-[89px] top-[11px] absolute bg-white rounded-lg shadow flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="w-[30px] h-[30px] bg-lime-50 rounded-[999px] justify-center items-center flex">
            <img
              className="w-[30px] h-[30px] rounded-[980px]"
              src="/Avatar 5.svg"
            />
          </div>
          <div className="flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="text-[#33274b] text-xs font-normal font-inter leading-none">
              Chris Wall
            </div>
            <div className="text-[#33274b] text-[9px] font-normal font-inter leading-3">
              VP Sales
            </div>
          </div>
        </div>
      </div>
      <div className="left-[16px] top-[59px] absolute text-[#231645] text-[10px] font-normal font-inter leading-[14px]">
        First Name
      </div>
      <div className="w-[112.54px] h-[26px] left-[15.54px] top-[77px] absolute">
        <div className="w-[112.54px] h-[26px] left-0 top-0 absolute bg-white rounded shadow border border-lime-50" />
        <div className="left-[5.85px] top-[5px] absolute text-[#9491a1] text-xs font-normal font-inter leading-none">
          Darrel
        </div>
      </div>
      <div className="left-[16px] top-[115px] absolute text-[#231645] text-[10px] font-normal font-inter leading-[14px]">
        Email
      </div>
      <div className="w-[170px] h-[26px] left-[15.54px] top-[133px] absolute">
        <div className="w-[170px] h-[26px] left-0 top-0 absolute bg-white rounded shadow border border-lime-50" />
        <div className="left-[8px] top-[5px] absolute text-[#9491a1] text-xs font-normal font-inter leading-none">
          darrelstewar@gmail.com
        </div>
      </div>
      <div className="w-4 h-4 p-[1.33px] left-[317px] top-[138px] absolute justify-center items-center inline-flex">
        <div className="w-[13.33px] h-[13.33px] relative"></div>
      </div>
      <div className="w-36 h-[38px] px-[17px] py-2 left-[15px] top-[182px] absolute bg-lime-500 rounded-lg justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-base font-normal font-inter leading-snug">
          Save Prospect
        </div>
      </div>
    </div>
  );
};

export default AppProductCard;
