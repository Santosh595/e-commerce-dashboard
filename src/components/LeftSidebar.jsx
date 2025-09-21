// import React, { useState } from "react";

// // Import SVGs as image sources
// import ProfileAvatar from "../assets/left_sidebar/profile.svg";
// import ChartPieSlice from "../assets/left_sidebar/ChartPieSlice.svg";
// import ShoppingBagOpen from "../assets/left_sidebar/ShoppingBagOpen.svg";
// import FolderNotch from "../assets/left_sidebar/FolderNotch.svg";
// import BookOpen from "../assets/left_sidebar/BookOpen.svg";
// import IdentificationBadge from "../assets/left_sidebar/IdentificationBadge.svg";
// import IdentificationCard from "../assets/left_sidebar/IdentificationCard.svg";
// import UsersThree from "../assets/left_sidebar/UsersThree.svg";
// import Notebook from "../assets/left_sidebar/Notebook.svg";
// import ChatsTeardrop from "../assets/left_sidebar/ChatsTeardrop.svg";

// // Chevron icon
// const ChevronIcon = ({ isOpen }) => (
//   <svg
//     className={`w-3 h-3 text-text-light/40 dark:text-text-dark/40 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//     strokeWidth={4}
//   >
//     <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//   </svg>
// );

// const dashboardItems = [
//   { name: "Default", icon: ChartPieSlice },
//   { name: "eCommerce", icon: ShoppingBagOpen, isCollapsible: true },
//   { name: "Projects", icon: FolderNotch, isCollapsible: true },
//   { name: "Online Courses", icon: BookOpen, isCollapsible: true },
// ];

// const pageItems = [
//   { name: "User Profile", icon: IdentificationBadge, isCollapsible: true, children: ["Overview", "Projects", "Campaigns", "Documents", "Followers"] },
//   { name: "Account", icon: IdentificationCard, isCollapsible: true },
//   { name: "Corporate", icon: UsersThree, isCollapsible: true },
//   { name: "Blog", icon: Notebook, isCollapsible: true },
//   { name: "Social", icon: ChatsTeardrop, isCollapsible: true },
// ];

// export default function LeftSidebar() {
//   const [activeTab, setActiveTab] = useState("Favorites");
//   const [activeItem, setActiveItem] = useState("Default");
//   const [openSections, setOpenSections] = useState({ "User Profile": true });

//   const toggleSection = (sectionName) => {
//     setOpenSections(prev => ({ ...prev, [sectionName]: !prev[sectionName] }));
//   };

//   const navItemClasses = "flex items-center h-9 rounded-md transition-colors duration-200 text-sm";
//   const hoverClasses = "hover:bg-black/5 dark:hover:bg-white/5";
//   const sectionTitleClasses = "text-xs font-semibold text-text-light/40 dark:text-text-dark/40 tracking-wider  my-3";
//   const iconClasses = "w-5 h-5 dark:invert";

//   return (
//     <div className="flex flex-col h-full p-4 px-8 overflow-y-auto bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      
//       {/* Profile */}
//       <div className="flex items-center gap-3 px-2.5">
//         <img src={ProfileAvatar} alt="Profile" className="w-8 h-8 rounded-full" />
//         <span className="text-base font-semibold truncate text-text-light dark:text-text-dark">ByeWind</span>
//       </div>

//       {/* Tabs */}
//       <div className="mt-6">
//         <div className="flex gap-4 px-2.5 text-sm font-medium text-text-light/40 dark:text-text-dark/40">
//           <button 
//             className={`pb-1 transition-colors duration-200 ${activeTab === 'Favorites' ? 'text-text-light dark:text-text-dark' : 'text-text-light/40 dark:text-text-dark/40 hover:text-text-light dark:hover:text-text-dark'}`}
//             onClick={() => setActiveTab('Favorites')}
//           >
//             Favorites
//           </button>
//           <button 
//             className={`pb-1 transition-colors duration-200 ${activeTab === 'Recently' ? 'text-text-light dark:text-text-dark' : 'text-text-light/40 dark:text-text-dark/40 hover:text-text-light dark:hover:text-text-dark'}`}
//             onClick={() => setActiveTab('Recently')}
//           >
//             Recently
//           </button>
//         </div>
//         <ul className="mt-3 pl-4 text-sm space-y-2 ">
//           <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-text-light/40 dark:bg-text-dark/40"></span>Overview</li>
//           <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-text-light/40 dark:bg-text-dark/40"></span>Projects</li>
//         </ul>
//       </div>

//       {/* Dashboards */}
//       <div className="mt-6">
//         <p className={sectionTitleClasses}>Dashboards</p>
//         <div className="flex flex-col space-y-1">
//           {dashboardItems.map(({ name, icon, isCollapsible }) => (
//             <button
//               key={name}
//               onClick={() => setActiveItem(name)}
//               className={`${navItemClasses} ${activeItem === name ? "bg-black/5 dark:bg-white/5 font-semibold text-text-light dark:text-text-dark" : hoverClasses + " text-text-light dark:text-text-dark"}`}
//             >
//               <div className={`w-1 h-5 rounded-full ${activeItem === name ? 'bg-text-light dark:bg-text-dark' : 'bg-transparent'}`}></div>
//               {isCollapsible && activeItem !== name ? <ChevronIcon isOpen={false} /> : <div className="w-3"></div>}
//               <img src={icon} alt={name} className={iconClasses} />
//               <span className="truncate text-text-light dark:text-text-dark">{name}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Pages */}
//       <div className="mt-6 flex-1">
//         <p className={sectionTitleClasses}>Pages</p>
//         <div className="flex flex-col space-y-1">
//           {pageItems.map(({ name, icon, children }) => (
//             <div key={name}>
//               <button
//                 onClick={() => children && toggleSection(name)}
//                 className={`${navItemClasses} w-full ${hoverClasses} text-text-light dark:text-text-dark`}
//               >
//                 <div className="w-1"></div>
//                 <ChevronIcon isOpen={openSections[name]} />
//                 <img src={icon} alt={name} className={iconClasses} />
//                 <span className="truncate text-text-light dark:text-text-dark">{name}</span>
//               </button>

//               {children && openSections[name] && (
//                 <ul className="pl-14 mt-2 text-sm space-y-2.5 text-text-light dark:text-text-dark">
//                   {children.map(child => (
//                     <li key={child} className="cursor-pointer hover:text-text-light dark:hover:text-text-dark">{child}</li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Import SVGs as image sources
import ProfileAvatar from "../assets/left_sidebar/profile.svg";
import ChartPieSlice from "../assets/left_sidebar/ChartPieSlice.svg";
import ShoppingBagOpen from "../assets/left_sidebar/ShoppingBagOpen.svg";
import FolderNotch from "../assets/left_sidebar/FolderNotch.svg";
import BookOpen from "../assets/left_sidebar/BookOpen.svg";
import IdentificationBadge from "../assets/left_sidebar/IdentificationBadge.svg";
import IdentificationCard from "../assets/left_sidebar/IdentificationCard.svg";
import UsersThree from "../assets/left_sidebar/UsersThree.svg";
import Notebook from "../assets/left_sidebar/Notebook.svg";
import ChatsTeardrop from "../assets/left_sidebar/ChatsTeardrop.svg";

// Chevron icon
const ChevronIcon = ({ isOpen }) => (
  <svg
    className={`w-3 h-3 text-text-light/40 dark:text-text-dark/40 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={4}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const dashboardItems = [
  { name: "Default", icon: ChartPieSlice },
  { name: "eCommerce", icon: ShoppingBagOpen, isCollapsible: true },
  { name: "Projects", icon: FolderNotch, isCollapsible: true },
  { name: "Online Courses", icon: BookOpen, isCollapsible: true },
];

const pageItems = [
  { name: "User Profile", icon: IdentificationBadge, isCollapsible: true, children: ["Overview", "Projects", "Campaigns", "Documents", "Followers"] },
  { name: "Account", icon: IdentificationCard, isCollapsible: true },
  { name: "Corporate", icon: UsersThree, isCollapsible: true },
  { name: "Blog", icon: Notebook, isCollapsible: true },
  { name: "Social", icon: ChatsTeardrop, isCollapsible: true },
];

export default function LeftSidebar() {
  const navigate = useNavigate(); // Initialize navigate
  const [activeTab, setActiveTab] = useState("Favorites");
  const [activeItem, setActiveItem] = useState("Default"); // Default to "Default" for root navigation
  const [openSections, setOpenSections] = useState({ "User Profile": true });

  const toggleSection = (sectionName) => {
    setOpenSections(prev => ({ ...prev, [sectionName]: !prev[sectionName] }));
  };

  const navItemClasses = "flex items-center h-9 rounded-md transition-colors duration-200 text-sm";
  const hoverClasses = "hover:bg-black/5 dark:hover:bg-white/5";
  const sectionTitleClasses = "text-xs font-semibold text-text-light/40 dark:text-text-dark/40 tracking-wider my-3";
  const iconClasses = "w-5 h-5 dark:invert";

  // Handle navigation on item click
  const handleItemClick = (name) => {
    setActiveItem(name);
    if (name === "eCommerce") {
      navigate("/orderlist");
    } else {
      navigate("/"); // Default navigation to root
    }
  };

  return (
    <div className="flex flex-col h-full p-4 px-8 overflow-y-auto bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      
      {/* Profile */}
      <div className="flex items-center gap-3 px-2.5">
        <img src={ProfileAvatar} alt="Profile" className="w-8 h-8 rounded-full" />
        <span className="text-base font-semibold truncate text-text-light dark:text-text-dark">ByeWind</span>
      </div>

      {/* Tabs */}
      <div className="mt-6">
        <div className="flex gap-4 px-2.5 text-sm font-medium text-text-light/40 dark:text-text-dark/40">
          <button 
            className={`pb-1 transition-colors duration-200 ${activeTab === 'Favorites' ? 'text-text-light dark:text-text-dark' : 'text-text-light/40 dark:text-text-dark/40 hover:text-text-light dark:hover:text-text-dark'}`}
            onClick={() => setActiveTab('Favorites')}
          >
            Favorites
          </button>
          <button 
            className={`pb-1 transition-colors duration-200 ${activeTab === 'Recently' ? 'text-text-light dark:text-text-dark' : 'text-text-light/40 dark:text-text-dark/40 hover:text-text-light dark:hover:text-text-dark'}`}
            onClick={() => setActiveTab('Recently')}
          >
            Recently
          </button>
        </div>
        <ul className="mt-3 pl-4 text-sm space-y-2 ">
          <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-text-light/40 dark:bg-text-dark/40"></span>Overview</li>
          <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-text-light/40 dark:bg-text-dark/40"></span>Projects</li>
        </ul>
      </div>

      {/* Dashboards */}
      <div className="mt-6">
        <p className={sectionTitleClasses}>Dashboards</p>
        <div className="flex flex-col space-y-1">
          {dashboardItems.map(({ name, icon, isCollapsible }) => (
            <button
              key={name}
              onClick={() => handleItemClick(name)} // Use handleItemClick for navigation
              className={`${navItemClasses} ${activeItem === name ? "bg-black/5 dark:bg-white/5 font-semibold text-text-light dark:text-text-dark" : hoverClasses + " text-text-light dark:text-text-dark"}`}
            >
              <div className={`w-1 h-5 rounded-full ${activeItem === name ? 'bg-text-light dark:bg-text-dark' : 'bg-transparent'}`}></div>
              {isCollapsible && activeItem !== name ? <ChevronIcon isOpen={false} /> : <div className="w-3"></div>}
              <img src={icon} alt={name} className={iconClasses} />
              <span className="truncate text-text-light dark:text-text-dark">{name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Pages */}
      <div className="mt-6 flex-1">
        <p className={sectionTitleClasses}>Pages</p>
        <div className="flex flex-col space-y-1">
          {pageItems.map(({ name, icon, children }) => (
            <div key={name}>
              <button
                onClick={() => children && toggleSection(name)}
                className={`${navItemClasses} w-full ${hoverClasses} text-text-light dark:text-text-dark`}
              >
                <div className="w-1"></div>
                <ChevronIcon isOpen={openSections[name]} />
                <img src={icon} alt={name} className={iconClasses} />
                <span className="truncate text-text-light dark:text-text-dark">{name}</span>
              </button>

              {children && openSections[name] && (
                <ul className="pl-14 mt-2 text-sm space-y-2.5 text-text-light dark:text-text-dark">
                  {children.map(child => (
                    <li key={child} className="cursor-pointer hover:text-text-light dark:hover:text-text-dark">{child}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}