import { LuCopy } from 'react-icons/lu'

const AppProductCard: React.FC<{ className?: string }> = ({ className }) => {
  const inputClasses =
    'w-full h-26 bg-white rounded shadow border border-lime-50 px-2 pt-1.25 pb-1'
  const labelClasses =
    'text-purple-text text-2.5 font-normal sm:text-xs sm:font-medium font-inter leading-14 mb-1'
  const valueClasses =
    'text-text-purple text-xs font-normal font-inter leading-none'

  return (
    <div
      className={`xl:w-350 sm:w-304 sm:h-284 w-225.34 h-242 bg-white rounded-2xl shadow border border-Product-border px-4 flex flex-col gap-3 ${className}`}
    >
      {/* Form Fields - First Row */}
      <div className="flex gap-2.5 mt-59">
        <div className="flex-1">
          <div className={labelClasses}>First Name</div>
          <div className={`${inputClasses} sm:w-154 w-103`}>
            <div className={valueClasses}>Darrel</div>
          </div>
        </div>
        <div className="flex-1 flex-col hidden sm:flex">
          <div className={labelClasses}>Last Name</div>
          <div className={`${inputClasses} xl:w-154 w-103`}>
            <div className={valueClasses}>Stewar</div>
          </div>
        </div>
      </div>

      {/* Email Field */}
      <div>
        <div className={labelClasses}>Email</div>
        <div className="flex justify-start items-center gap-2">
          <div className={`${inputClasses} xl:w-292 sm:w-260 w-170`}>
            <div className={valueClasses}>darrelstewar@gmail.com</div>
          </div>
          <LuCopy
            className="w-4 h-4 hidden sm:block"
            color="#9491A1"
            aria-label="copy"
            role="img"
          />
        </div>
      </div>

      {/* Industry and Designation Row */}
      <div className="sm:flex gap-2.5 hidden">
        <div className="flex-1">
          <div className={labelClasses}>Industry</div>
          <div className={`${inputClasses} sm:w-154 w-103`}>
            <div className={valueClasses}>IT Service</div>
          </div>
        </div>
        <div className="flex-1">
          <div className={labelClasses}>Designation</div>
          <div className={`${inputClasses} xl:w-154 w-103`}>
            <div className={valueClasses}>VP Sales</div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-end relative">
        <button className="w-36 h-38 bg-lime-500 rounded-lg text-white text-base font-normal font-inter leading-snug px-4 py-2 mt-2.5 sm:mt-0">
          Save Prospect
        </button>

        <div className="xl:h-15 h-12 sm:h-10.25 pl-3 pr-5 sm:pl-4 sm:pr-4 py-2 sm:py-3.5 bg-white rounded-md shadow absolute xl:top-5 xl:-right-51 sm:top-5 sm:-right-4 -top-158 right-0">
          <div className="flex items-center gap-2">
            <div className="w-7.5 h-7.5 bg-lime-50 rounded-999 flex justify-center items-center">
              <img
                className="w-7.5 h-7.5 rounded-980"
                src="/Avatar 5.svg"
                alt="Avatar"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="text-purple-medium2 text-xs font-normal font-inter leading-none">
                Chris Wall
              </div>
              <div className="text-purple-medium2 text-9 font-normal font-inter leading-3">
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
