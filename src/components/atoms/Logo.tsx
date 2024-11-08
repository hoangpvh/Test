import Image from 'next/image';

import logo from '@/public/Logo.svg';

const Logo: React.FC = () => {
  return (
    <div className="w-10 h-10 relative">
      <Image src={logo} alt="Logo" width={40} height={40} />
    </div>
  );
};

export default Logo;
