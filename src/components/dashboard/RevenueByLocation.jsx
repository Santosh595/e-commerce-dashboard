

import React from 'react';

// --- IMAGE IMPORT ---
// Make sure this path points to your exported world map image.
import worldMapImage from '../../assets/main_content/WorldMap.png';  

// --- Data for the locations (no changes here) ---
const locationsData = [
  { city: 'New York', value: '72K', percentage: 85 },
  { city: 'San Francisco', value: '39K', percentage: 48 },
  { city: 'Sydney', value: '25K', percentage: 35 },
  { city: 'Singapore', value: '61K', percentage: 75 },
];

// --- Reusable Location Stat Component (no changes here) ---
const LocationStat = ({ city, value, percentage }) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center justify-between text-sm">
      <span className="font-medium text-text-light dark:text-text-dark">
        {city}
      </span>
      <span className="font-semibold text-text-light/80 dark:text-text-dark/80">
        {value}
      </span>
    </div>
    <div className="h-1 w-full rounded-full bg-primary-light dark:bg-white/10">
      <div 
        className="h-1 rounded-full bg-[#A8C5DA]"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);


// --- Main RevenueByLocation Component (Layout Corrected) ---
export default function RevenueByLocation() {
  return (
    // FIX: The main container is now a flex column that will fill the parent's height.
    // The `gap` property has been removed in favor of a more controlled layout.
    <div className="flex h-full flex-col">
      <h3 className="flex-shrink-0 text-base font-semibold text-text-light dark:text-text-dark">
        Revenue by Location
      </h3>

      {/* Map Image with controlled vertical margin */}
      <img 
        src={worldMapImage} 
        alt="World map showing revenue locations" 
        // `my-3` (12px margin top/bottom) provides better spacing than the original gap.
        className="w-full flex-shrink-0 object-contain my-3" 
      />

      {/* FIX: This list container is now the flexible part of the layout.
          - `flex-1` makes it grow to take up all remaining vertical space.
          - `flex flex-col` arranges the locations vertically.
          - `justify-between` distributes the locations evenly, ensuring the last one
            is at the bottom, with no overflow.
      */}
      <div className="flex flex-1 flex-col justify-between">
        {locationsData.map((location) => (
          <LocationStat key={location.city} {...location} />
        ))}
      </div>
    </div>
  );
}