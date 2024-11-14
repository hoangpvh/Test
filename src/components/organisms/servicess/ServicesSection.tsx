import { services1, services2 } from '@/assets/data';

import ServiceRow from '../../molecules/servicess/ServiceRow';

const ServicesSection: React.FC = () => (
  <div className="h-[516px] w-full px-4 py-10 lg:h-[684px] lg:py-[200px] flex flex-col justify-start items-center gap-5 lg:gap-[60px]">
    <div className="hidden justify-start items-center gap-[60px] lg:inline-flex">
      {services1.map((service, index) => (
        <ServiceRow
          key={index}
          label={service.label}
          gradientFrom={service.gradientFrom}
          gradientTo={service.gradientTo}
          borderColor={service.borderColor}
        />
      ))}
    </div>
    <div className="hidden justify-start items-center gap-[60px] lg:inline-flex">
      {services2.map((service, index) => (
        <ServiceRow
          key={index}
          label={service.label}
          gradientFrom={service.gradientFrom}
          gradientTo={service.gradientTo}
          borderColor={service.borderColor}
        />
      ))}
    </div>
    <div className="lg:hidden justify-center flex-col items-center gap-[20px] inline-flex">
      {services2.map((service, index) => (
        <ServiceRow
          key={index}
          label={service.label}
          gradientFrom={service.gradientFrom}
          gradientTo={service.gradientTo}
          borderColor={service.borderColor}
        />
      ))}
      {services1.map((service, index) => (
        <ServiceRow
          key={index}
          label={service.label}
          gradientFrom={service.gradientFrom}
          gradientTo={service.gradientTo}
          borderColor={service.borderColor}
        />
      ))}
    </div>
  </div>
);

export default ServicesSection;
