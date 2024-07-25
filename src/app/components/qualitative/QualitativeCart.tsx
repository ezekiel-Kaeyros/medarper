import React, { useState } from 'react'
import { useAuth } from '@/app/hooks/useAuth';

const QualitativeCart = () => {
    const [loading, setIsLoading] = useState(true);
    const handleIframeLoaded = () => {
      setIsLoading(false);
    };
    const { user } = useAuth();

    console.log(user?.token, 'usertoken')

  return (
    <div className="iframe-container">
      <iframe
        onLoad={handleIframeLoaded}
        loading="lazy"
        src={
          'https://dashboard.kaeyros.online/#!/qualitative?token=' + user?.token
        }
        className="iframe-content"
      />
    </div>
  )
}

export default QualitativeCart
