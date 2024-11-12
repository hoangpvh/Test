import { services1, services2 } from '@/assets/data';

import ServiceRow from '../../molecules/servicess/ServiceRow';

const ServicesSection: React.FC = () => (
  <div className="h-[684px] py-[200px] flex flex-col justify-start items-center gap-[60px]">
    <div className="justify-start items-center gap-[60px] inline-flex">
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
    <div className=" justify-start items-center gap-[60px] inline-flex">
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
  </div>
);

export default ServicesSection;
