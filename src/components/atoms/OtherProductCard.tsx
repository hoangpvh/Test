const OtherProductCard: React.FC = () => {
  return (
    <div className="absolute left-[129px] top-[0] w-[214px] h-[350px] bg-white rounded-2xl">
      <img
        className="w-[439px] h-[173px] top-[177.39px] absolute rounded-lg"
        src="/Map.svg"
      />
      <div className="w-6 h-6 left-[116px] top-[252.39px] absolute" />
      <div className="left-[12.55px] top-[13.39px] absolute justify-start items-start gap-3.5 inline-flex">
        <div className="w-10 h-10 relative">
          <div className="w-10 h-10 left-0 top-0 absolute bg-gradient-to-b from-[#f4f3f5] to-[#fdf2ec] rounded-full" />
          <img
            className="w-10 h-10 left-0 top-0 absolute rounded-[37.50px]"
            src="/Avatar 1.svg"
          />
        </div>
        <div className="flex-col justify-start items-start gap-1 inline-flex">
          <div className="text-[#36206b] text-base font-medium font-['Inter'] leading-snug">
            Dharmesh Shah
          </div>
          <div className="text-[#6c6483] text-xs font-normal font-['Inter'] leading-none">
            Product manager
          </div>
        </div>
      </div>
      <div className="left-[13px] top-[72.39px] absolute flex-col justify-start items-start gap-5 inline-flex">
        <div className="flex-col justify-start items-start gap-0.5 flex">
          <div className="text-[#9491a1] text-xs font-normal font-['Inter'] leading-none">
            Company
          </div>
          <div className="text-[#271454] text-xs font-medium font-['Inter'] leading-none">
            HubSpot
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-0.5 flex">
          <div className="text-[#9491a1] text-xs font-normal font-['Inter'] leading-none">
            Job Tittle
          </div>
          <div className="text-[#271454] text-xs font-medium font-['Inter'] leading-none">
            CTO
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProductCard;
