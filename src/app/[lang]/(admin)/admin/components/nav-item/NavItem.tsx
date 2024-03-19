import Link from 'next/link';
import React, { ReactNode } from 'react';

type NavItemProps = {
  children: ReactNode;
  href: string;
};
const NavItem: React.FC<NavItemProps> = ({ children, href }) => {
  return (
    <Link
      className="my-1 py-2 px-4 rounded-md hover:text-white duration-100 w-full hover:bg-primaryColor transition ease-in-out hover:transition hover:w-full hover:duration-100 hover:ease-in-out hover:rounded-md hover:px-4 hover:py-2"
      href={`${href}`}
    >
      {children}
    </Link>
  );
};

export default NavItem;
