'use client';
import React, { useState } from 'react';

const Page = () => {
  const [loading, setIsLoading] = useState(true);
  const handleIframeLoaded = () => {
    setIsLoading(false);
  };

  return (
    <div className="mt-8">
      <iframe
        onLoad={handleIframeLoaded}
        loading="lazy"
        src="https://dashboard.kaeyros.online/#!/qualitative"
        className="w-full h-screen"
      />
    </div>
  );
};

export default Page;
