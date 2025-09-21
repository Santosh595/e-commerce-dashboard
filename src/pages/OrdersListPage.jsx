import { useEffect, useState } from "react";
import TopNavbar from "../components/TopNavbar";
import OrdersTable from "../components/order_list/OrderTable";
import LeftSidebar from "../components/LeftSidebar";

export default function OrdersListPage() {
 
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="h-screen w-screen flex bg-background-light dark:bg-background-dark">
            {/* Sidebar */}
            <aside className="w-[212px] h-full border-r border-neutral-200 dark:border-neutral-800">
                <LeftSidebar />
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <TopNavbar toggleDarkMode={toggleDarkMode} />

                {/* Table Section */}
                <main className="flex-1 px-7 py-5 overflow-hidden">
                    <OrdersTable />
                </main>
            </div>
        </div>
    );
}