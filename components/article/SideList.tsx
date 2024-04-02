import Image from "next/image";
import React from "react";

import { SidebarListItem } from "@/lib/interface";
import { ARTICLE_TYPE } from "@/lib/enums";
import { truncateTitle } from "@/lib/utils";

// List item in "Related Articles" sidebar
export const SidebarItem = (props: SidebarListItem) => {
  const { type, title } = props;

  return (
    <div className="flex relative w-full py-8 cursor-pointer transition-all duration-100 hover:bg-gray-100">
      <Image
        alt="preview"
        src={"/assets/images/item-placeholder.jpg"}
        width={128}
        height={64}
        className="rounded-sm"
        unoptimized
      />

      <div className="mx-4 font-Graphik font-normal">
        <span className={`rounded-md ${type === ARTICLE_TYPE.FEATURED ? "p-1 bg-cyan-100" : "py-1"} text-sm text-blue-700 uppercase`}>{type}</span>
        <h1 className="my-2 text-lg">{truncateTitle(title, 47)}</h1>
      </div>

      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-300" />
    </div>
  );
};
