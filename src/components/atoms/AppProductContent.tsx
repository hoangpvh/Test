import { IoIosAdd, IoIosClose } from 'react-icons/io'
import { PiBuildingThin } from 'react-icons/pi'

import { userProfiles } from '@/assets/data'
import Icon from '@/components/atoms/Icon'

const AppProductContent: React.FC<{ className?: string }> = ({ className }) => {
  const textClasses =
    'text-[#625e6f] text-[10px] font-normal font-inter leading-[14px]'
  return (
    <div
      className={`w-[342px] sm:w-[364px] h-[330px] bg-white rounded-2xl flex flex-col sm:px-[21px] pl-[21px] pr-0 pt-[27px] gap-[5px] ${className}`}
    >
      {/* Lead count section */}
      <div className="text-[#33274b] text-base font-medium font-inter leading-snug">
        Leads
        <span className="ml-2 text-[#33274b] text-xs font-normal font-inter leading-none">
          3,446
        </span>
      </div>

      {/* Filters section */}
      <div className="bg-white rounded-md shadow border border-[#eff1f4] p-2 flex flex-col mt-[10px]">
        <div className="flex h-5 justify-between items-center">
          <div className="text-[#33274b] text-sm font-medium font-inter leading-tight">
            Filters
          </div>
          <div className="flex items-center gap-4">
            <div className="text-[#6c6483] text-[10px] font-normal font-inter underline leading-[14px] flex flex-row">
              <Icon icon={IoIosClose} size={14} color="#6c6483" />
              Clear
            </div>
            <div className="text-[#6c6483] text-[10px] font-normal font-inter leading-[14px] bg-[#f0f4fa] rounded-lg px-[9px] py-1.5 flex flex-row">
              <Icon icon={IoIosAdd} size={14} color="#6c6483" />
              Apply
            </div>
          </div>
        </div>
        <div className="w-[302px] h-[0px] mt-[8px] border border-[#f2f2f2]" />
        <div className="flex justify-between items-center pt-4 pb-2">
          <div className={textClasses}>Leads within</div>
          <div className={`${textClasses} flex flex-row gap-1`}>
            <Icon icon={PiBuildingThin} size={14} color="#625e6f" />
            Current job title in <span className="text-lime-500">CEO +1</span>
          </div>
          <div className="text-[#98a1b2] text-[10px] font-normal font-inter leading-[14px]">
            Company name
          </div>
        </div>
      </div>

      {/* User list */}
      <div className="flex flex-col gap-[5px]">
        {userProfiles.map((profile, index) => (
          <div
            key={index}
            className="h-[38px] bg-white rounded-md shadow border border-[#eff1f4] p-2"
          >
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 p-px">
                <img className="w-3 h-3" src="/Check.svg" alt="check" />
              </div>
              <img
                className="w-[22px] h-[22px] rounded-full"
                src={profile.profileImage}
                alt="profile"
              />
              <div className={textClasses}>{profile.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AppProductContent
