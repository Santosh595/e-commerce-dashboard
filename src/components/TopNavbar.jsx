import sidebarLeftIcon from "../assets/top_navbar/Sidebar.svg";
import starIcon from "../assets/top_navbar/Star.svg";
import searchIcon from "../assets/top_navbar/Search.svg";
import sunIcon from "../assets/top_navbar/Sun.svg";
import clockIcon from "../assets/top_navbar/Clock.svg";
import bellIcon from "../assets/top_navbar/Bell.svg";

export default function TopNavbar({ toggleLeftSidebar, toggleRightSidebar }) {
  const iconClasses = "h-5 w-5 dark:invert";
  const btnClass = "transition-opacity hover:opacity-75";

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className="w-full h-16 flex items-center justify-between flex-shrink-0 px-6 
                 bg-background-light dark:bg-background-dark 
                 border-b border-borderc-light dark:border-borderc-dark"
    >
      {/* Left section */}
      <div className="flex items-center gap-4">
        <button onClick={toggleLeftSidebar} className={btnClass} aria-label="Toggle left sidebar">
          <img src={sidebarLeftIcon} alt="Sidebar" className={iconClasses} />
        </button>
        <button className={btnClass} aria-label="Favorites">
          <img src={starIcon} alt="Favorites" className={iconClasses} />
        </button>
        <nav className="flex items-center text-sm">
          <span className="text-primary/60 dark:text-white/40">Dashboards</span>
          <span className="mx-2 text-primary/40 dark:text-white/40">/</span>
          <span className="font-semibold text-text-light dark:text-text-dark">Default</span>
        </nav>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Search input */}
        <div className="relative items-center hidden sm:flex">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/40 dark:text-white/40">
            <img src={searchIcon} alt="Search" className="h-4 w-4 dark:invert" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-48 md:w-64 lg:w-80 h-9
                       bg-primary-light dark:bg-primary-dark
                       border border-borderc-light dark:border-borderc-dark
                       rounded-lg pl-9 pr-12 text-sm
                       placeholder:text-primary/40 dark:placeholder:text-white/40
                       text-text-light dark:text-text-dark
                       focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-white/40
                       transition-all"
          />
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2
                       text-primary/40 dark:text-white/40 text-sm font-mono
                       border border-borderc-light dark:border-borderc-dark
                       rounded-md px-1.5 py-0.5"
          >
            ⌘/
          </span>
        </div>

        {/* Action buttons */}
        <button onClick={toggleDarkMode} className={btnClass} aria-label="Toggle theme">
          <img src={sunIcon} alt="Theme" className={iconClasses} />
        </button>
        <button className={btnClass} aria-label="View history">
          <img src={clockIcon} alt="History" className={iconClasses} />
        </button>
        <button className={btnClass} aria-label="Notifications">
          <img src={bellIcon} alt="Notifications" className={iconClasses} />
        </button>
        <button onClick={toggleRightSidebar} className={btnClass} aria-label="Toggle right panel">
          <img src={sidebarLeftIcon} alt="Right Panel" className={`${iconClasses} rotate-180`} />
        </button>
      </div>
    </header>
  );
}
