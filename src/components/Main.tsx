import React from "react";
import Hero from "./Hero";
import BeforeAndAfter from "./BeforeAndAfter";
import { Button } from "./ui/button";
import Info from "./Info";
import CeoTemp from "./CeoTemp";
import Newsletter from "./Newsletter";
import Headqauter from "./Headqauter";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <Hero />
      <BeforeAndAfter />
      <h1 className="text-center text-3xl text-blue-900 font-bold mt-5 md:mt-16">
        See how QuillAudits is a trusted partner in <br /> 1000+ Audit stories
      </h1>

      <Button className="mx-auto block px-6 py-2 my-5">Request an Audit</Button>

      <div className="md:px-36 px-5  justify-between  flex md:flex-row flex-col-reverse w-full mt-10">
        <div className=" md:w-3/5 ">
          <h1 className="md:pr-32">
            Carpe Diem Pension, on Pulse blockchain, redefines retirement with a
            self-managed, inclusive, globally portable fund. Unique for its
            token burn mechanism, it ensures a sustainable 4.32% inflation
            payout. With $143.11k and 41.06% of CDP already burned, it serves 35
            users globally.
          </h1>
          <Info />
          <p className="font-semibold my-5">
            Embed this tweet :-
            <a
              className="text-blue-500 underline font-normal hover:text-blue-700"
              href="https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20"
            >
              https://x.com/CarpeDiemCDP/ <br /> status/1742906560794296402?s=20
            </a>
          </p>
          <p className="md:pr-32">
            CDP smart contract audit revealed and fixed critical
            vulnerabilities, safeguarding funds and ensuring platform stability.
            This underscores the need for proactive security in blockchain
            projects, crucial for financial asset management. Through audits and
            issue resolution, CDP reinforces platform security, bolstering user
            trust.
          </p>
          <CeoTemp />
        </div>
        <div className=" md:w-2/5 relative  ">
          <div className="hidden md:block">
            <Headqauter />
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Main;
