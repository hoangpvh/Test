import { IoIosAdd, IoIosClose } from 'react-icons/io'
import { PiBuildingThin } from 'react-icons/pi'

import { userProfiles } from '@/assets/data'
import Icon from '@/components/atoms/Icon'

const AppProductContent: React.FC<{ className?: string }> = ({ className }) => {
  const textClasses =
    'text-text-secondary text-2.5 font-normal font-inter leading-14'
  return (
    <div
      data-testid="product-content"
      className={`w-342 sm:w-364 h-330 bg-white rounded-2xl flex flex-col sm:px-21 pl-21 pr-0 pt-27 gap-1.25 ${className}`}
    >
      {/* Lead count section */}
      <div className="text-purple-medium2 text-base font-medium font-inter leading-snug">
        Leads
        <span className="ml-2 text-purple-medium2 text-xs font-normal font-inter leading-none">
          3,446
        </span>
      </div>

      {/* Filters section */}
      <div className="bg-white rounded-md shadow border border-Product-border p-2 flex flex-col mt-2.5">
        <div className="flex h-5 justify-between items-center">
          <div className="text-purple-medium2 text-sm font-medium font-inter leading-tight">
            Filters
          </div>
          <div className="flex items-center gap-4">
            <div className="text-neutral-text2 text-2.5 font-normal font-inter underline leading-14 flex flex-row">
              <Icon
                icon={IoIosClose}
                size={14}
                color="neutral-text2"
                data-testid="close-icon"
              />
              Clear
            </div>
            <div className="text-neutral-text2 text-2.5 font-normal font-inter leading-14 bg-Product-overlay rounded-lg px-3.75 py-1.5 flex flex-row">
              <Icon
                icon={IoIosAdd}
                size={14}
                color="neutral-text2"
                data-testid="add-icon"
              />
              Apply
            </div>
          </div>
        </div>
        <div
          data-testid="filter-divider"
          className="w-302 h-0 mt-2 border border-Product-divider"
        />
        <div className="flex justify-between items-center pt-4 pb-2">
          <div className={textClasses}>Leads within</div>
          <div className={`${textClasses} flex flex-row gap-1`}>
            <Icon
              icon={PiBuildingThin}
              size={14}
              color="text-secondary"
              data-testid="building-icon"
            />
            Current job title in <span className="text-lime-500">CEO +1</span>
          </div>
          <div className="text-Product-text text-2.5 font-normal font-inter leading-14">
            Company name
          </div>
        </div>
      </div>

      {/* User list */}
      <div className="flex flex-col gap-[5px]">
        {userProfiles.map((profile, index) => (
          <div
            key={index}
            className="h-38 bg-white rounded-md shadow border border-Product-border p-2"
          >
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 p-px">
                <img className="w-3 h-3" src="/Check.svg" alt="check" />
              </div>
              <img
                className="w-4.5 h-4.5 rounded-full"
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
