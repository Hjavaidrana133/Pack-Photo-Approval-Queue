// "use client";

// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { FaSyncAlt } from "react-icons/fa";
// import Dropdown from "../reuseableComponents/Dropdown";
// import OrderPage from "./OrderPage";
// import { tableListing } from "@/assets/mockData/tableListing";


// const HomeComponent = () => {
//   const [activeTab, setActiveTab] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortOption, setSortOption] = useState("newest");

//   const tabs = [
//     {
//       label: "All Orders",
//       value: "all",
//       count: 2,
//       color: "bg-red-500 text-white",
//     },
//     {
//       label: "Pending",
//       value: "pending",
//       count: 2,
//       color: "bg-gray-200 text-gray-700",
//     },
//     {
//       label: "Approved",
//       value: "approved",
//       count: 0,
//       color: "bg-gray-200 text-gray-700",
//     },
//     {
//       label: "Rejected",
//       value: "rejected",
//       count: 0,
//       color: "bg-gray-200 text-gray-700",
//     },
//   ];

//   const sortOptions = [
//     { label: "Newest", value: "newest" },
//     { label: "Oldest", value: "oldest" },
//   ];
//   return (
//     <>
//       <div className="p-6 bg-white shadow-md rounded-lg">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-[32px] font-bold">Pack Approvals</h2>
//           <div className="flex items-center gap-4 text-gray-500 text-sm">
//             <span>Last updated: Feb 20, 2025 14:08 PM</span>
//             <button className="flex items-center gap-1 text-black font-bold">
//               <FaSyncAlt className="text-sm" />
//               Refresh
//             </button>
//           </div>
//         </div>

//         <div className="flex justify-between items-center mt-4">
//           <div className="flex gap-3">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.value}
//                 onClick={() => setActiveTab(tab.value)}
//                 className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium ${
//                   activeTab === tab.value
//                     ? "bg-red-500 text-white"
//                     : "bg-gray-200 text-gray-700"
//                 }`}
//               >
//                 {tab.label}
//                 <span className="bg-white text-gray-700 px-2 py-1 rounded-full text-xs font-bold">
//                   {tab.count}
//                 </span>
//               </button>
//             ))}
//           </div>

//           <div className="flex flex-row gap-7">
//             <div className="relative">
//               <FaSearch className="absolute left-3 top-3.5 text-gray-400 text-md" />
//               <input
//                 type="text"
//                 placeholder="Search orders or packs"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-[400px] pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300"
//               />
//             </div>

//             {/* Sort Dropdown */}
//             <Dropdown
//               options={sortOptions}
//               onSelect={(value) => setSortOption(value)}
//               buttonContent={
//                 <>
//                   <span className="text-gray-700 text-sm font-medium">
//                     {sortOptions.find((opt) => opt.value === sortOption)?.label}
//                   </span>
//                 </>
//               }
//               className={
//                 "border flex items-center rounded-3xl font-semibold border-[#000000]"
//               }
//             />
//           </div>
//         </div>
//       </div>

//       <OrderPage tableListing={tableListing} />
//     </>
//   );
// };

// export default HomeComponent;


"use client";

import React, { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";
import Dropdown from "../reuseableComponents/Dropdown";
import OrderPage from "./OrderPage";
import { tableListing } from "@/assets/mockData/tableListing";

const HomeComponent = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("newest");

  // Calculate the counts for each status
  const statusCounts = useMemo(() => {
    const counts = {
      all: tableListing.length,
      pending: tableListing.filter(order => order.status === "Pending").length,
      approved: tableListing.filter(order => order.status === "Approved").length,
      rejected: tableListing.filter(order => order.status === "Rejected").length
    };
    return counts;
  }, []);

  const tabs = [
    {
      label: "All Orders",
      value: "all",
      count: statusCounts.all,
      color: "bg-red-500 text-white",
    },
    {
      label: "Pending",
      value: "pending",
      count: statusCounts.pending,
      color: "bg-gray-200 text-gray-700",
    },
    {
      label: "Approved",
      value: "approved",
      count: statusCounts.approved,
      color: "bg-gray-200 text-gray-700",
    },
    {
      label: "Rejected",
      value: "rejected",
      count: statusCounts.rejected,
      color: "bg-gray-200 text-gray-700",
    },
  ];

  const sortOptions = [
    { label: "Newest", value: "newest" },
    { label: "Oldest", value: "oldest" },
  ];

  const filteredData = useMemo(() => {
    let filtered = [...tableListing];
    
    if (activeTab !== "all") {
      const statusFilter = activeTab.charAt(0).toUpperCase() + activeTab.slice(1);
      filtered = filtered.filter(order => order.status === statusFilter);
    }
    
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(order => 
        order.customerName.toLowerCase().includes(query) ||
        order.id.toLowerCase().includes(query)
      );
    }
    
    return filtered.sort((a, b) => {
      const dateA = new Date(a.orderDate);
      const dateB = new Date(b.orderDate);
      
      if (sortOption === "newest") {
        return dateB - dateA; 
      } else {
        return dateA - dateB; 
      }
    });
  }, [activeTab, searchQuery, sortOption]);

  return (
    <>
      <div className="p-6 bg-white shadow-md rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[32px] font-bold">Pack Approvals</h2>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <span>Last updated: Feb 20, 2025 14:08 PM</span>
            <button className="flex items-center gap-1 text-black font-bold">
              <FaSyncAlt className="text-sm" />
              Refresh
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium ${
                  activeTab === tab.value
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {tab.label}
                <span className="bg-white text-gray-700 px-2 py-1 rounded-full text-xs font-bold">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          <div className="flex flex-row gap-7">
            <div className="relative">
              <FaSearch className="absolute left-3 top-3.5 text-gray-400 text-md" />
              <input
                type="text"
                placeholder="Search orders or packs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[400px] pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            {/* Sort Dropdown */}
            <Dropdown
              options={sortOptions}
              onSelect={(value) => setSortOption(value)}
              buttonContent={
                <>
                  <span className="text-gray-700 text-sm font-medium">
                    {sortOptions.find((opt) => opt.value === sortOption)?.label}
                  </span>
                </>
              }
              className={
                "border flex items-center rounded-3xl font-semibold border-[#000000]"
              }
            />
          </div>
        </div>
      </div>

      <OrderPage tableListing={filteredData} />
    </>
  );
};

export default HomeComponent;