'use client';
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import RightArrowIcon from '../../../../public/icons/arrowBlack.svg';

export type SearchProps = {
  onSearch: (value: string) => void;
};

const Searchbar = (props: SearchProps) => {
  const { onSearch } = props;
  const [value, setValue] = useState('PLZ/Ort eingeben');

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setValue(target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Here, we call the onSearch function and pass the value
      onSearch(value);
    }
  };

  return (
    <div className="flex relative sm:justify-start  items-center w-full text-gray-600">
      <div className="sm:w-[70%] w-[90%]">
        <input
          type="search"
          name="search"
          placeholder={value}
          className="relative h-7 px-2  md:w-[80%] w-full md:text-base sm:text-sm text-[11px] focus:outline-none py-1"
          onChange={(event) => searchHandler(event)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="   cursor-pointer  ">
        <Image
          src={RightArrowIcon}
          alt="Launch search"
          className="bg-white md:h-9 md:w-9 rounded-full md:p-3 h-4 w-4 p-1 ml-2"
        />
      </div>
    </div>
  );
};

export default Searchbar;
