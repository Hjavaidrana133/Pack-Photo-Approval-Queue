import Image from 'next/image';

export default function OrderItemCard({ item }) {
  return (
    <div className="border rounded-lg p-3 shadow-sm">
      <div className="mb-2">
        <Image 
          src="/api/placeholder/200/200"
          alt={item.name} 
          width={200} 
          height={200}
          className="w-full h-auto rounded"
        />
      </div>
      <div className="space-y-1">
        <DetailRow label="SKU" value={item.sku} />
        <DetailRow label="Size & Type" value={`${item.size}, ${item.type}`} />
        <DetailRow label="Quantity" value={item.quantity} />
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between text-xs text-gray-500">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}


export default function OrderItems({ items }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <OrderItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}