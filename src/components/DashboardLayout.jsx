import React, { useState } from "react";
import TopNavbar from "../components/TopNavbar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import MainContent from "./dashboard/MainContent";

export default function Dashboard() {
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(true);

  return (
  
    <div className="flex h-screen bg-background-light dark:bg-background-dark">
      
      <aside
        className={`flex-shrink-0 bg-background-light dark:bg-background-dark border-r border-neutral-200 dark:border-neutral-800 transition-[width] duration-300 ${
          isLeftSidebarOpen ? "w-[212px]" : "w-0"
        } h-screen overflow-hidden`} 
      >
        <LeftSidebar />
      </aside>
      <div className="flex flex-1 flex-col min-w-0">
        <TopNavbar
          toggleLeftSidebar={() => setLeftSidebarOpen(!isLeftSidebarOpen)}
          toggleRightSidebar={() => setRightSidebarOpen(!isRightSidebarOpen)}
        />
        <MainContent />
      </div>

      <aside
        className={`flex-shrink-0 bg-background-light dark:bg-background-dark border-l border-neutral-200 dark:border-neutral-800 transition-[width] duration-300 ${
          isRightSidebarOpen ? "w-[280px]" : "w-0"
        } h-screen overflow-hidden`} 
      >
        <RightSidebar />
      </aside>
    </div>
  );
}