export default function OrderActions({ onApprove, onDeny }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={onApprove}
        className="w-full py-3 px-4 bg-red-500 text-white font-bold rounded-full hover:bg-red-600 transition-colors"
      >
        Approve
      </button>
      <button
        onClick={onDeny}
        className="w-full py-3 px-4 bg-white text-gray-700 font-bold rounded-full border border-black hover:bg-gray-50 transition-colors"
      >
        Deny
      </button>
    </div>
  );
}
