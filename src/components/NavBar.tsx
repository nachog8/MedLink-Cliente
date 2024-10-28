import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import MenuHamburger from '@/components/MenuHamburger';

const menuItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/' },
  { title: 'Services', href: '/' },
  { title: 'Contacto', href: '/contact' },
];

const NavBar = () => {
  return (
    <>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {menuItems.map(({ title, href }, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                href={href}
                className="px-3 py-2 text-sm font-medium text-white"
              >
                {title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <MenuHamburger />
    </>
  );
};

export default NavBar;
