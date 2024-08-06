// components/Collapsible.js

import React, { useState } from 'react';
//import { PlusIcon, MinusIcon } from '@heroicons/react/';
import { FaAngleDoubleDown } from "react-icons/fa";
import { MdOutlineArrowUpward } from "react-icons/md";
import AddCircleIcon from '@mui/icons-material/AddCircle';
const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-md border bg-background p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h4 className="font-semi-bold">{title}</h4>
        <button onClick={toggleCollapsible} className="ghost-button">
          {isOpen ? (
            <AddCircleIcon color='primary' className="h-6 w-6 transition-transform duration-300" />
          ) : (
            <AddCircleIcon color='primary' className="h-6 w-6 transition-transform duration-300" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="pt-4 text-muted-foreground font-light">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapsible;
