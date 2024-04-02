"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { fadeSmallLeftVariant } from "@/lib/animations";
import { articleData } from "@/lib/config";

export default function Article() {
  return (
    <div className="w-full">
      <motion.h2 initial="hide" whileInView="show" variants={fadeSmallLeftVariant(0.25)} viewport={{ once: true }} className="text-sm">
        <span className="font-bold text-blue-700">{articleData.type.toUpperCase()}</span>
        <span className="mx-2">•</span>
        <span className="text-gray-500">{articleData.date}</span>
      </motion.h2>

      <motion.div
        initial="hide"
        whileInView="show"
        variants={fadeSmallLeftVariant(0.25, 0.25)}
        viewport={{ once: true }}
        className="mt-4 mb-12"
      >
        <h1 className="w-full my-4 font-Graphik font-bold leading-tight text-3xl md:text-[46px]">
          {articleData.title}
        </h1>

        <div className="my-12">
          <Image
            alt="logo"
            src={articleData.imageURL}
            width={0}
            height={0}
            className="w-full h-auto"
            priority
            unoptimized
          />

          <h2 className="mt-4 text-xs md:text-base">{articleData.imageCaptain}</h2>
        </div>

        <p className="md:text-xl" dangerouslySetInnerHTML={{ __html: articleData.content }} />
      </motion.div>
    </div>
  );
}