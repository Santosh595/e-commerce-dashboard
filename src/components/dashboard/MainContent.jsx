
import React from 'react';
import StatsGrid from './StatsGrid';
import ProjectionsChart from './ProjectionsChart';
import RevenueChart from './RevenueChart';
import RevenueByLocation from './RevenueByLocation';
import TopProductsTable from './TopProductsTable';
import TotalSalesChart from './TotalSalesChart';

const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-primary-light dark:bg-primary-dark rounded-2xl p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default function MainContent() {
  return (
    <div className="flex-1 bg-background-light dark:bg-background-dark overflow-y-auto">
      <div className="mx-auto w-full max-w-[1000px]">
        <h1 className="font-bold text-text-light dark:text-text-dark mb-6">
          eCommerce
        </h1>

        <div className="flex flex-col gap-8">
          {/* First Row */}
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
            <div className="space-y-8 xl:space-y-0">
              <StatsGrid />
            </div>
            <Card className="h-[252px]">
              <ProjectionsChart />
            </Card>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-4">
            <Card className="h-[318px] xl:col-span-3">
              <RevenueChart />
            </Card>
            <Card className="h-[318px] xl:col-span-1">
              <RevenueByLocation />
            </Card>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-4">
            <Card className="h-[318px] xl:col-span-3">
              <TopProductsTable />
            </Card>
            <Card className="h-[318px] xl:col-span-1">
              <TotalSalesChart />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
