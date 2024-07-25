'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import RightArrow from '../../../../public/icons/arrowBlack.svg';
import MapImage from '../../../../public/images/img_pub1.svg';
import Searchbar from '../searchbar/Searchbar';
import ArrowLeft from '../../../../public/icons/arrow.svg';
import Link from 'next/link';

type PublicationProps = {
  content: {
    publicationElement: {
      date: string;
      title: string;
      filterPlace: string;
      description: string;
      placeOrLocation?: string;
      imgPub: string;
      key:number;
    };
  };
};

const Publication: React.FC<PublicationProps> = ({ content }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value: string) => {

  };

  return (
    <div className="flex rtl:-mb-[-1.5rem] lg:relative border-[2px] border-[#E0FEDF] lg:h-[20rem] rounded-lg justify-between lg:max-w-6xl text-[#2B8049]  mb-6 bg-white">
      <div className="lg:bg-gray-200 h-full">
        <Image
          className="h-full lg:w-full "
          src={content?.publicationElement?.imgPub}
          alt="Map"
          width={20}
          height={20}
        />
      </div>
      <div className="w-2/3 p-[0.5rem] lg:py-12  flex flex-col justify-between">
        <div className=" text-md lg:text-xl">
          {content?.publicationElement?.date}
        </div>
        <div className="font-bold text-md lg:text-3xl">
          {content?.publicationElement?.title}
        </div>
        <div className="my-2 lg:text-2xl">
          {content?.publicationElement?.filterPlace}
        </div>
        <div className="my-3 text-sm lg:text-2xl flex flex-row-reverse mr-4">
          <span className="border-b-[0px] w-fit border-primaryColor  rtl:flex-row-reverse flex items-center">
            <Image
              className="rtl:-scale-x-100 w-[1.5rem] mr-2"
              src={ArrowLeft}
              alt="Left arrow"
            />
            <h6>{content?.publicationElement?.description}</h6>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Publication;
