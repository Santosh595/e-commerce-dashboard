import React from 'react';
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// --- Chart Data ---
const data = [
  { name: 'Jan', previous: 7, currentSolid: 12.5 },
  { name: 'Feb', previous: 17, currentSolid: 8 },
  { name: 'Mar', previous: 15, currentSolid: 9 },
  { name: 'Apr', previous: 10, currentSolid: 12, currentDashed: 12 },
  { name: 'May', previous: 18, currentDashed: 20 },
  { name: 'Jun', previous: 23, currentDashed: 19.5 },
];

// --- Custom Legend Component ---
const CustomLegend = () => (
  <div className="flex items-center gap-4">
    <h3 className="text-base font-semibold text-text-light dark:text-text-dark">
      Revenue
    </h3>
    <p className='text-text-light/20 dark:text-text-dark/20'>|</p>
    <div className="flex items-center gap-4 text-sm">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#1C1C1C] dark:bg-white" />
        <span className="text-text-light/70 dark:text-text-dark/70">Current Week</span>
        <span className="font-bold text-text-light dark:text-text-dark">$58,211</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#A8C5DA]" />
        <span className="text-text-light/70 dark:text-text-dark/70">Previous Week</span>
        <span className="font-bold text-text-light dark:text-text-dark">$68,768</span>
      </div>
    </div>
  </div>
);

// --- The Main Chart Component ---
export default function RevenueChart() {
  return (
    <div className="flex h-full flex-col">
      <CustomLegend />
      
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#A8C5DA" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#A8C5DA" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid 
              vertical={false} 
              strokeDasharray="3 3"
              className="stroke-neutral-200 dark:stroke-white/10"
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              className="fill-neutral-500 dark:fill-neutral-400"
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              tickFormatter={(tick) => (tick === 0 ? '0' : `${tick}M`)}
              tick={{ fontSize: 12 }}
              className="fill-neutral-500 dark:fill-neutral-400"
            />

            <Tooltip cursor={false} />

            <Area
              type="monotone"
              dataKey="previous"
              stroke="#A8C5DA"
              fill="url(#colorPrevious)"
              strokeWidth={2.5}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="currentSolid"
              stroke="#1C1C1C"
              className="dark:stroke-white"
              strokeWidth={2.5}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="currentDashed"
              stroke="#1C1C1C"
              className="dark:stroke-white"
              strokeWidth={2.5}
              strokeDasharray="5 5"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}