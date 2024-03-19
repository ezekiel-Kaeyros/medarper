import React from 'react';
import Link from 'next/link';
import NavItem from '../nav-item/NavItem';
import Image from 'next/image';
import Logo from '../../../../../../../public/logo.svg';

export default function App() {
  const items = [];

  return (
    <div className="flex flex-col px-4 border h-screen border-gray-100 bg-white">
      <Link className="px-4 pt-4" href="/">
        <Image className="w-32" src={Logo} alt="Logo" />
      </Link>
      <div className="flex w-full flex-col mt-24">
        <div className="py-4 w-full">
          <NavItem href="/dashboard">Dashboard</NavItem>
        </div>
        <div className="py-4 w-full">
          <NavItem href="/blog">Blog</NavItem>
        </div>
        <div className="py-4 w-full">
          <NavItem href="/admin/users">Users</NavItem>
        </div>
        <div className="py-4 w-full">
          <NavItem href="/users">Analytics</NavItem>
        </div>
      </div>
    </div>
  );
}
