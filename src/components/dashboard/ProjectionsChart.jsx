
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', actuals: 16, projections: 4 },
  { name: 'Feb', actuals: 20, projections: 5 },
  { name: 'Mar', actuals: 17, projections: 4 },
  { name: 'Apr', actuals: 22, projections: 6 },
  { name: 'May', actuals: 14, projections: 4 },
  { name: 'Jun', actuals: 20, projections: 5 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const total = payload.reduce((sum, item) => sum + item.value, 0);
    return (
      <div className="rounded-md border bg-background-light/80 p-2 text-sm shadow-lg backdrop-blur-sm dark:bg-background-dark/80">
        <p className="font-bold text-text-light dark:text-text-dark">{label}</p>
        <p className="text-text-light/80 dark:text-text-dark/80">{`Total: ${total}M`}</p>
      </div>
    );
  }
  return null;
};

export default function ProjectionsChart() {
  return (
    <div className="flex h-full flex-col gap-4">
      <h3 className="text-base font-semibold text-text-light dark:text-text-dark">
        Projections vs Actuals
      </h3>

      <div style={{ width: '100%', height: '168px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 0, left: -20, bottom: 0 }} 
            barGap={12}
            barSize={25}
          >
            <CartesianGrid 
              vertical={false} 
              stroke="#E5E7EB" 
              className="dark:stroke-white/10"
            />

            <XAxis
              dataKey="name"
              axisLine={{ stroke: '#E5E7EB' }} 
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

            <Tooltip 
              cursor={{ fill: 'rgba(229, 236, 246, 0.4)' }}
              content={<CustomTooltip />} 
            />

            {/* Bottom Bar: "Actuals" */}
            <Bar 
              dataKey="actuals" 
              stackId="a" 
              fill="#A8C5DA"
              className="dark:fill-blue-400/50"
            />

            {/* Top Bar: "Projections" */}
            <Bar
              dataKey="projections"
              stackId="a"
              fill="#C7DCEF"
              className="dark:fill-blue-300/30"
              radius={[8, 8, 0, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}