import { LuSearch } from 'react-icons/lu'
const WebProductContent: React.FC = () => {
  return (
    <div className="sm:w-[291px] lg:w-[300px] w-[280px] h-auto bg-white rounded-2xl flex flex-col px-4 pt-4 sm:pb-8 pb-4 gap-4">
      {/* Search Bar */}
      <div className="w-[248px] sm:w-[261px] pl-[8.85px] pr-[73.79px] py-[4.43px] bg-white rounded shadow border border-[#e0daf3] flex items-center gap-[2.95px]">
        <div className="w-[14.76px] h-[14.76px] flex">
          <div className="w-[10.45px] h-[10.71px]">
            <LuSearch className="text-[#6c6483]" />
          </div>
        </div>
        <div className="flex items-center px-[2.95px]">
          <div className="text-center text-[#6c6483] text-[10.33px] sm:text-sm font-medium font-inter sm:leading-tight leading-[14.46px]">
            Search...
          </div>
        </div>
      </div>

      {/* Filter Tags */}
      <div className="flex gap-1.5">
        {['People', 'CEO', 'Canada'].map((tag) => (
          <div
            key={tag}
            className="px-2.5 py-0.5 bg-white rounded-[99px] shadow border border-[#fcfcfc] flex-col justify-center items-center gap-2.5 inline-flex"
          >
            <div className="justify-center items-center gap-1.5 inline-flex">
              <div className="text-[#271454] text-xs font-medium font-inter leading-none">
                {tag}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* User List */}
      <div className="flex flex-col gap-5">
        {[
          {
            name: 'Veronica Klent',
            role: 'CEO, Purple Dog Design',
            location: 'Quebec, QC',
            gradient: 'from-[#e9f2fd] via-[#ebfbfa] to-[#ebfcf9]',
          },
          {
            name: 'Laurie Anthony',
            role: 'CEO, Cosiz Management',
            location: 'British columbia, BC',
            gradient: 'from-[#f4f3f5] to-[#fdf2ec]',
          },
          {
            name: 'Mehba Nion',
            role: 'CEO, Cosiz Management',
            location: 'British columbia, BC',
            gradient: 'from-[#eef3fe] via-[#f3ebfb] to-[#fdefed]',
          },
          {
            name: 'Farina keon',
            role: 'CEO, Cosiz Management',
            location: 'British columbia, BC',
            gradient: 'from-white via-[#f9ffec] to-white',
          },
        ].map((user, index) => (
          <div
            key={index}
            className="justify-start items-start gap-2 inline-flex"
          >
            <div className="w-[30px] h-[30px] relative">
              <div
                className={`w-[30px] h-[30px] left-0 top-0 absolute bg-gradient-to-b ${user.gradient} rounded-full`}
              />
              <img
                className="w-[30px] h-[30px] left-0 top-0 absolute rounded-[18.75px]"
                src={`/Avatar ${index + 1}.svg`}
                alt={user.name}
              />
            </div>
            <div className="flex-col justify-start items-start gap-[5px] inline-flex">
              <div className="flex-col justify-start items-start gap-1 flex">
                <div className="justify-start items-center gap-0.5 inline-flex">
                  <div className="text-[#33274b] text-xs font-medium font-inter leading-none">
                    {user.name}
                  </div>
                </div>
                <div className="text-[#6c6483] text-[8px] font-normal font-inter leading-[11.20px]">
                  {user.role}
                </div>
              </div>
              <div className="text-[#33274b] text-[10px] font-inter leading-[14px]">
                {user.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WebProductContent
