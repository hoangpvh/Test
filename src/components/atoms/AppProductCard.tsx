import { LuCopy } from 'react-icons/lu'

const AppProductCard: React.FC<{ className?: string }> = ({ className }) => {
  const inputClasses =
    'w-full h-[26px] bg-white rounded shadow border border-lime-50 px-2 pt-[5px] pb-1'
  const labelClasses =
    'text-[#231645] text-[10px] font-normal sm:text-xs sm:font-medium font-inter leading-[14px] mb-1'
  const valueClasses =
    'text-[#9491a1] text-xs font-normal font-inter leading-none'

  return (
    <div
      className={`xl:w-[350px] sm:w-[304px] sm:h-[284px] w-[225.34px] h-[242px] bg-white rounded-2xl shadow border border-[#eff1f4] px-4 flex flex-col gap-3 ${className}`}
    >
      {/* Form Fields - First Row */}
      <div className="flex gap-4 mt-[59px]">
        <div className="flex-1">
          <div className={labelClasses}>First Name</div>
          <div className={`${inputClasses} sm:w-[100px] w-[113px]`}>
            <div className={valueClasses}>Darrel</div>
          </div>
        </div>
        <div className="flex-1 flex-col hidden sm:flex">
          <div className={labelClasses}>Last Name</div>
          <div className={`${inputClasses} sm:w-[103px]`}>
            <div className={valueClasses}>Stewar</div>
          </div>
        </div>
      </div>

      {/* Email Field */}
      <div>
        <div className={labelClasses}>Email</div>
        <div className="flex justify-start items-center gap-2">
          <div
            className={`${inputClasses} xl:w-[292px] sm:w-[260px] w-[170px]`}
          >
            <div className={valueClasses}>darrelstewar@gmail.com</div>
          </div>
          <LuCopy className="w-4 h-4 hidden" color="#9491A1" />
        </div>
      </div>

      {/* Industry and Designation Row */}
      <div className="sm:flex gap-4 hidden">
        <div className="flex-1">
          <div className={labelClasses}>Industry</div>
          <div className={`${inputClasses} sm:w-[154px]`}>
            <div className={valueClasses}>IT Service</div>
          </div>
        </div>
        <div className="flex-1">
          <div className={labelClasses}>Designation</div>
          <div className={`${inputClasses} sm:w-[103px]`}>
            <div className={valueClasses}>VP Sales</div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-end relative">
        <button className="w-36 h-[38px] bg-lime-500 rounded-lg text-white text-base font-normal font-inter leading-snug px-4 py-2 mt-[10px] sm:mt-0">
          Save Prospect
        </button>

        <div className="xl:h-[60px] h-12 sm:h-[45px] pl-3 pr-5 sm:pl-4 sm:pr-[16px] py-2 sm:py-3.5 bg-white rounded-md shadow absolute xl:top-[20px] xl:right-[-51px] sm:top-[5px] sm:right-[-16px] top-[-158px] right-0">
          <div className="flex items-center gap-2">
            <div className="w-[30px] h-[30px] bg-lime-50 rounded-[999px] flex justify-center items-center">
              <img
                className="w-[30px] h-[30px] rounded-[980px]"
                src="/Avatar 5.svg"
                alt="Avatar"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="text-[#33274b] text-xs font-normal font-inter leading-none">
                Chris Wall
              </div>
              <div className="text-[#33274b] text-[9px] font-normal font-inter leading-3">
                VP Sales
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppProductCard
