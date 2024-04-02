import React from "react";

// Menubar button for a mobile responsive design
const Menubar = (props: any) => {
  return (
    <button {...props} className="flex flex-col justify-between w-8 h-8 p-1 ml-2 [&>span]:w-full [&>span]:h-[2px] [&>span]:my-0.5 [&>span]:bg-black">
      <span />
      <span />
      <span />
    </button>
  );
};

export default Menubar;