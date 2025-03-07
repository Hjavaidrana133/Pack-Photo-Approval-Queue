"use client";
import React from 'react';
import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const Dropdown = ({ options, onSelect, buttonContent, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative inline-block text-left ${className}`}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-gray-700"
      >
        {buttonContent}
        <FaChevronDown className="text-xs text-gray-500" />
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10"
        >
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onSelect(option.value);
                setIsOpen(false);
              }}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default Dropdown;
