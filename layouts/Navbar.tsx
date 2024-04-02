"use client";

import Image from "next/image";
import React from "react";

import NavigationMenu from "@/components/navbar/NavigationMenu";
import { navbarConfig } from "@/lib/config";
import { NavbarConfig, NavbarConfigMenuItem } from "@/lib/interface";
import LanguageSelectMenu from "@/components/shared/LanguageSelectMenu";
import Link from "next/link";
import Menubar from "@/components/navbar/Menubar";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <React.Fragment>
      <div className="container hidden md:flex justify-between items-center w-full h-16">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              alt="logo"
              src={"/assets/images/logo.png"}
              width={153}
              height={29}
              className="mr-4"
              priority
              unoptimized
            />
          </Link>

          {
            navbarConfig.map((config: NavbarConfig) => (
              <NavigationMenu key={config.id} {...config} />
            ))
          }
        </div>

        <div className="flex items-center">
          <LanguageSelectMenu />

          <button className="relative font-bold p-2 ml-4 [&>span]:hover:w-full active:text-blue-700">
            Log In / Sign Up
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300" />
          </button>
        </div>
      </div>

      <div className="container flex md:hidden justify-between items-center w-full h-16">
        <Link href={"/"}>
          <Image
            alt="logo"
            src={"/assets/images/logo.png"}
            width={153}
            height={29}
            className="mr-4"
            priority
            unoptimized
          />
        </Link>

        <div className="flex items-center">
          <LanguageSelectMenu />
          <Menubar onClick={toggleDrawer} />
        </div>
      </div>

      <div className={`flex flex-col fixed top-0 ${isMobileOpen ? "right-0" : "-right-96"} w-80 h-full p-4 bg-white shadow-2xl z-50 transition-all duration-300`}>
        <div className="flex justify-end">
          <div className="flex justify-center items-center w-12 h-12 rounded-full cursor-pointer bg-white transition-all duration-200 hover:bg-gray-200" onClick={toggleDrawer}>
            <Image
              alt="preview"
              src={"/assets/nav-arrow.svg"}
              width={12}
              height={12}
              unoptimized
            />
          </div>
        </div>

        <div>
          {
            navbarConfig.map((config: NavbarConfig) => (
              <div key={config.id} className="my-4">
                <h1 className="font-bold">{config.name}</h1>

                <div className="ml-2">
                  {
                    config.items.map((item: NavbarConfigMenuItem) => (
                      <Link
                        key={item.id}
                        href={item.path}
                        className="block my-1"
                      >
                        {item.name}
                      </Link>
                    ))
                  }
                </div>
              </div>
            ))
          }

          <div className="w-full h-[1px] my-4 bg-gray-300" />
          <Link href={"/"}>Log In / Sign Up</Link>
        </div>
      </div>
    </React.Fragment>
  );
}