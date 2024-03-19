import Image from 'next/image';
import React from 'react';
import SearchIcon from '../../../../../../public/icons/searchIcon.svg';
import { getDictionary } from '@/lib/dictionary';
import { HelpCenterProps } from '../../helpCenter';
import { Locale } from '@/i18n.config';

type SearchBarProps = {
  searchBarTranslation:{
    placeHolder:string
  }
}

const SearchBar:React.FC<SearchBarProps> = ({searchBarTranslation}) => {
  return (
    <div className="relative w-full my-6 mx-4 lg:mx-[10rem]">
      <div className="border border-primaryColor absolute bg-gray-200 h-full items-center justify-center flex rounded-bl-xl rounded-tl-xl p-2">
        <Image src={SearchIcon} alt="search icon" />
      </div>
      <input
        type="search"
        placeholder={searchBarTranslation?.placeHolder}
        className="border border-primaryColor text-xs pl-12 pr-2 py-2 md:py-4 rounded-xl w-full"
      />
    </div>
  );
};

export default SearchBar;
