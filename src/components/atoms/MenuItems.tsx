'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItemProps {
  href: string;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href === '/' && pathname === '/');

  return (
    <Link
      href={href}
      className={`px-5 py-3 flex items-center gap-2 rounded-[999px] ${
        isActive ? 'bg-[#f0f1ff]/20 font-semibold' : 'font-medium'
      } text-xl text-white leading-normal font-poppins transition`}
    >
      {label}
    </Link>
  );
};

export default MenuItem;
