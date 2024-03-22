'use client';
import React, { useState } from 'react';

const Page = () => {
  const [loading, setIsLoading] = useState(true);
  const handleIframeLoaded = () => {
    setIsLoading(false);
  };

  <div className="mt-8">
    <h1 className="font-bold text-2xl mb-4">Quantitative data</h1>

    <iframe
      onLoad={handleIframeLoaded}
      loading="lazy"
      src="https://dashboard.kaeyros.online/#!/quantitative"
      className="w-full h-screen"
    />
  </div>;
};

export default Page;
