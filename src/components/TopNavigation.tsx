import React, { useState, useEffect } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

const TopNavigation: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="flex fixed pl-32 xl:pr-[385px] 2xl:pr-[415px] z-10 top-0 right-0 left-0 items-center justify-between p-7 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
      <div className="relative hidden md:flex items-center w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full pl-4 pr-10 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
        />
        {searchText && (
          <button
            onClick={() => setSearchText("")}
            className="absolute right-10 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            ✖️
          </button>
        )}
        <RiSearch2Line className="absolute right-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
      </div>

      <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-5">
        <button
          onClick={handleToggleTheme}
          className="p-2 rounded-lg focus:outline-none bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
        >
          {isDarkMode ? (
            <MdOutlineWbSunny className="h-6 w-6" aria-hidden="true" />
          ) : (
            <IoMoonOutline className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        <button className="relative text-gray-700 dark:text-gray-200 p-2 rounded-lg focus:outline-none bg-gray-100 dark:bg-gray-800">
          <FiBell className="h-6 w-6" aria-hidden="true" />
          <span className="absolute top-0.5 right-1.5 inline-flex items-center justify-center px-1.5 py-1.5 text-xs font-semibold text-white bg-red-500 rounded-full"></span>
        </button>
      </div>
    </div>
  );
};

export default TopNavigation;
