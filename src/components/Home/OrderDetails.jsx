import Reject from "@/assets/images/PackedBy.svg";
import Amount from "@/assets/images/TotalAmount.svg";
import PackingTime from "@/assets/images/PackingTime.svg";
import PhotoTaken from "@/assets/images/PhotoTaken.svg";
import Address from "@/assets/images/Address.svg";
import Shipping from "@/assets/images/Shipping.svg";
import Image from "next/image";

export default function OrderDetails({ order }) {
  return (
    <div className=" bg-[#F7F7F7] border rounded-md">
      <div className=" border-b-2 grid grid-cols-1 md:grid-cols-2 gap-6  p-4">
        <div className="flex items-center">
          <div className="p-1 bg-gray-100 rounded-full mr-1">
            <Image src={Reject} alt="Packed By" />
          </div>
          <div>
            <div className="text-[14px] font-[500] text-gray-500">Packed by</div>
            <div className="font-[500] text-[16px]">{order.packedBy}</div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="p-1 bg-gray-100 rounded-full mr-1">
            <Image src={Amount} alt="Total Amount" />
          </div>
          <div>
            <div className="text-[14px] font-[500] text-gray-500">Total Amount</div>
            <div className="font-[500] text-[16px]">${order.totalAmount.toFixed(2)}</div>
          </div>
        </div>
      </div>
      <div className=" border-b-2 grid grid-cols-1 md:grid-cols-2 gap-6  p-4">
        <div className="flex items-center">
          <div className="p-1 bg-gray-100 rounded-full mr-1">
            <Image src={PackingTime} alt="Packing Time" />
          </div>
          <div>
            <div className="text-[14px] font-[500] text-gray-500">Packing Time</div>
            <div className="font-[500] text-[16px]">{order.packingTime}</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="p-1 bg-gray-100 rounded-full mr-1">
            <Image src={Address} alt="Address" />
          </div>
          <div>
            <div className="text-[14px] font-[500] text-gray-500">Address</div>
            <div className="font-[500] text-[16px]">{order.shippingAddress}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  p-4">
        <div className="flex items-center">
          <div className="p-1 bg-gray-100 rounded-full mr-1">
            <Image src={PhotoTaken} alt="Photo Taken" />
          </div>
          <div>
            <div className="text-[14px] font-[500] text-gray-500">Photo Taken</div>
            <div className="font-[500] text-[16px]">{order.photoTaken}</div>
          </div>
        </div>
        <div className="flex items-center ">
          <div className="p-1 bg-gray-100 rounded-full mr-1">
            <Image src={Shipping} alt="Shipping" />
          </div>
          <div>
            <div className="text-[14px] font-[500] text-gray-500">Shipping Selected</div>
            <div className="font-[500] text-[16px]">{order.shippingMethod}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
