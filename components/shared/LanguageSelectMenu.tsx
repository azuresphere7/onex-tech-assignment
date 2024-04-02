import Image from "next/image";
import React from "react";
import DropdownArrow from "./DropdownArrow";

// Language selection button (static)
const LanguageSelectMenu = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <Image
        alt="dropdown-arrow"
        src={"/assets/images/flag.png"}
        width={28}
        height={20}
        className="mx-2"
        unoptimized
      />

      <DropdownArrow />
    </div>
  );
};

export default LanguageSelectMenu;