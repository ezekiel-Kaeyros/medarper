'use client';
import React from 'react';
import NextIcon from '../../../../../../public/icons/NextIcon.svg';
import Image from 'next/image';

const PaginationButtons = () => {
  return (
    <div className="flex text-primaryColor space-x-8 items-center">
      <div className="bg-white font-bold p-1 flex items-center justify-center rounded-full h-6 w-6">
        1
      </div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <Image src={NextIcon} alt="Next icon"/>
    </div>
  );
};

export default PaginationButtons;
