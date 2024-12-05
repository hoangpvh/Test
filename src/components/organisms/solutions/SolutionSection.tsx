import { solutions } from '@/assets/data'
import Button from '@/components/atoms/Button'
import SolutionCard from '@/components/molecules/solutions/SolutionCard'

const SolutionSection = () => {
  return (
    <div className="w-full h-auto px-4 py-10 xl:h-200 1920:px-90 xl:px-50 sm:px-15 sm:py-25 xl:py-148 bg-secondary-dark mt-79 sm:mt-39 xl:mt-38 justify-start lg:justify-center lg:items-center inline-flex lg:px-15">
      <div className="flex-col xl:flex-row xl:justify-between sm:items-center items-center inline-flex xl:gap-0 gap-10">
        <div className="flex-col justify-start items-start xl:gap-5 gap-4 inline-flex">
          <div className="text-secondary-dark-2 text-lg sm:text-lg  font-semibold font-helvetica leading-normal">
            How can we help you?
          </div>
          <div className="flex-col justify-start items-start xl:gap-30 flex gap-5">
            <div className="xl:w-100 text-white sm:text-20 text-4xl xl:text-16 font-bold font-helvetica capitalize leading-46.80 xl:leading-83.20 sm:leading-26">
              solutions we provide
            </div>
            <div className="flex flex-col justify-start items-start gap-5 xl:gap-15 sm:gap-8">
              <div className="xl:w-100 text-neutral-text text-sm sm:text-22 xl:text-lg font-normal font-helvetica leading-snug xl:leading-28.80">
                Transforming Ideas into High-Performance Software – Tailored to
                Drive Your Success.
              </div>
              <div className="justify-center items-center inline-flex xl:w-162 w-full">
                <Button
                  title="View More"
                  onClick={() => console.log('View!')}
                  className="w-full px-6 py-3 lg:py-3 sm:py-4 bg-primary-default"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start xl:gap-6 gap-5 inline-flex xl:w-[880px] lg:w-[900px]">
          <div className="justify-center xl:justify-end items-start xl:gap-6 gap-5 inline-flex flex-wrap">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolutionSection
