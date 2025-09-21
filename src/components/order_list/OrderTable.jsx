import React, { useState, useMemo } from "react";

import avatar1 from "../../assets/order_table/avatar1.png";
import avatar2 from "../../assets/order_table/avatar2.png";
import avatar3 from "../../assets/order_table/avatar3.png";
import avatar4 from "../../assets/order_table/avatar4.png";
import avatar5 from "../../assets/order_table/avatar5.png";


import plusIcon from "../../assets/order_table/Add.svg";
import filterIcon from "../../assets/order_table/FunnelSimple.svg";
import sortIcon from "../../assets/order_table/ArrowsDownUp.svg";
import searchIcon from "../../assets/order_table/Search.svg";
import calendarIcon from "../../assets/order_table/CalendarBlank.svg";
import moreIcon from "../../assets/order_table/DotsThreeOutlineVertical.svg";
import chevronLeftIcon from "../../assets/order_table/ArrowLineLeft.svg";
import chevronRightIcon from "../../assets/order_table/ArrowLineRight.svg";

const sampleUsers = [
  { name: "Natali Craig", avatar: avatar1 },
  { name: "Kate Morrison", avatar: avatar2 },
  { name: "Drew Cano", avatar: avatar3 },
  { name: "Orlando Diggs", avatar: avatar4 },
  { name: "Andi Lane", avatar: avatar5 },
];
const sampleProjects = [
  "Landing Page",
  "CRM Admin",
  "Client Project",
  "Dashboard",
  "Mobile App",
  "E-commerce",
];
const sampleAddresses = [
  "Meadow Lane",
  "San Francisco",
  "Bagwell Avenue",
  "Baton Rouge",
  "Nest Lane",
];
const sampleStatuses = [
  "In Progress",
  "Complete",
  "Pending",
  "Approved",
  "Rejected",
];

const initialData = Array.from({ length: 50 }, (_, i) => {
  const user = sampleUsers[i % sampleUsers.length];
  return {
    id: `#CM${9800 + i + 1}`,
    user: user.name,
    avatar: user.avatar,
    project: sampleProjects[i % sampleProjects.length],
    address: sampleAddresses[i % sampleAddresses.length],
    date:
      i < 5
        ? [
            "Just now",
            "A minute ago",
            "1 hour ago",
            "Yesterday",
            "Feb 2, 2023",
          ][i]
        : `Feb ${Math.floor(i / 2) + 1}, 2023`,
    status: sampleStatuses[i % sampleStatuses.length],
  };
});

const StatusBadge = ({ status }) => {
  const statusConfig = {
    "In Progress": { textColor: "text-[#8A8CD9]", dotColor: "bg-[#8A8CD9]" },
    Complete: { textColor: "text-emerald-500", dotColor: "bg-emerald-500" },
    Pending: { textColor: "text-[#59A8D4]", dotColor: "bg-[#59A8D4]" },
    Approved: { textColor: "text-[#FFC555]", dotColor: "bg-[#FFC555]" },
    Rejected: {
      textColor: "text-black/40 dark:text-white/40",
      dotColor: "bg-black/5 dark:bg-white/5",
    },
  };
  const config = statusConfig[status];
  return (
    <span
      className={`flex items-center gap-1.5 text-sm font-medium ${config.textColor}`}
    >
      <span className={`h-2 w-2 rounded-full ${config.dotColor}`}></span>
      {status}
    </span>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1).slice(
    0,
    5
  );
  return (
    <div className="flex items-center justify-end gap-2 text-sm text-black dark:text-white">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-md transition-colors hover:bg-primary-light dark:hover:bg-primary-dark disabled:opacity-50"
      >
        <img
          src={chevronLeftIcon}
          alt="Previous"
          className="w-4 h-4 dark:invert"
        />
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`h-8 w-8 rounded-md transition-colors ${
            page === currentPage
              ? "bg-black/5 dark:bg-white/5 text-black dark:text-white font-medium"
              : "hover:bg-primary-light dark:hover:bg-primary-dark"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-md transition-colors hover:bg-primary-light dark:hover:bg-primary-dark disabled:opacity-50"
      >
        <img
          src={chevronRightIcon}
          alt="Next"
          className="w-4 h-4 dark:invert"
        />
      </button>
    </div>
  );
};

export default function OrdersTable() {
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [sortDirection, setSortDirection] = useState("asc");
  const rowsPerPage = 10;
  const iconClasses = "w-4 h-4 dark:invert";

  const sortedAndFilteredData = useMemo(() => {
    let items = initialData.filter((row) =>
      Object.values(row).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    );
    items.sort((a, b) => {
      const aValue = parseInt(a.id.replace(/[^0-9]/g, ""), 10);
      const bValue = parseInt(b.id.replace(/[^0-9]/g, ""), 10);
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    });
    return items;
  }, [search, sortDirection]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return sortedAndFilteredData.slice(start, start + rowsPerPage);
  }, [sortedAndFilteredData, currentPage]);

  const totalPages = Math.ceil(sortedAndFilteredData.length / rowsPerPage);
  const toggleSortDirection = () =>
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  const handleSelectRow = (id) => {
    setSelectedRows((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };
  const handleSelectAll = (e) =>
    setSelectedRows(
      e.target.checked ? new Set(paginatedData.map((row) => row.id)) : new Set()
    );

  return (
    <div className="w-full h-[600px] p-6 bg-background-light dark:bg-background-dark  rounded-lg shadow-sm flex flex-col">
      {/* Header controls */}
      <div className="flex-shrink-0 flex items-center justify-between mb-4 p-3 bg-primary-light dark:bg-primary-dark rounded-md">
        <div className="flex items-center gap-2 text-black dark:text-white">
          <button className="p-2 rounded-md transition-colors hover:bg-primary-light dark:hover:bg-primary-dark">
            <img src={plusIcon} alt="Add" className={iconClasses} />
          </button>
          <button className="p-2 rounded-md transition-colors hover:bg-primary-light dark:hover:bg-primary-dark">
            <img src={filterIcon} alt="Filter" className={iconClasses} />
          </button>
          <button
            onClick={toggleSortDirection}
            className="p-2 rounded-md transition-colors hover:bg-primary-light dark:hover:bg-primary-dark"
          >
            <img src={sortIcon} alt="Sort" className={iconClasses} />
          </button>
        </div>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black/40 dark:text-white/40">
            <img src={searchIcon} alt="Search" className={iconClasses} />
          </span>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-64 h-9 pl-10 pr-4 bg-primary-light dark:bg-primary-dark border border-transparent rounded-lg text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple"
          />
        </div>
      </div>

      {/* Table */}
      <div className="w-full flex-1">
        <table className="w-full text-left table-fixed">
          <thead>
            <tr className="border-b border-borderc-light dark:border-borderc-dark text-sm text-black/40 dark:text-white/40">
              <th className="px-4 py-3 w-12">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  className="rounded"
                />
              </th>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Project</th>
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 w-12"></th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row) => (
              <tr
                key={row.id}
                className={`border-b border-black/5 dark:border-white/5 transition-colors
    ${
      selectedRows.has(row.id)
        ? "bg-primary-light dark:bg-primary-dark"
        : "hover:bg-primary-light dark:hover:bg-primary-dark"
    }`}
              >
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedRows.has(row.id)}
                    onChange={() => handleSelectRow(row.id)}
                    className="rounded"
                  />
                </td>
                <td className="px-4 py-3 text-sm text-black dark:text-white truncate">
                  {row.id}
                </td>
                <td className="px-4 py-3 text-sm text-black dark:text-white">
                  <div className="flex items-center gap-3">
                    <img
                      src={row.avatar}
                      alt={row.user}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="truncate">{row.user}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-black dark:text-white truncate">
                  {row.project}
                </td>
                <td className="px-4 py-3 text-sm text-black dark:text-white truncate">
                  {row.address}
                </td>
                <td className="px-4 py-3 text-sm text-black/40 dark:text-white/40">
                  <div className="flex items-center gap-2">
                    <img
                      src={calendarIcon}
                      alt="Date"
                      className="w-4 h-4 dark:invert"
                    />
                    <span className="truncate">{row.date}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-4 py-3 text-black/40 dark:text-white/40">
                  {selectedRows.has(row.id) && (
                    <button className="p-1 rounded-md hover:bg-primary-light/5 dark:hover:bg-primary-dark/5">
                      <img
                        src={moreIcon}
                        alt="More options"
                        className={iconClasses}
                      />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex-shrink-0 flex justify-end mt-auto pt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
