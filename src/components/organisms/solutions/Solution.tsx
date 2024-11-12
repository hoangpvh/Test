'use client';

import { solutions } from '@/assets/data';
import Button from '@/components/atoms/Button';
import SolutionCard from '@/components/molecules/solutions/SolutionCard';

const Solution = () => {
  return (
    <div className="h-[800px] px-[360px] py-[148px] bg-[#252a3f] mt-[152px] justify-center items-center inline-flex">
      <div className="justify-between items-start inline-flex">
        <div className="flex-col justify-start items-start gap-5 inline-flex">
          <div className="text-[#f59a73] text-lg font-semibold font-['Plus Jakarta Sans'] leading-normal">
            How can we help you?
          </div>
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="w-[400px] text-white text-[64px] font-bold font-['Helvetica'] capitalize leading-[83.20px]">
              solutions we provide
            </div>
            <div className="flex flex-col justify-start items-start gap-[60px]">
              <div className="w-[400px] text-[#7f879e] text-lg font-normal font-['Plus Jakarta Sans'] leading-[28.80px]">
                Transforming Ideas into High-Performance Software – Tailored to
                Drive Your Success.
              </div>
              <div className="justify-center items-center inline-flex">
                <Button
                  text="View More"
                  onClick={() => console.log('View!')}
                  className="px-6 py-3 bg-[#565add]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="justify-end items-start gap-6 inline-flex flex-wrap">
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
  );
};

export default Solution;
