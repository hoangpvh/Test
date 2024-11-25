const OtherProductCard: React.FC = () => {
  const details = [
    {
      group: [
        { label: 'Company', value: 'HubSpot' },
        { label: 'Job Tittle', value: 'CTO' }
      ]
    },
    {
      group: [
        { label: 'Location', value: 'Cambridge' },
        { label: 'Company Type', value: 'Public' }
      ]
    },
    {
      group: [
        { label: 'Seniority', value: 'Executive' },
        { label: 'Industry', value: 'Internet Software' }
      ]
    }
  ]

  return (
    <div className="w-[292px] h-[420px] left-[177px] top-0 absolute bg-white rounded-2xl">
      {/* Profile Header */}
      <div className="left-[30px] top-[30px] absolute justify-start items-center gap-3.5 inline-flex">
        <div className="w-[60px] h-[60px] relative">
          <div className="w-[60px] h-[60px] left-0 top-0 absolute bg-gradient-to-b from-[#f4f3f5] to-[#fdf2ec] rounded-full" />
          <img
            className="w-[60px] h-[60px] left-0 top-0 absolute rounded-[37.50px]"
            src="/Avatar 1.svg"
            alt="Profile avatar"
          />
        </div>
        <div className="flex-col justify-start items-start gap-1 inline-flex">
          <div className="text-[#36206b] text-base font-medium font-inter leading-snug">
            Dharmesh Shah
          </div>
          <div className="text-[#6c6483] text-xs font-normal font-inter leading-none">
            Product manager
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="left-[30px] top-[114px] absolute flex-col justify-start items-start gap-3.5 inline-flex">
        {details.map((section, index) => (
          <div key={index} className="flex-col justify-start items-start gap-2 flex">
            <div className="justify-start items-start gap-[69px] inline-flex">
              {section.group.map((item, idx) => (
                <div key={idx} className="flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="text-[#9491a1] text-xs font-normal font-inter leading-none">
                    {item.label}
                  </div>
                  <div className="text-[#271454] text-xs font-medium font-inter leading-none">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[232px] h-px bg-[#fcfcfc]" />
          </div>
        ))}
      </div>

      {/* Map Image */}
      <img
        className="w-[244px] h-24 left-[24px] top-[300px] absolute rounded-lg"
        src="/Map.svg"
        alt="Location map"
      />
      <div className="w-6 h-6 left-[134px] top-[320px] absolute" />
    </div>
  )
}

export default OtherProductCard
