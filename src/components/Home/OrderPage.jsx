import OrderHeader from "./OrderHeader";

export default function OrderPage({ tableListing }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="">
        <div className="bg-white rounded-lg pb-6 overflow-hidden">
          <div className="pt-4 px-1 mx-4">
            {tableListing.length > 0 ? (
              <OrderHeader orders={tableListing} />
            ) : (
              <div className="text-center mb-4">
                <p>No data found.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
