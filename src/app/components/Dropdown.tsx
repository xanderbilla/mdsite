import React, { useState } from "react";

type Props = {
  options: string[];
  onSelect: (selectedValue: string) => void;
};

export default function Dropdown({ options, onSelect }: Props) {
  const [selectedValue, setSelectedValue] = useState("General");

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="relative transition-all duration-1000 ease-in-out">
        <button
          className={`w-full bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex 
                                    items-center hover:bg-gray-300 justify-between ${
                                      isOpen ? "rotate-360" : ""
                                    }`}
          onClick={(e) => {
            e.preventDefault();
            toggleDropdown();
          }}
        >
          <span>{selectedValue || "Select an option"}</span>
          <div
            className={`${
              isOpen ? "rotate-180" : ""
            } transition-all ease-in-out duratio-[1500ms]`}
          >
            <svg
              className="404040e6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M6 8l4 4 4-4H6z" />
            </svg>
          </div>
        </button>
        {isOpen && (
          <ul className="absolute bg-white border border-gray-300 mt-1 py-1 w-full rounded-sm">
            {options.map((option, index) => (
              <li
                key={index}
                className="cursor-pointer py-1 px-4 hover:bg-gray-200"
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
