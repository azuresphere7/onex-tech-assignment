import Image from "next/image";
import React from "react";

const DropdownArrow = ({ isOpen }: { isOpen?: boolean }) => {
  return (
    <div className={`m-2 transition-all duration-200 ${isOpen && "rotate-180"}`}>
      <Image
        alt="dropdown-arrow"
        src={"/assets/dropdown-arrow.svg"}
        width={10}
        height={5}
      />
    </div>
  );
};

export default DropdownArrow;