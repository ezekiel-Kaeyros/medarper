import Image from 'next/image';
import React from 'react';
import FormTestimony from '../../../../public/images/Group 52.svg';

type ProgressBarProps = {
  percentage: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <div className="z-[500]">
      <div className="w-full rtl:-scale-x-100 bg-gray-200 rounded-full h-2.5 lg:h-4  border-[0.5px] border-[#8AB99B] ">
        {/* <Image
          src={FormTestimony}
          className="hidden lg:block absolute -z-10 -left-[0rem] top-[20%] rtl:scale-y-[-1] rtl:rotate-180 rtl:-right-[10rem] rtl:-top-[480px]"
          alt="Form"
        /> */}
        <div
          className="bg-[#8AB99B] border-primaryColor lg:border-secondaryColor lg:bg-secondaryColor h-2.5 lg:h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
