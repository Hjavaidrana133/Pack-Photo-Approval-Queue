import Image from 'next/image';
  
export default function OrderItems({ items }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <div key={item.id} className="border rounded-lg p-3 shadow-sm">
          <div className="mb-2">
            <Image 
              src={item.image}
              alt={item.name} 
              width={150} 
              height={100}
              className="w-full h-[204px] border rounded-md"
            />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-gray-500">
              <span>SKU</span>
              <span>{item.sku}</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Size & Type</span>
              <span className='font-[500] text-black'>{item.size}, {item.type}</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Quantity</span>
              <span className='font-[500] text-black'>{item.quantity}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}