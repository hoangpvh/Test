interface ServiceCardProps {
  children: React.ReactNode
  gradientFrom: string
  gradientTo: string
  borderColor: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  children,
  gradientFrom,
  gradientTo,
  borderColor,
}) => (
  <div
    className={`h-37 sm:h-77 xl:h-28 sm:text-8 text-lg xl:text-10 xl:leading-72 lg:px-10 lg:py-5 px-4 py-2 justify-center items-center gap-2.5 flex`}
    style={{
      background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
      borderLeft: `4px solid ${borderColor}`,
    }}
  >
    {children}
  </div>
)

export default ServiceCard
