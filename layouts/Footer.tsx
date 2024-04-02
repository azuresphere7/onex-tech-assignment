import LanguageSelectMenu from "@/components/shared/LanguageSelectMenu";
import { footerConfig } from "@/lib/config";
import { FooterMenu, FooterMenuItem } from "@/lib/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="container py-24">
      <Image
        alt="logo"
        src={"/assets/images/logo.png"}
        width={0}
        height={0}
        className="w-[200px]"
        priority
        unoptimized
      />

      <div className="flex flex-wrap w-full mt-12 mb-20">
        <div className="w-full lg:w-1/4 lg:pr-28">
          <h1 className="font-bold text-2xl">Stay up to date on the latest EVFY news</h1>
          <p className="my-4 text-gray-400">Our newsletters are a concentrated blast of all the latest from EVFY: news, events, product information and more.</p>

          <button className="w-36 h-12 mt-4 rounded-md bg-blue-700 font-bold text-cyan-400 transition-all duration-200 hover:bg-cyan-300 hover:text-blue-700 active:bg-white active:border-2">Subscribe</button>
        </div>

        <div className="flex flex-wrap justify-stretch w-full mt-12 lg:mt-0 lg:w-3/4">
          {
            footerConfig.map((menu: FooterMenu) => (
              <div key={menu.id} className="w-1/3 md:w-1/5">
                <h1 className="font-bold mb-6">{menu.title}</h1>

                <div className="flex flex-col text-[14px]">
                  {
                    menu.items.map((item: FooterMenuItem) => (
                      <Link
                        key={item.id}
                        href={item.path}
                        target="_blank"
                        className="my-2"
                      >
                        {item.name}
                      </Link>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-200" />

      <div className="flex justify-between w-full pt-10">
        <p>© Copyright 2021 EVFY Pte Ltd. All Rights Reserved.</p>
        <LanguageSelectMenu />
      </div>
    </div>
  );
}