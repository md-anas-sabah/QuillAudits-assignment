import { BandAQuillaudits } from "@/constants";
import React from "react";
import Headqauter from "./Headqauter";

const BeforeAndAfter = () => {
  return (
    <main className=" flex items-center justify-center flex-col">
      <section className="md:flex  w-full mt-14 justify-center px-4 lg:px-64 sm:h-48 h-full  ">
        <div className="Before QuillAudits ">
          <h1 className=" bg-pink-300 font-bold">Before QuillAudits</h1>
          <ul className="">
            {BandAQuillaudits.map((item, i) => (
              <li
                key={i}
                className="flex flex-col md:h-44 justify-between  pt-5 "
              >
                {item.bAudits.map((points, i) => (
                  <p key={i}>{points.point}</p>
                ))}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[0.5] bg-gray-500 border  hidden md:block mx-20" />
        <div className="After QuillAudits mt-5 md:mt-0">
          <h1 className="bg-blue-300 font-bold">After QuillAudits</h1>
          <ul>
            {BandAQuillaudits.map((item, i) => (
              <li
                key={i}
                className="flex flex-col justify-between md:h-44 pt-5  "
              >
                {item.AAudits.map((points, i) => (
                  <p key={i}>{points.point}</p>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="md:hidden w-full block mx-auto  my-16">
        <Headqauter />
      </div>
    </main>
  );
};

export default BeforeAndAfter;
