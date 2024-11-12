interface ServiceCardProps {
  children: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  children,
  gradientFrom,
  gradientTo,
  borderColor,
}) => (
  <div
    className={`px-10 py-5 justify-center items-center gap-2.5 flex`}
    style={{
      background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
      borderLeft: `4px solid ${borderColor}`,
    }}
  >
    {children}
  </div>
);

export default ServiceCard;
