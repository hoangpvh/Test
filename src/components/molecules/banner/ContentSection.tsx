const ContentSection: React.FC = () => {
  return (
    <div
      data-testid="content-section"
      className="w-full h-209 lg:h-206 flex flex-col justify-start items-center lg:gap-10 gap-5"
    >
      <div className="w-full mx-5 h-28 flex justify-center items-center">
        <div
          data-testid="banner-line"
          className="absolute w-54 lg:w-435 h-12 lg:h-24 xl:h-28 sm:h-16 border-l-4 border-primary-default lg:ml-75 xl:ml-65 sm:ml-28 sm:mb-4 self-end -ml-30 xl:-mb-6 lg:-mb-4 mb-1 -z-100 bg-gradient-banner"
        />
        <div
          data-testid="heading-container"
          className="absolute text-center text-purple-dark text-4xl xl:text-90 sm:text-5xl lg:text-62 font-bold font-helvetica leading-15 w-full flex flex-col justify-center sm:flex-row"
        >
          <span>Code with Joy.</span>
          <span>&nbsp;Innovate with Fun!</span>
        </div>
      </div>
      <div
        data-testid="description-container"
        className="max-w-500 sm:max-w-824 lg:px-10 lg:max-w-1236 xl:max-w-1536 px-4 py-2.5 text-center text-purple-medium sm:leading-10 leading-18 text-sm lg:text-28 sm:text-22 font-normal font-helvetica lg:leading-42.67"
      >
        <p>
          With a commitment to quality and collaboration, we transform ideas
          into powerful, scalable solutions designed to propel your business
          forward.
        </p>
      </div>
    </div>
  )
}

export default ContentSection
