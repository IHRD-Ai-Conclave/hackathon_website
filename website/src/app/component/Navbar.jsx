"use client"
import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full h-16 flex justify-between items-center px-12 shadow-md bg-white">
      <div className="text-xl font-bold">nsdc</div>
      <div className="hidden md:flex space-x-8">
        <h2 className="cursor-pointer hover:text-gray-600">About</h2>
        <h2 className="cursor-pointer hover:text-gray-600">Who Should Apply</h2>
        <h2 className="cursor-pointer hover:text-gray-600">Timeline</h2>
        <h2 className="cursor-pointer hover:text-gray-600">Why Participate</h2>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <h2 className="cursor-pointer hover:text-gray-600">About</h2>
          <h2 className="cursor-pointer hover:text-gray-600">Who Should Apply</h2>
          <h2 className="cursor-pointer hover:text-gray-600">Timeline</h2>
          <h2 className="cursor-pointer hover:text-gray-600">Why Participate</h2>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
