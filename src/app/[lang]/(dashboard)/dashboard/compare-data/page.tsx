'use client';
import { useAuth } from '@/app/hooks/useAuth';
import React, { useState } from 'react';

const Page = () => {
  const [loading, setIsLoading] = useState(true);
  const handleIframeLoaded = () => {
    setIsLoading(false);
  };
  const { user } = useAuth();

  return (
    <div className="mt-8">
      <h1 className="font-bold text-2xl mb-4">Compare data</h1>
      {/* {loading && (
        <div className="w-full">
          <Loading />
        </div>
      )} */}
      <iframe
        onLoad={handleIframeLoaded}
        loading="lazy"
        src={"https://dashboard.kaeyros.online/#!/compare?token=" + user?.token}
        className="w-full h-screen"
      />
    </div>
  );
};

export default Page;
