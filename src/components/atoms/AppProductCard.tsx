import React from 'react';

const AppProductCard: React.FC = () => {
  return (
    <div className="w-[364px] h-[330px] relative bg-white rounded-2xl">
      {/* Header Section */}
      <div className="w-[322px] h-[81px] left-[21px] top-[64px] absolute bg-white rounded-md shadow border border-[#eff1f4]"></div>
      <div className="w-[62px] h-[26px] left-[273px] top-[67px] absolute bg-[#f0f4fa] rounded-lg"></div>
      <div className="left-[30px] top-[115px] absolute text-[#625e6f] text-[10px] font-normal font-['Inter'] leading-[14px]">
        Leads within
      </div>
      <div className="left-[114px] top-[115px] absolute">
        <span className="text-[#625e6f] text-[10px] font-normal font-['Inter'] leading-[14px]">
          Current job title in
        </span>
        <span className="text-lime-500 text-[10px] font-normal font-['Inter'] leading-[14px]">
          CEO +1
        </span>
      </div>
      <div className="left-[258px] top-[115px] absolute text-[#98a1b2] text-[10px] font-normal font-['Inter'] leading-[14px]">
        Company name
      </div>
      <div className="left-[299px] top-[73px] absolute text-[#6c6483] text-[10px] font-normal font-['Inter'] leading-[14px]">
        Apply
      </div>
      <div className="left-[240px] top-[72px] absolute text-[#6c6483] text-[10px] font-normal font-['Inter'] underline leading-[14px]">
        Clear
      </div>
      <div className="left-[31px] top-[72px] absolute text-[#33274b] text-sm font-medium font-['Inter'] leading-tight">
        Filters
      </div>
      <div className="left-[70px] top-[32px] absolute text-[#33274b] text-xs font-normal font-['Inter'] leading-none">
        3,446
      </div>
      <div className="left-[20px] top-[27px] absolute text-[#33274b] text-base font-medium font-['Inter'] leading-snug">
        Leads
      </div>

      {/* Divider */}
      <div className="w-[302px] h-[0px] left-[31px] top-[99px] absolute border border-[#f2f2f2]"></div>

      {/* Person Cards */}
      <div className="w-[322px] h-[38px] left-[21px] top-[150px] absolute">
        <div className="w-[322px] h-[38px] left-0 top-0 absolute bg-white rounded-md shadow border border-[#eff1f4]"></div>
        <div className="h-[22px] left-[8px] top-[8px] absolute justify-start items-center gap-2 inline-flex">
          <div className="w-3.5 h-3.5 p-px justify-center items-center flex">
            <img
              className="w-3 h-3"
              src="https://via.placeholder.com/12x12"
              alt="icon"
            />
          </div>
          <img
            className="w-[22px] h-[22px] rounded-full"
            src="https://via.placeholder.com/22x22"
            alt="profile"
          />
          <div className="text-[#625e6f] text-[10px] font-normal font-['Inter'] leading-[14px]">
            Jerome Bell
          </div>
        </div>
      </div>

      <div className="w-[322px] h-[38px] left-[21px] top-[193px] absolute">
        <div className="w-[322px] h-[38px] left-0 top-0 absolute bg-white rounded-md shadow border border-[#eff1f4]"></div>
        <div className="h-[22px] left-[8px] top-[8px] absolute justify-start items-center gap-2 inline-flex">
          <div className="w-3.5 h-3.5 p-px justify-center items-center flex">
            <img
              className="w-3 h-3"
              src="https://via.placeholder.com/12x12"
              alt="icon"
            />
          </div>
          <img
            className="w-[22px] h-[22px] rounded-full"
            src="https://via.placeholder.com/22x22"
            alt="profile"
          />
          <div className="text-[#625e6f] text-[10px] font-normal font-['Inter'] leading-[14px]">
            Floyd Miles
          </div>
        </div>
      </div>

      <div className="w-[322px] h-[38px] left-[21px] top-[236px] absolute">
        <div className="w-[322px] h-[38px] left-0 top-0 absolute bg-white rounded-md shadow border border-[#eff1f4]"></div>
        <div className="h-[22px] left-[8px] top-[8px] absolute justify-start items-center gap-2 inline-flex">
          <div className="w-3.5 h-3.5 p-px justify-center items-center flex">
            <img
              className="w-3 h-3"
              src="https://via.placeholder.com/12x12"
              alt="icon"
            />
          </div>
          <img
            className="w-[22px] h-[22px] rounded-full"
            src="https://via.placeholder.com/22x22"
            alt="profile"
          />
          <div className="text-[#625e6f] text-[10px] font-normal font-['Inter'] leading-[14px]">
            Darrell Steward
          </div>
        </div>
      </div>

      <div className="w-[322px] h-[38px] left-[21px] top-[279px] absolute">
        <div className="w-[322px] h-[38px] left-0 top-0 absolute bg-white rounded-md shadow border border-[#eff1f4]"></div>
        <div className="h-[22px] left-[8px] top-[8px] absolute justify-start items-center gap-2 inline-flex">
          <div className="w-3.5 h-3.5 p-px justify-center items-center flex">
            <img
              className="w-3 h-3"
              src="https://via.placeholder.com/12x12"
              alt="icon"
            />
          </div>
          <img
            className="w-[22px] h-[22px] rounded-full"
            src="https://via.placeholder.com/22x22"
            alt="profile"
          />
          <div className="text-[#625e6f] text-[10px] font-normal font-['Inter'] leading-[14px]">
            Annette Black
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppProductCard;
