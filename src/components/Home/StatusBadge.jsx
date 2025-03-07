import { SlClock } from "react-icons/sl";
import { SiTicktick } from "react-icons/si";
import { RxCrossCircled } from "react-icons/rx";

export default function StatusBadge({ status }) {
  const colorMap = {
    Pending: {
      bg: "bg-[#FD7004]",
      text: "text-white",
      icon: <SlClock />,
    },
    Approved: {
      bg: "bg-[#FF4641]",
      text: "text-white",
      icon: <SiTicktick />,
    },
    Rejected: {
      bg: "bg-[#A1A1A1]",
      text: "text-white",
      icon: <RxCrossCircled />,
    },
  };

  // Default to pending if status not found in map
  const colors = colorMap[status] || colorMap["Pending"];

  return (
    <div
      className={`font-semibold rounded-full flex flex-row lg:w-[55%] w-full px-4 py-1 gap-2 items-center  ${colors.bg} ${colors.text}`}
    >
      <span className={`rounded-full`}>{colors.icon}</span>
      <span>{status}</span>
    </div>
  );
}
