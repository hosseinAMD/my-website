import { INavItem } from "models/NavItem";
import Link from "next/link";
import { useRouter } from "next/router";

export interface NavbarItemProps extends INavItem {
  isDropItem?: boolean;
  toggleMenu: () => void;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  label,
  href,
  isDropItem = false,
  toggleMenu,
}) => {
  const { pathname } = useRouter();

  let linkClass =
    "ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out";
  if (pathname === href) {
    linkClass =
      "px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out";
  }

  let linkClassResponsive =
    "mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out";
  if (pathname === href) {
    linkClassResponsive =
      "block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out";
  }

  return (
    <Link href={href}>
      <a
        className={isDropItem ? linkClassResponsive : linkClass}
        onClick={toggleMenu}
      >
        {label}
      </a>
    </Link>
  );
};

export default NavbarItem;
