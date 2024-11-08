import MenuItem from '@/components/atoms/MenuItems';

const NavBar: React.FC = () => {
  return (
    <nav className="justify-end items-center gap-4 flex">
      <MenuItem href="/" label="Home" />
      <MenuItem href="/products" label="Our Products" />
      <MenuItem href="/blogs" label="Blogs" />
      <MenuItem href="/contact" label="Contact Us" />
    </nav>
  );
};

export default NavBar;
