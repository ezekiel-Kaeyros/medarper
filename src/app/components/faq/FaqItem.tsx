'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import DownIcon from '../../../../public/images/Vector (4).svg';

type FaqItemProps = {
  title: string;
  content: string;
};

const FaqItem: React.FC<FaqItemProps> = ({ title, content }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div
      onClick={() => setToggle(!toggle)}
      className="border-[1px] sm:border-transparent border-[#2F804A] cursor-pointer my-5 z-40 xl:py-4 py-2 px-6 bg-[#F1F0E9] text-primaryColor rounded-xl"
    >
      <div className="flex items-center">
        <Image
          className={`mr-9 ${
            toggle && 'rotate-180'
          } xl:h-auto h-6 xl:w-auto w-6`}
          src={DownIcon}
          alt="Down icon"
        />
        <div className=" xl:text-2xl lg:text-xl sm:text-base text-xs">
          {title}
        </div>
      </div>
      {toggle && (
        <div className="xl:text-xl lg:text-xl  text-sm my-4 xl:pl-[6.8%]  pl-[59px] text-black">
          {content}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
