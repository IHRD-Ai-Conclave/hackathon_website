"use client"
import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={{backgroundColor:' #1d4fc4'}} className="w-full h-16 flex justify-between items-center px-12 shadow-md">
      <div className="text-xl font-bold">
        <Image width={150} height={150} src={'/icgaife24logo.png'}></Image>
      </div>
      <div style={{color:'yellow'}}  className="hidden md:flex space-x-8">
        <h2 style={{color:'yellow'}}  className="cursor-pointer hover:text-gray-600">About</h2>
        <a style={{color:'yellow'}}  href='#faq' className="cursor-pointer hover:text-gray-600">FAQ</a>
        <a style={{color:'yellow'}}  href ='#timeline'className="cursor-pointer hover:text-gray-600">Timeline</a>
        <a style={{color:'yellow'}}  href='#prize' className="cursor-pointer hover:text-gray-600">Why Participate</a>
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
          <a href='#faq' className="cursor-pointer hover:text-gray-600">FAQ</a>
          <a href='#timeline' className="cursor-pointer hover:text-gray-600">Timeline</a>
          <a href ='pize'className="cursor-pointer hover:text-gray-600">Why Participate</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
