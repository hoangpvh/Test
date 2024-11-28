const WebProductCard: React.FC = () => {
  return (
    <div
      data-testid="web-product-card"
      className="w-176.50 sm:w-212 h-52 lg:left-50 left-167 top-131 absolute bg-white rounded-2xl shadow overflow-hidden"
    >
      <div className="left-13.5 top-22 sm:left-23 absolute text-purple-text font-medium text-xs font-inter leading-none">
        DATA POINTS
      </div>

      <div className="left-10.5 sm:left-22 top-56 absolute flex-col justify-start items-start gap-1.75 inline-flex">
        {[
          'Open to work',
          'Employee summary',
          'Time in current role',
          'Time at current company',
          'Work history',
        ].map((item, index) => (
          <div
            key={index}
            className="pl-1.75 pr-1.5 pt-1 pb-0.75 bg-white rounded-xl border border-neutral-border justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-purple-text text-xs font-normal font-inter leading-none">
              {item}
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Background */}
      <div
        data-testid="gradient-background"
        className="w-184 h-187 left-112 -top-71 absolute"
      >
        <div className="w-125 h-125 left-0 top-0 absolute bg-neutral-gradient rounded-full blur-3xl" />
        <div className="w-140 h-140 left-44 top-47 absolute bg-neutral-gradient2 rounded-full blur-3xl" />
      </div>
    </div>
  )
}

export default WebProductCard
