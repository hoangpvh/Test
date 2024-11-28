import { LuSearch } from 'react-icons/lu'
const WebProductContent: React.FC = () => {
  return (
    <div className="sm:w-291 lg:w-300 w-280 h-auto bg-white rounded-2xl flex flex-col px-4 pt-4 sm:pb-8 pb-4 gap-4">
      {/* Search Bar */}
      <div className="w-248 sm:w-261 pl-8.85 pr-73.79 py-4.43 bg-white rounded shadow border border-neutral-overlay flex items-center gap-2.95">
        <div className="w-14.76 h-14.76 flex">
          <div className="w-10.45 h-10.71">
            <LuSearch
              className="text-neutral-text2"
              data-testid="search-icon"
            />
          </div>
        </div>
        <div className="flex items-center px-2.95">
          <div className="text-center text-neutral-text2 text-10.33 sm:text-sm font-medium font-inter sm:leading-tight leading-14.46">
            Search...
          </div>
        </div>
      </div>

      {/* Filter Tags */}
      <div className="flex gap-1.5">
        {['People', 'CEO', 'Canada'].map((tag) => (
          <div
            key={tag}
            className="px-2.5 py-0.5 bg-white rounded-99 shadow border border-neutral-background flex-col justify-center items-center gap-2.5 inline-flex"
          >
            <div className="justify-center items-center gap-1.5 inline-flex">
              <div className="text-purple-darkest2 text-xs font-medium font-inter leading-none">
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
            profileImage: '/User 1.svg',
            name: 'Veronica Klent',
            role: 'CEO, Purple Dog Design',
            location: 'Quebec, QC',
            gradient: 'from-[#e9f2fd] via-[#ebfbfa] to-[#ebfcf9]',
          },
          {
            profileImage: '/User 2.svg',
            name: 'Laurie Anthony',
            role: 'CEO, Cosiz Management',
            location: 'British columbia, BC',
            gradient: 'from-[#f4f3f5] to-[#fdf2ec]',
          },
          {
            profileImage: '/User 3.svg',
            name: 'Mehba Nion',
            role: 'CEO, Cosiz Management',
            location: 'British columbia, BC',
            gradient: 'from-[#eef3fe] via-[#f3ebfb] to-[#fdefed]',
          },
          {
            profileImage: '/User 4.svg',
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
            <div className="w-7.5 h-7.5 relative">
              <div
                className={`w-7.5 h-7.5 left-0 top-0 absolute bg-gradient-to-b ${user.gradient} rounded-full`}
                data-testid="user-avatar"
              />
              <img
                className="w-7.5 h-7.5 left-0 top-0 absolute rounded-[18.75px]"
                src={user.profileImage}
                alt={user.name}
              />
            </div>
            <div className="flex-col justify-start items-start gap-1.25 inline-flex">
              <div className="flex-col justify-start items-start gap-1 flex">
                <div className="justify-start items-center gap-0.5 inline-flex">
                  <div className="text-purple-medium2 text-xs font-medium font-inter leading-none">
                    {user.name}
                  </div>
                </div>
                <div className="text-neutral-text2 text-2 font-normal font-inter leading-11.20">
                  {user.role}
                </div>
              </div>
              <div className="text-purple-medium2 text-2.5 font-inter leading-14">
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
