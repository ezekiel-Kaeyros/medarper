import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import ArrowLeft from '../../../../public/icons/arrow.svg';

type CustomLinkProps = {
  link: string;
  children: ReactNode;
};

export const CustomLink: React.FC<CustomLinkProps> = ({ link, children }) => {
  return (
    <Link
      className="my-4  w-fit border-primaryColor text-primaryColor rtl:flex-row-reverse flex items-center"
      href={`${link}`}
    >
      <Image className="" src={ArrowLeft} alt="Left arrow" />
      <div className="ml-2 font-bold xl:text-2xl ">{children}</div>
    </Link>
  );
};
