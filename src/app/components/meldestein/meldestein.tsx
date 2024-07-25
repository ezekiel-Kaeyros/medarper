'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import RightArrow from '../../../../public/icons/arrowBlack.svg';
import MapImage from '../../../../public/icons/map.svg';
import Searchbar from '../searchbar/Searchbar';
import Link from 'next/link';

type MeldesteinProps = {
    content: {
        meldestein: {
            title: string;
            description: string;
            link: string;
        };
    };
};

const Meldestein: React.FC<MeldesteinProps> = ({ content }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (value: string) => {
     
    };
    return (
        <div>
            <h1 className="font-bold text-black text-xl mb-2">{content?.meldestein?.title}</h1>
            <p>
                {content?.meldestein?.description}
            </p>
            <Link
                className="my-1 mb-6 border-b-[1px] w-fit border-primaryColor text-primaryColor rtl:flex-row-reverse flex items-center"
                href={`/#/`}
            ><h6>{content?.meldestein?.link}</h6></Link>
        </div>
    );
};

export default Meldestein;
