import React from "react";
import { RelatedPost } from "@/lib/interface";
import Image from "next/image";
import { truncateTitle } from "@/lib/utils";

// Blog post component in "Other Articles" section
const Post = (props: RelatedPost) => {
  const { imageURL: image, title, content } = props;

  return (
    <div className="flex flex-col w-full md:w-1/3 px-3 py-6 md:py-0 cursor-pointer transition-all duration-200 hover:-translate-y-3">
      <Image
        alt="preview"
        src={image}
        width={0}
        height={0}
        className="w-full h-auto"
      />

      <h1 className="font-bold mt-8 mb-2">{title}</h1>
      <p className="text-sm">{truncateTitle(content, 102)}</p>
    </div>
  );
};

export default Post;