"use client";

import React from "react";

import DropdownArrow from "@/components/shared/DropdownArrow";
import { NavbarConfig, NavbarConfigMenuItem } from "@/lib/interface";

const NavigationMenu = (props: NavbarConfig) => {
  const { name, items } = props;
  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="relative" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
      <div className="flex items-center mx-4 cursor-pointer">
        <h1 className="font-bold">{name}</h1>
        <DropdownArrow isOpen={open} />
      </div>

      {
        open && (
          <div className="absolute top-full left-0 w-60 p-4 rounded-md border-2 border-gray-100 bg-white shadow-lg overflow-hidden transition-all duration-500">
            {
              items.map((item: NavbarConfigMenuItem) => (
                <div key={item.id} className="px-4 py-1 rounded-sm hover:bg-gray-50 active:bg-gray-200 cursor-pointer">
                  {item.name}
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  );
};

export default NavigationMenu;