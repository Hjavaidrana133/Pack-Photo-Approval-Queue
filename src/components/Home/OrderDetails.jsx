export default function OrderDetails({ order }) {
  return (
    <div className=" bg-[#F7F7F7] border rounded-md">
      <div className=" border-b-2 grid grid-cols-1 md:grid-cols-2 gap-6  p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1 mr-3">
            <div className="p-1 bg-gray-100 rounded-full">
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Packed by</div>
            <div className="font-semibold">{order.packedBy}</div>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1 mr-3">
            <div className="p-1 bg-gray-100 rounded-full">
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Total Amount</div>
            <div className="font-semibold">${order.totalAmount.toFixed(2)}</div>
          </div>
        </div>
      </div>
      <div className=" border-b-2 grid grid-cols-1 md:grid-cols-2 gap-6  p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1 mr-3">
            <div className="p-1 bg-gray-100 rounded-full">
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Packing Time</div>
            <div className="font-semibold">{order.packingTime}</div>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1 mr-3">
            <div className="p-1 bg-gray-100 rounded-full">
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Photo Taken</div>
            <div className="font-semibold">{order.photoTaken}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1 mr-3">
            <div className="p-1 bg-gray-100 rounded-full">
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Address</div>
            <div className="font-semibold">{order.shippingAddress}</div>
          </div>
        </div>

        <div className="flex items-start ">
          <div className="flex-shrink-0 mt-1 mr-3">
            <div className="p-1 bg-gray-100 rounded-full">
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Shipping Selected</div>
            <div className="font-semibold">{order.shippingMethod}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
