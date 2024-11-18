'use client'

import { solutions } from '@/assets/data'
import Button from '@/components/atoms/Button'
import SolutionCard from '@/components/molecules/solutions/SolutionCard'

const Solution = () => {
  return (
    <div className="w-full h-[1194px] px-4 py-10 lg:h-[800px] lg:px-[360px] lg:py-[148px] bg-[#252a3f] mt-[316px] lg:mt-[152px] justify-start lg:justify-center lg:items-center inline-flex">
      <div className="flex-col lg:flex-row lg:justify-between items-start inline-flex lg:gap-0 gap-10">
        <div className="flex-col justify-start items-start lg:gap-5 gap-4 inline-flex">
          <div className="text-[#f59a73] text-lg font-semibold font-['Plus Jakarta Sans'] leading-normal">
            How can we help you?
          </div>
          <div className="flex-col justify-start items-start lg:gap-[30px] flex gap-5">
            <div className="lg:w-[400px] text-white text-4xl lg:text-[64px] font-bold font-['Helvetica'] capitalize leading-[46.80px] lg:leading-[83.20px]">
              solutions we provide
            </div>
            <div className="flex flex-col justify-start items-start gap-5 lg:gap-[60px]">
              <div className="lg:w-[400px] text-[#7f879e] text-sm lg:text-lg font-normal font-['Plus Jakarta Sans'] leading-snug lg:leading-[28.80px]">
                Transforming Ideas into High-Performance Software – Tailored to
                Drive Your Success.
              </div>
              <div className="justify-center items-center inline-flex lg:w-[162px] w-full">
                <Button
                  label="View More"
                  onClick={() => console.log('View!')}
                  className="w-full px-6 py-3 bg-[#565add]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start lg:gap-6 gap-5 inline-flex">
          <div className="justify-end items-start lg:gap-6 gap-5 inline-flex flex-wrap">
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

export default Solution
