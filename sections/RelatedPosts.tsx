"use client";

import React from "react";
import { motion } from "framer-motion";

import Post from "@/components/article/Post";
import { fadeSmallLeftVariant, fadeSmallUpVariant } from "@/lib/animations";
import { relatedPostConfig } from "@/lib/config";
import { RelatedPost } from "@/lib/interface";

export default function RelatedPosts() {
  return (
    <section className="flex justify-center w-full py-24 bg-[#F9F9F9]">
      <div className="container flex flex-col font-Graphik">
        <motion.h1
          initial="hide"
          whileInView="show"
          variants={fadeSmallLeftVariant(0.25)}
          viewport={{ once: true }}
          className="mx-3 font-bold text-xl md:text-3xl"
        >
          Other Articles You May Like
        </motion.h1>

        <motion.div
          initial="hide"
          whileInView="show"
          variants={fadeSmallUpVariant(0.25, 0.5)}
          viewport={{ once: true }}
          className="flex flex-wrap w-full my-10"
        >
          {
            relatedPostConfig.map((post: RelatedPost) => (
              <Post key={post.id} {...post} />
            ))
          }
        </motion.div>
      </div>
    </section>
  );
}