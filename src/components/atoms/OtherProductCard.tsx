export default function OtherProductCard() {
  return (
    <div className="ml-[177px] w-[292px] h-auto bg-white z-10 rounded-2xl flex flex-col">
      {/* Profile Header */}
      <div className="px-[30px] pt-[30px] flex items-center gap-3.5">
        <div className="relative w-[60px] h-[60px]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f4f3f5] to-[#fdf2ec] rounded-full" />
          <img
            className="absolute w-[60px] h-[60px] inset-0 rounded-full"
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
      <div className="px-[30px] pt-[24px] flex flex-col gap-3.5">
        {/* Company & Job Title */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-start gap-[69px]">
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
        <div className="flex flex-col gap-2">
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
        <div className="flex flex-col gap-2">
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
      <div className="px-6 pt-[24px]">
        <img
          className="w-[234px] h-24 rounded-lg"
          src="/Map.svg"
          alt="Location map"
        />
      </div>
    </div>
  )
}
