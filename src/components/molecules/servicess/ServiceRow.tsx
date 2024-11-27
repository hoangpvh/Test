import ServiceCard from '@/components/atoms/ServiceCard'

interface ServiceRowProps {
  label: string
  gradientFrom: string
  gradientTo: string
  borderColor: string
}

const ServiceRow: React.FC<ServiceRowProps> = ({
  label,
  gradientFrom,
  gradientTo,
  borderColor,
}) => (
  <ServiceCard
    gradientFrom={gradientFrom}
    gradientTo={gradientTo}
    borderColor={borderColor}
  >
    <div className="text-center text-black font-bold font-helvetica whitespace-nowrap">
      {label}
    </div>
  </ServiceCard>
)

export default ServiceRow
