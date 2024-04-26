import React, { useEffect } from 'react';

const AdComponent = ({ showAd }) => {
  useEffect(() => {
    if (showAd && window && window.adsbygoogle && window.adsbygoogle.loaded) {
      window.adsbygoogle.push({});
    }
  }, [showAd]);

  return (
    <div className="ad-container">
      <ins 
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1847030712438034"
        data-ad-slot="5953642948"
        data-ad-format="auto"
        data-full-width-responsive="true"
      >
      </ins>
    </div>
  );
};

export default AdComponent;
