import React from "react";

import Navbar from "@/layouts/Navbar";
import Article from "@/sections/Article";
import Sidebar from "@/sections/Sidebar";
import RelatedPosts from "@/sections/RelatedPosts";
import Footer from "@/layouts/Footer";

export default function Home() {
  return (
    <main className="flex justify-center w-full">
      <div className="flex flex-col items-center w-full">
        <Navbar />

        <section className="container flex my-8">
          <Article />
          <Sidebar />
        </section>

        <RelatedPosts />
        <Footer />
      </div>
    </main>
  );
}
