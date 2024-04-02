"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import { SidebarItem } from "@/components/article/SideList";
import { fadeSmallUpVariant } from "@/lib/animations";
import { sidebarConfig } from "@/lib/config";
import { SidebarListItem } from "@/lib/interface";

export default function Sidebar() {
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      variants={fadeSmallUpVariant(0.25, 0.5)}
      viewport={{ once: true }}
      className="hidden lg:block w-3/5 mt-44 ml-16"
    >
      <h1 className="my-4 font-Graphik font-bold text-xl">Related Articles</h1>

      {
        sidebarConfig.map((item: SidebarListItem) => (
          <SidebarItem key={item.id} {...item} />
        ))
      }

      <Link href="/" className="flex items-center mt-4 text-blue-800">
        View more
        <Image
          alt="preview"
          src={"/assets/nav-arrow.svg"}
          width={12}
          height={12}
          className="ml-2"
          unoptimized
        />
      </Link>
    </motion.div>
  );
}