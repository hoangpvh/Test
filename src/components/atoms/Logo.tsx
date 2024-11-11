import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="w-10 h-10 relative">
      <Image src="/Logo.png" alt="Logo" width={40} height={40} />
    </div>
  );
};

export default Logo;
