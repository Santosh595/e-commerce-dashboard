import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


const data = [
  { name: 'Direct', value: 300.56, color: '#1C1C1C', darkColor: '#C6C7F8' },
  { name: 'Sponsored', value: 154.02, color: '#95A4FC' },
  { name: 'Affiliate', value: 135.18, color: '#BAEDBD' },
  { name: 'E-mail', value: 48.96, color: '#B1E3FF' },
];


const CustomLegend = ({ payload }) => (
  <div className="flex flex-col gap-3">
    {payload.map((entry, index) => (
      <div key={`item-${index}`} className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
          <span className="text-text-light/80 dark:text-text-dark/80">{entry.payload.name}</span>
        </div>
        <span className="font-semibold text-text-light dark:text-text-dark">${entry.value.toFixed(2)}</span>
      </div>
    ))}
  </div>
);


export default function TotalSalesChart() {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const COLORS = data.map(d => d.name === 'Direct' && isDarkMode ? d.darkColor : d.color);
  const cardBackgroundColor = isDarkMode ? '#2A2A2A' : '#F7F9FB';

  return (
    <div className="flex h-full flex-col gap-4">
      <h3 className="text-base font-semibold text-text-light dark:text-text-dark">
        Total Sales
      </h3>

      
      <div className="relative mx-auto" style={{ width: '120px', height: '120px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart 
           
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={60} 
              dataKey="value"
              cornerRadius={8} 
              paddingAngle={4} 
              stroke={cardBackgroundColor}
              strokeWidth={3}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute top-[65%] left-[22%] 
                        flex items-center justify-center rounded-md bg-neutral-800 
                        py-1 px-2 dark:bg-neutral-600">
          <span className="text-sm font-bold text-white dark:text-text-dark">
            38.6%
          </span>
        </div>
      </div>

      <CustomLegend payload={data.map((entry, index) => ({
        value: entry.value,
        color: COLORS[index],
        payload: { name: entry.name }
      }))}/>
    </div>
  );
}