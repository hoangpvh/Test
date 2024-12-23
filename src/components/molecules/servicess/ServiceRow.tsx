import { useTranslations } from 'next-intl'

import ServiceCard from '@/components/atoms/ServiceCard'

interface ServiceRowProps {
  serviceKey: string
  gradientFrom: string
  gradientTo: string
  borderColor: string
}

const ServiceRow: React.FC<ServiceRowProps> = ({
  serviceKey,
  gradientFrom,
  gradientTo,
  borderColor,
}) => {
  const t = useTranslations('services')

  return (
    <ServiceCard
      gradientFrom={gradientFrom}
      gradientTo={gradientTo}
      borderColor={borderColor}
    >
      <div className="text-center text-black font-bold font-helvetica whitespace-nowrap">
        {t(serviceKey)}
      </div>
    </ServiceCard>
  )
}

export default ServiceRow
