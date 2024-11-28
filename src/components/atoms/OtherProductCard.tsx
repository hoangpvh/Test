export default function OtherProductCard() {
  return (
    <div
      className="sm:mt-2 ml-129 sm:ml-177 sm:w-250 xl:w-292 w-214 h-350 sm:h-355 xl:h-420 bg-white z-10 rounded-2xl flex flex-col"
      data-testid="other-product-card"
    >
      {/* Profile Header */}
      <div className="px-4 sm:px-2 xl:px-7.5 pt-4 sm:pt-3 xl:pt-7.5 flex items-center gap-3.5 ">
        <div className="relative sm:w-15 sm:h-15 w-10 h-10">
          <div
            className="absolute inset-0 bg-gradient-to-b from-gradient-start2 to-gradient-end2 rounded-full"
            data-testid="profile-gradient"
          />
          <img
            className="absolute sm:w-15 sm:h-15 w-10 h-10 inset-0 rounded-full"
            src="/User 5.svg"
            alt="Profile avatar"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-purple-text2 text-base font-medium font-inter leading-snug">
            Dharmesh Shah
          </div>
          <div className="text-neutral-text2 text-xs font-normal font-inter">
            Product manager
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className=" sm:px-2 xl:px-7.5 sm:pt-6 px-4 pt-4 flex flex-col lg:gap-3.5 sm:gap-2 gap-3.5">
        {/* Company & Job Title */}
        <div className="flex flex-col gap-2">
          <div className="flex sm:flex-row flex-col justify-start sm:gap-69 gap-5">
            <div className="flex flex-col gap-0.5">
              <div className="text-text-purple text-xs font-normal font-inter">
                Company
              </div>
              <div className="text-purple-darkest2 text-xs font-medium font-inter">
                HubSpot
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="text-text-purple text-xs font-normal font-inter">
                Job Title
              </div>
              <div className="text-purple-darkest2 text-xs font-medium font-inter">
                CTO
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-background" />
        </div>

        {/* Location & Company Type */}
        <div className="sm:flex flex-col gap-2 hidden">
          <div className="flex justify-start gap-59">
            <div className="flex flex-col gap-0.5">
              <div className="text-text-purple text-xs font-normal font-inter">
                Location
              </div>
              <div className="text-purple-darkest2 text-xs font-medium font-inter">
                Cambridge
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="text-text-purple text-xs font-normal font-inter">
                Company Type
              </div>
              <div className="text-purple-darkest2 text-xs font-medium font-inter">
                Public
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-background" />
        </div>

        {/* Seniority & Industry */}
        <div className="hidden sm:flex flex-col gap-2">
          <div className="flex justify-start gap-67">
            <div className="flex flex-col gap-0.5">
              <div className="text-text-purple text-xs font-normal font-inter">
                Seniority
              </div>
              <div className="text-purple-darkest2 text-xs font-medium font-inter">
                Executive
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="text-text-purple text-xs font-normal font-inter">
                Industry
              </div>
              <div className="text-purple-darkest2 text-xs font-medium font-inter">
                Internet Software
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-background" />
        </div>
      </div>

      {/* Map Image */}
      <div className="xl:p-6 sm:px-2 sm:pt-0 px-0 pt-1.5">
        <img
          className="w-234 sm:h-24 h-173 rounded-lg"
          src="/Map.svg"
          alt="Location map"
        />
      </div>
    </div>
  )
}
