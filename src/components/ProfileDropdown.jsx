import Image from "next/image";
import Dropdown from "./reuseableComponents/Dropdown";

const ProfileDropdown = ({ onSelect, userName, userImage }) => {
  const profileOptions = [
    { label: "Profile", value: "Profile" },
    { label: "Setting", value: "Setting" },
    { label: "Logout", value: "Logout" },
  ];

  return (
    <Dropdown
      options={profileOptions}
      onSelect={onSelect}
      buttonContent={
        <>
          <Image
            src={userImage}
            alt="User"
            className="w-8 h-8 rounded-full"
          ></Image>
          <span className="text-sm font-medium">{userName}</span>
        </>
      }
    />
  );
};

export default ProfileDropdown;
