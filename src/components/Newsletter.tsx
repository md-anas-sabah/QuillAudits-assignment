import Image from "next/image";
import React from "react";
import { mailsss } from "../../public/assets";
import { Button } from "./ui/button";

const Newsletter = () => {
  return (
    <section>
      <div className="md:hidden my-10">
        <h1 className=" text-center ">
          Security First Newsletter by QuillAudits
        </h1>
        <div className="border border-blue-600 w-3/12 mx-auto mt-2  "></div>
      </div>
      <main className="md:bg-[#EDF2FE]  flex justify-center items-center px-10  md:px-40 md:py-10">
        <div className="hidden md:flex flex-col justify-center gap-10  ">
          <p className="font-semibold text-lg text-blue-500"> NEWSLETTER</p>
          <h1 className="text-blue-900 text-3xl font-bold tracking-wide">
            Security First News <br /> Letter by QuillAudits
          </h1>
          <p>
            Subscribe for the most Exclusive Weekly security based newsletter
            and covering all the recent hacks up to date.
          </p>
        </div>
        <div className="flex flex-col">
          <Image src={mailsss} alt="mail" />
          <p className="text-center md:hidden px-9">
            DeFi & NFT Hacks, CTFs, and Blockchain Security Insights straight to
            your Inbox. Explore our weekly newsletter:{" "}
            <span className="text-blue-500 font-semibold">HashingBits.</span>{" "}
            Stay updated on everything we’re publishing. Stand a step ahead.
          </p>
          <div className=" bg-white px-2 py-2 flex justify-between md:mx-10 border border-black md:border-transparent rounded-lg md:my-0 my-5 ">
            <input
              type="text"
              placeholder="vitalik@ethereum.org"
              className="border border-transparent focus:outline-none "
            />
            <Button className="hidden md:block">Subscribe</Button>
          </div>
          <Button className="md:hidden mx-auto mb-20">Subscribe</Button>
        </div>
      </main>
    </section>
  );
};

export default Newsletter;
