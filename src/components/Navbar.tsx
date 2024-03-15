"use client";

import Image from "next/image";
import React, { useState } from "react";
import { logo } from "../../public/assets";
import { navLinks } from "@/constants";
import { Button, buttonVariants } from "./ui/button";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null) as any;

  const hasArrow = (itemIndex: number) => [0, 3, 4].includes(itemIndex);

  const handleDropdownClick = (index: number) => {
    setActiveIndex((prevActiveIndex: number | null) =>
      prevActiveIndex === index ? null : index
    );
  };

  return (
    <nav
      className="sticky z-40 top-0 w-full px-3  sm:px-20 pt-5
    bg-gradient-to-l from-[#06113F] vai-[#0D2060] to-[#31356F]

    "
    >
      <div className="flex  justify-between items-center gap">
        <Link
          href={"/"}
          className="flex justify-center items-center gap-2 text-2xl"
        >
          <Image src={logo} alt="logo" className="h-12 w-12" />
          <h1 className="text-white hidden md:block">QuillAudits</h1>
        </Link>
        <div className="text-white  gap-8 hidden lg:flex">
          {navLinks.map((nItems, i) => (
            <button
              key={nItems.id}
              onClick={() => handleDropdownClick(i)}
              className="flex justify-center items-center gap-1 hover:text-gray-300 "
            >
              {nItems.title}
              {hasArrow(i) && (
                <ChevronDown
                  className={`transform transition duration-200 h-4 w-4 ${
                    activeIndex === i ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>
          ))}
        </div>

        <Link
          href={"/"}
          className={`${buttonVariants({ variant: "default" })} flex`}
        >
          Request an Audits
        </Link>

        <Sheet>
          <SheetTrigger className="block lg:hidden  text-white">
            <Menu />
          </SheetTrigger>
          <SheetContent className="bg-[#31356F] text-white">
            <SheetHeader className="flex items-center justify-between">
              <SheetDescription className="mb-32">
                <div className="text-white text-lg  gap-8 flex flex-col mt-10">
                  {navLinks.map((nItems, i) => (
                    <button
                      key={nItems.id}
                      onClick={() => handleDropdownClick(i)}
                      className="flex ml-2 justify-center items-center gap-1 hover:text-gray-300 "
                    >
                      {nItems.title}
                      {hasArrow(i) && (
                        <ChevronDown
                          className={`transform transition duration-200 h-4 w-4 ${
                            activeIndex === i ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </SheetDescription>

              <SheetTitle className=" ">
                <Link
                  href={"/requestauditpage"}
                  className={` ${buttonVariants({
                    variant: "default",
                  })}`}
                >
                  Check your Audits
                </Link>
              </SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="h-[1.5px] bg-[#15245E] mt-3  flex items-center justify-center " />
    </nav>
  );
};

export default Navbar;
