import React from 'react';
import trendIconSvg from '../../assets/main_content/ArrowRise.svg'; 

const TrendIcon = ({ src, isPositive = true }) => (
  <img 
    src={src} 
    alt="Trend indicator" 
    className={`h-3.5 w-3.5 dark:invert ${!isPositive ? 'transform rotate-90' : ''}`}
  />
);

const StatCard = ({ title, value, percentage, isPositive, bgColor, iconSrc, index }) => {
  const isBlackText = index === 0 || index === 3;
  return (
    <div className={`flex flex-col gap-2 rounded-2xl p-6 ${bgColor}`}>
      <h3 className={`text-base font-semibold ${isBlackText ? 'text-black dark:text-black' : 'text-text-light dark:text-text-dark/80'}`}>
        {title}
      </h3>
      <div className="flex items-baseline justify-between">
        <p className={`text-lg font-bold ${isBlackText ? 'text-black dark:text-black' : 'text-text-light dark:text-text-dark'}`}>
          {value}
        </p>
        <div className={`flex items-center gap-1 ${isBlackText ? 'text-black dark:text-black' : 'text-text-light/70 dark:text-text-dark/70'}`}>
          <span className="text-sm font-semibold">
            {percentage}
          </span>
          <TrendIcon src={iconSrc} isPositive={isPositive} />
        </div>
      </div>
    </div>
  );
};

export default function StatsGrid() {
  const statsData = [
    { title: 'Customers', value: '3,781', percentage: '+11.01%', isPositive: true, bgColor: 'bg-[#E3F5FF] dark:bg-[#E3F5FF]', iconSrc: trendIconSvg },
    { title: 'Orders', value: '1,219', percentage: '-0.03%', isPositive: false, bgColor: 'bg-[#F7F9FB] dark:bg-white/5', iconSrc: trendIconSvg },
    { title: 'Revenue', value: '$695', percentage: '+15.03%', isPositive: true, bgColor: 'bg-[#F7F9FB] dark:bg-white/5', iconSrc: trendIconSvg },
    { title: 'Growth', value: '30.1%', percentage: '+6.08%', isPositive: true, bgColor: 'bg-[#E5ECF6] dark:bg-[#E5ECF6]', iconSrc: trendIconSvg },
  ];

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-7">
      {statsData.map((stat, index) => (
        <StatCard key={index} {...stat} index={index} />
      ))}
    </div>
  );
}