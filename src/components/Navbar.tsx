"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { logo } from "../../public/assets";
import { Button, buttonVariants } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { id: "service", title: "Service" },
  { id: "pricing", title: "Pricing" },
  { id: "ourAudits", title: "Our Audits" },
  { id: "tools", title: "Tools" },
  { id: "resources", title: "Resources" },
  { id: "referEranSecure", title: "Refer Eran Secure" },
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleDropdownClick = (index: any) => {
    setActiveIndex((prevActiveIndex) =>
      prevActiveIndex === index ? null : index
    );
  };

  const hasArrow = (itemIndex: any) => [0, 3, 4].includes(itemIndex);

  const renderNavLinks = () => {
    return navLinks.map((nItems, i) => (
      <button
        key={nItems.id}
        onClick={() => handleDropdownClick(i)}
        className="flex justify-center items-center gap-1 hover:text-gray-300"
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
    ));
  };

  return (
    <nav className="sticky z-40 top-0 w-full px-3 sm:px-20 pt-5 bg-gradient-to-l from-[#06113F] via-[#0D2060] to-[#31356F]">
      <div className="flex justify-between items-center">
        <Link
          href={"/"}
          className="flex justify-center items-center gap-2 text-2xl"
        >
          <Image src={logo} alt="logo" className="h-12 w-12" />
          <h1 className="text-white hidden md:block">QuillAudits</h1>
        </Link>
        <div className="text-white gap-8 hidden lg:flex">
          {renderNavLinks()}
        </div>
        <Link
          href={"/"}
          className={`${buttonVariants({ variant: "default" })} flex`}
        >
          Request an Audit
        </Link>
        <Sheet>
          <SheetTrigger className="block lg:hidden text-white">
            <Menu />
          </SheetTrigger>
          <SheetContent className="bg-[#31356F] text-white">
            <SheetHeader className="flex items-center justify-between">
              <SheetTitle>
                <Link
                  href={"/requestauditpage"}
                  className={`${buttonVariants({ variant: "default" })}`}
                >
                  Check your Audits
                </Link>
              </SheetTitle>
              <div className="text-white text-lg gap-8 flex flex-col mt-10">
                {renderNavLinks()}
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="h-[1.5px] bg-[#15245E] mt-3 flex items-center justify-center" />
    </nav>
  );
};

export default Navbar;
