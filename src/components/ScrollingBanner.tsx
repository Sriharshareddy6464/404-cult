import React from 'react';

const ScrollingBanner: React.FC = () => {
  const bannerText = "404 error : Welcome to the 404 Cult";
  // Reduced segments for performance; 3 is plenty to be wider than any screen.
  const segments = Array(3).fill(bannerText);

  const BannerContent = () => (
    <div className="flex items-center whitespace-nowrap uppercase text-sm font-bold tracking-wider">
      {segments.map((text, index) => (
        <React.Fragment key={index}>
          <span>{text}</span>
          <span className="px-12">★</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="h-[25px] bg-black text-white w-full overflow-hidden flex items-center border-y border-gray-700/50">
      <div className="flex animate-scroll-left">
        <BannerContent />
        <BannerContent aria-hidden="true" />
      </div>
    </div>
  );
};

export default ScrollingBanner;