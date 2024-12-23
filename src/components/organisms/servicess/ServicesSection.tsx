import { services1, services2 } from '@/assets/data'
import ServiceRow from '@/components/molecules/servicess/ServiceRow'

const ServicesSection: React.FC = () => (
  <div className="w-full px-4 sm:px-0 py-10 xl:py-50 sm:py-40 flex flex-col justify-start items-center gap-5 sm:gap-15">
    <div className="hidden justify-start items-center gap-15 lg:inline-flex">
      {services1.map((service, index) => (
        <ServiceRow
          key={index}
          serviceKey={service.key}
          gradientFrom={service.gradientFrom}
          gradientTo={service.gradientTo}
          borderColor={service.borderColor}
        />
      ))}
    </div>
    <div className="hidden justify-start items-center gap-15 sm:inline-flex">
      {services2.map((service, index) => (
        <ServiceRow
          key={index}
          serviceKey={service.key}
          gradientFrom={service.gradientFrom}
          gradientTo={service.gradientTo}
          borderColor={service.borderColor}
        />
      ))}
    </div>
    <div className="lg:hidden sm:flex-row justify-center flex-col items-center gap-5 inline-flex">
      {services2.map((service, index) => (
        <ServiceRow
          key={index}
          serviceKey={service.key}
          gradientFrom={service.gradientFrom}
          gradientTo={service.gradientTo}
          borderColor={service.borderColor}
        />
      ))}
      {services1.map((service, index) => (
        <ServiceRow
          key={index}
          serviceKey={service.key}
          gradientFrom={service.gradientFrom}
          gradientTo={service.gradientTo}
          borderColor={service.borderColor}
        />
      ))}
    </div>
  </div>
)

export default ServicesSection
