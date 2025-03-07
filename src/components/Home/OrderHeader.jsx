import React, { useState } from "react";
import StatusBadge from "./StatusBadge";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import OrderItems from "./OrderItems";
import OrderDetails from "./OrderDetails";
import OrderActions from "./OrderActions";
import Image from "next/image";
import Image1 from "@/assets/images/SB-143801-packed 1 1.svg";

export default function OrderHeader({ orders }) {
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const handleToggleOrder = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  const handleApprove = () => {
    console.log("Order approved");
  };

  const handleDeny = () => {
    console.log("Order denied");
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-[#F7F7F7]">
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Order Number
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Order Date
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total Order
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total Amount
            </th>
            <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="">
          {orders &&
            orders.map((order) => (
              <React.Fragment key={order.id} className="">
                <tr className=" gap-3">
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-md overflow-hidden">
                        <div className="h-full w-full flex items-center justify-center">
                          <span className="text-xs">IMG</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {order.customerName}
                        </div>
                        <div className="text-sm font-[500] text-[#FF4641] flex gap-1">
                          <span className="underline">{order.id}</span>
                          <span className="ml-1 px-1.5 py-0.5 text-xs font-semibold rounded bg-blue-100 text-blue-800">
                           {"NEW"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.orderDate}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.totalItems} Items
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    ${order.totalAmount.toFixed(2)}
                  </td>
                  <td className="whitespace-nowrap text-sm text-end pr-4">
                    <button
                      onClick={() => handleToggleOrder(order.id)}
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 border rounded-3xl font-semibold border-gray-500"
                    >
                      {expandedOrderId === order.id ? "Hide" : "View"}
                      {expandedOrderId === order.id ? (
                        <FaChevronUp className="text-xs text-gray-500" />
                      ) : (
                        <FaChevronDown className="text-xs text-gray-500" />
                      )}
                    </button>
                  </td>
                </tr>
                {expandedOrderId === order.id && (
                  <tr>
                    <td colSpan="6" className="p-0">
                      <div className="border-t-0 border-x border-b rounded-b-lg">
                        <div className="p-4">
                          <div className="mb-6">
                            <div className="flex flex-col md:flex-row">
                              <div className="w-full md:w-[60%] mb-4 md:mb-0 md:pr-2">
                                <div className="border rounded-lg overflow-hidden">
                                  <Image
                                    src={Image1}
                                    alt="Order Items"
                                    width={750}
                                    height={395}
                                    className="w-full h-[604px] object-cover"
                                  />
                                </div>
                              </div>
                              <div className="w-full md:w-[40%] h-[604px] md:pl-2">
                                <OrderItems items={order.items} />
                              </div>
                            </div>
                          </div>

                          <OrderDetails order={order} />
                        </div>

                        <div className="p-4 border-t">
                          <OrderActions
                            onApprove={handleApprove}
                            onDeny={handleDeny}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
}
