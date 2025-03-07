export default function PackApprovals() {
    const order = {
      orderNumber: "25689183715",
      customerName: "Omar Apollo",
      orderDate: "Feb 18, 2025",
      status: "Pending",
      totalItems: 4,
      totalAmount: "$177.00",
      packedBy: "Joshua S.",
      packingTime: "5h 13m",
      photoTaken: "Feb 20, 2025 14:08 PM",
      address: "6340 14 Mile Rd, Warren, MI",
      shipping: "Next business day shipping",
      items: [
        {
          sku: "SB-143801",
          size: "5” X 5”",
          type: "Magnet",
          quantity: 100,
          image: "/images/item1.png",
        },
        {
          sku: "SB-143801",
          size: "5” X 5”",
          type: "Magnet",
          quantity: 100,
          image: "/images/item2.png",
        },
      ],
    };
  
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Pack Approvals</h2>
        </div>
  
        {/* Order Card */}
        <OrderCard order={order} />
  
        {/* Action Buttons */}
        <ActionButtons />
      </div>
    );
  }
  
  const OrderCard = ({ order }) => {
    return (
      <div className="border p-4 rounded-md shadow-sm bg-gray-50">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">{order.customerName}</h3>
            <p className="text-sm text-gray-600">Order #: {order.orderNumber}</p>
            <p className="text-sm text-gray-600">Date: {order.orderDate}</p>
          </div>
          <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm">
            {order.status}
          </span>
        </div>
  
        <div className="flex mt-4">
          <div className="flex-1">
            <p className="text-sm">
              <strong>Total Items:</strong> {order.totalItems}
            </p>
            <p className="text-sm">
              <strong>Total Amount:</strong> {order.totalAmount}
            </p>
            <p className="text-sm">
              <strong>Packed by:</strong> {order.packedBy}
            </p>
            <p className="text-sm">
              <strong>Packing Time:</strong> {order.packingTime}
            </p>
          </div>
          <div className="flex-1">
            <p className="text-sm">
              <strong>Photo Taken:</strong> {order.photoTaken}
            </p>
            <p className="text-sm">
              <strong>Address:</strong> {order.address}
            </p>
            <p className="text-sm">
              <strong>Shipping:</strong> {order.shipping}
            </p>
          </div>
        </div>
  
        {/* Order Items */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {order.items.map((item, index) => (
            <OrderItem key={index} item={item} />
          ))}
        </div>
      </div>
    );
  };
  
  const OrderItem = ({ item }) => {
    return (
      <div className="border rounded-md p-3 bg-white shadow">
        <img src={item.image} alt="Product" className="w-full h-20 object-cover rounded-md mb-2" />
        <p className="text-sm">
          <strong>SKU:</strong> {item.sku}
        </p>
        <p className="text-sm">
          <strong>Size & Type:</strong> {item.size}, {item.type}
        </p>
        <p className="text-sm">
          <strong>Quantity:</strong> {item.quantity}
        </p>
      </div>
    );
  };
  
  const ActionButtons = () => {
    return (
      <div className="flex justify-end mt-4 gap-4">
        <button className="px-4 py-2 bg-red-500 text-white rounded-md">Deny</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md">Approve</button>
      </div>
    );
  };
  