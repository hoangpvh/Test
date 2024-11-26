export default function OtherProductCard() {
  return (
    <div className="sm:mt-2 ml-[129px] sm:ml-[177px] sm:w-[250px] xl:w-[292px] w-[214px] h-[350px] sm:h-[355px] lg:h-[420px] bg-white z-10 rounded-2xl flex flex-col">
      {/* Profile Header */}
      <div className="px-4 sm:px-2 lg:px-[30px] pt-4 sm:pt-3 lg:pt-[30px] flex items-center gap-3.5 ">
        <div className="relative sm:w-[60px] sm:h-[60px] w-[40px] h-[40px]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f4f3f5] to-[#fdf2ec] rounded-full" />
          <img
            className="absolute sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] inset-0 rounded-full"
            src="/Avatar 1.svg"
            alt="Profile avatar"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[#36206b] text-base font-medium font-['Inter'] leading-snug">
            Dharmesh Shah
          </div>
          <div className="text-[#6c6483] text-xs font-normal font-['Inter']">
            Product manager
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className=" sm:px-2 lg:px-[30px] sm:pt-[24px] px-4 pt-4 flex flex-col lg:gap-3.5 sm:gap-2 gap-3.5">
        {/* Company & Job Title */}
        <div className="flex flex-col gap-2">
          <div className="flex sm:flex-row flex-col justify-start sm:gap-[69px] gap-5">
            <div className="flex flex-col gap-0.5">
              <div className="text-[#9491a1] text-xs font-normal font-['Inter']">
                Company
              </div>
              <div className="text-[#271454] text-xs font-medium font-['Inter']">
                HubSpot
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="text-[#9491a1] text-xs font-normal font-['Inter']">
                Job Title
              </div>
              <div className="text-[#271454] text-xs font-medium font-['Inter']">
                CTO
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-[#fcfcfc]" />
        </div>

        {/* Location & Company Type */}
        <div className="sm:flex flex-col gap-2 hidden">
          <div className="flex justify-start gap-[59px]">
            <div className="flex flex-col gap-0.5">
              <div className="text-[#9491a1] text-xs font-normal font-['Inter']">
                Location
              </div>
              <div className="text-[#271454] text-xs font-medium font-['Inter']">
                Cambridge
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="text-[#9491a1] text-xs font-normal font-['Inter']">
                Company Type
              </div>
              <div className="text-[#271454] text-xs font-medium font-['Inter']">
                Public
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-[#fcfcfc]" />
        </div>

        {/* Seniority & Industry */}
        <div className="hidden sm:flex flex-col gap-2">
          <div className="flex justify-start gap-[67px]">
            <div className="flex flex-col gap-0.5">
              <div className="text-[#9491a1] text-xs font-normal font-['Inter']">
                Seniority
              </div>
              <div className="text-[#271454] text-xs font-medium font-['Inter']">
                Executive
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="text-[#9491a1] text-xs font-normal font-['Inter']">
                Industry
              </div>
              <div className="text-[#271454] text-xs font-medium font-['Inter']">
                Internet Software
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-[#fcfcfc]" />
        </div>
      </div>

      {/* Map Image */}
      <div className="xl:p-6 sm:px-2 sm:pt-0 px-0 pt-1.5">
        <img
          className="w-[234px] sm:h-24 h-[173px] rounded-lg"
          src="/Map.svg"
          alt="Location map"
        />
      </div>
    </div>
  )
}
