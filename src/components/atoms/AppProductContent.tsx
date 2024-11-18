'use client'
import { IoIosAdd, IoIosClose } from 'react-icons/io'
import { PiBuildingThin } from 'react-icons/pi'

import { userProfiles } from '@/assets/data'
import Icon from '@/components/atoms/Icon'

const AppProductContent: React.FC = () => {
  return (
    <div className="w-[342px] h-[330px] bg-white rounded-2xl flex flex-col gap-[15px] pl-[21px]">
      {/* Lead count section */}
      <div className="flex items-center gap-1 w-full mt-[27px] ">
        <div className="text-[#33274b] font-inter text-base font-medium leading-snug">
          Leads
        </div>
        <div className="text-[#33274b] font-inter text-xs font-normal leading-none">
          3,446
        </div>
      </div>
      <div className="flex flex-col gap-[5px]">
        <div className="w-full h-[81px] bg-white rounded-md shadow border border-[#eff1f4] flex flex-col justify-start items-center">
          <div className="py-1 flex items-center justify-between w-full px-[10px]">
            <div className="text-[#33274b] font-inter text-sm font-medium leading-tight">
              Filters
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="text-[#6c6483] font-inter text-[10px] flex flex-row gap-1 font-normal underline leading-[14px]">
                <Icon icon={IoIosClose} size={14} color="#6c6483" />
                Clear
              </div>
              <div className="text-[#6c6483] font-inter text-[10px] flex flex-row gap-1 font-normal leading-[14px] bg-[#f0f4fa] rounded-lg px-2 py-[6px]">
                <Icon icon={IoIosAdd} size={14} color="#6c6483" />
                Apply
              </div>
            </div>
          </div>
          <div className="py-2 w-full border-t border-[#f2f2f2]"></div>
          <div className="w-full flex justify-between items-center  px-[10px]">
            <div className="text-[#625e6f] font-inter text-[10px] font-normal leading-[14px]">
              Leads within
            </div>
            <div className="text-[#625e6f] flex flex-row gap-1 text-[10px] font-normal leading-[14px]">
              <Icon icon={PiBuildingThin} size={14} color="#9491a1" />
              Current job title in <span className="text-lime-500">CEO +1</span>
            </div>
            <div className="text-[#98a1b2] font-inter text-[10px] font-normal leading-[14px]">
              Company name
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[5px]">
          {userProfiles.map((profile, index) => (
            <div
              key={index}
              className="w-full h-[38px] bg-white rounded-md shadow border border-[#eff1f4] flex items-center px-[8px]"
            >
              <div className="w-3.5 h-3.5 mr-2">
                <img className="w-3 h-3" src="/Check.svg" alt="icon" />
              </div>
              <img
                className="w-[22px] h-[22px] rounded-full"
                src={profile.profileImage}
                alt="profile"
              />
              <div className="text-[#625e6f] font-inter text-[10px] font-normal leading-[14px] ml-[8px]">
                {profile.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AppProductContent
