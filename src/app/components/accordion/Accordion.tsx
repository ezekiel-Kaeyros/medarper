'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import DropdownIcon from '../../../../public/icons/dropdownIcon.svg';

type AccordionProps = {
  title: string;
  content: any;
  toggle: boolean;
  handleToggle: any;
};

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  toggle,
  handleToggle,
}) => {
  return (
    <div
      className={`w-full lg:hidden cursor-pointer py-1 px-2 rounded-lg text-white bg-[#DCBE98]`}
    >
      <div
        onClick={() => handleToggle(!toggle)}
        className="font-bold my-2 flex justify-between items-center"
      >
        <Image
          className={`${toggle ? 'rotate-180' : ' '}`}
          src={DropdownIcon}
          alt="Dropdwon icon"
        />
        <div>{title}</div>
        <Image
          className={`${toggle ? 'rotate-180' : ' '}`}
          src={DropdownIcon}
          alt="Dropdwon icon"
        />
      </div>
      {toggle && <div className="bg-gray-600 h-full">{content}</div>}
    </div>
  );
};

export default Accordion;
