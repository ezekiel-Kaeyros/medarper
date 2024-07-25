'use client'
import React, { useState } from 'react';
import { useAuth } from '@/app/hooks/useAuth';

const QuantitativeChart = () => {
  const [loading, setIsLoading] = useState(true);
  const handleIframeLoaded = () => {
    setIsLoading(false);
  };
  const { user } = useAuth();
  return (
    <div>
       <iframe
        onLoad={handleIframeLoaded}
        loading="lazy"
        src={"https://dashboard.kaeyros.online/#!/quantitative?token="+user?.token}
        className="w-full h-screen"
      />
    </div>
  )
}

export default QuantitativeChart;