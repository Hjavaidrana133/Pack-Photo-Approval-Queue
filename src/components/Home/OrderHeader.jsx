import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import OrderItems from "./OrderItems";
import OrderDetails from "./OrderDetails";
import OrderActions from "./OrderActions";
import Image from "next/image";
import Image1 from "@/assets/images/SB-143801-packed 1 1.svg";
import Pending from "@/assets/images/Pending.svg";
import Approved from "@/assets/images/Approved.svg";
import Reject from "@/assets/images/Reject.svg";


const HeaderValue = [
  "Order Number",
  "Order Date",
  "Status",
  "Total Order",
  "Total Amount",
  "",
];

export default function OrderHeader({ orders }) {
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const handleToggleOrder = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  const handleApprove = () => console.log("Order approved");
  const handleDeny = () => console.log("Order denied");

  const renderStatusBadge = (status) => {
    let styles =
      {
        Pending: "bg-orange-500 text-white",
        Approved: "bg-red-500 text-white",
        Rejected: "bg-gray-400 text-white",
      }[status] || "bg-gray-200 text-gray-800";

    return (
      <div
        className={`inline-flex items-center px-3 py-1 rounded-full font-[700] text-sm ${styles}`}
      >
        <Image
          src={
            status === "Pending"
              ? Pending
              : status === "Approved"
              ? Approved
              : Reject
          }
          alt="status Image"
          className="h-4 w-4 mr-1"
        />
        {/* {}{" "} */}
        {status}
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-6 gap-4 px-4 py-3 font-semibold bg-[#F7F7F7] mb-3 rounded-md">
        {HeaderValue.map((item, index) => (
          <div key={index} className="text-[#666666] font-[600] text-[14px]">
            {item}
          </div>
        ))}
      </div>

      {orders?.map((order) => (
        <div
          key={order.id}
          className={` ${
            order.id === expandedOrderId
              ? "border border-[#FF4641] rounded-lg"
              : "border"
          } mb-3 rounded-xl bg-white items-center`}
        >
          <div
            className={`grid grid-cols-6 gap-4 px-4 py-4 items-center ${
              order.id === expandedOrderId
                ? "bg-[#FFF8F7] border-[#FF4641] rounded-t-xl border-b"
                : ""
            }`}
          >
            <div className={`flex items-center`}>
              <div className="bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-600">
                <Image
                  src={Image1}
                  alt="user"
                  className="object-cover h-10 w-10 rounded-md"
                ></Image>
              </div>
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-900">
                  {order.customerName}
                </div>
                <div className="text-sm font-medium text-red-500 flex items-center gap-1">
                  <span className="underline">{order.id}</span>
                  {order.isNew && (
                    <span className="px-1.5 py-0.5 text-xs font-semibold rounded bg-blue-100 text-blue-800">
                      NEW
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="text-sm text-[#000000] font-[500]">
              {order.orderDate}
            </div>
            <div>{renderStatusBadge(order.status)}</div>
            <div className="text-sm text-[#000000] font-[500]">
              {order.totalItems} Items
            </div>
            <div className="text-sm text-[#000000] font-[700]">
              ${order.totalAmount.toFixed(2)}
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => handleToggleOrder(order.id)}
                className="flex items-center gap-2 px-4 py-2 border border-[#ADADAD] rounded-full font-medium text-sm"
              >
                View{" "}
                {expandedOrderId === order.id ? (
                  <FaChevronUp className="text-xs text-gray-500" />
                ) : (
                  <FaChevronDown className="text-xs text-gray-500" />
                )}
              </button>
            </div>
          </div>

          {expandedOrderId === order.id && (
            <div className="col-span-6">
              <div className="flex flex-col md:flex-row px-4 py-2">
                <div className="w-full md:w-3/5 pr-2">
                  <Image
                    src={Image1}
                    alt="Order Items"
                    width={750}
                    height={395}
                    className="w-full h-[604px] object-cover rounded-lg"
                  />
                </div>
                <div className="w-full md:w-2/5 pl-2 overflow-auto max-h-[604px]">
                  <OrderItems items={order.items} />
                </div>
              </div>
              <div className="px-4 py-2">
                <OrderDetails order={order} />
              </div>
              <div
                className={`mt-4 p-4 ${
                  order.id === expandedOrderId
                    ? "border-t border-t-[#FF4641] bg-[#FFF8F7]  rounded-b-xl"
                    : ""
                }`}
              >
                <OrderActions onApprove={handleApprove} onDeny={handleDeny} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
