"use client";

import { motion } from "framer-motion";
import { MenuIcon } from "@/components/Icons/MenuIcon";
import ProfileDropdown from "@/components/ProfileDropdown";
import Image from "next/image";
import  StickerBlitz  from "@/assets/images/StickerBlitz.svg";
import userImage from "@/assets/images/userImage.svg";

const Header = () => {
  const profileOptions = [
    { label: "Profile", value: "profile" },
    { label: "Settings", value: "settings" },
    { label: "Logout", value: "logout" },
  ];

  const handleDropdownSelect = (value) => {
    console.log("Selected:", value);
  };

  return (
    <motion.header
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="border-b border-gray-200 w-full flex items-center justify-between p-4"
    >
      <div className="lg:mr-48">
        <MenuIcon />
      </div>
      <div className="flex items-center text-center">
        <Image src={StickerBlitz} alt="StickerBlitz" />
      </div>
      <ProfileDropdown
        options={profileOptions}
        onSelect={handleDropdownSelect}
        userName="Joshua Stephens"
        userImage={userImage}
      />
    </motion.header>
  );
};

export default Header;
