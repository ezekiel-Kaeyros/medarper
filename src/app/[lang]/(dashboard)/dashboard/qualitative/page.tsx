'use client';
import React from 'react';
import QualitativeCart from '@/app/components/qualitative/QualitativeCart';

const Page = () => {

  return (
    <div className="mt-8">
      <h1 className="font-bold text-2xl mb-4">Qualitative data</h1>

      {/* {(loading && (
        <div className="w-full">
          <Loading />
        </div>
      )) || (
        
      )} */}
      <QualitativeCart />
    </div>
  );
};

export default Page;
