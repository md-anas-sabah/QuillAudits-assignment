import Image from "next/image";
import React from "react";
import { Ceo, star, verBlue, verWhite } from "../../public/assets";

const CeoTemp = () => {
  return (
    <main className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] my-10">
      <div className="relative">
        <div className="flex justify-around bg-gradient-to-r from-[#223E83] via-[#162967] to-[#313985]">
          <div className="text-white ">
            <Image
              src={verWhite}
              alt="werWhite "
              className="relative md:right-20 right-10 top-4"
            />
            <div className="flex">
              <div className="h-32  relative top-10 w-32 right-10 md:hidden ">
                <Image src={Ceo} alt="logo" className="rounded-xl " />
              </div>
              <div className="relative  md:top-16 top-12 right-6">
                <h1 className="text-2xl font-semibold hidden md:block">
                  Sally Radley
                </h1>
                <h1 className="text-2xl font-semibold md:hidden block">
                  Carpediem
                </h1>
                <p className="font-normal hidden md:block ">Ceo</p>
                <p className="font-normal md:hidden ">TEAM</p>
              </div>
            </div>
          </div>
          <div className="h-32 bg-blue-600 rounded-lg relative top-10 w-32 md:w-52 md:h-52 hidden md:block"></div>
        </div>
      </div>
      <div className="flex flex-col ">
        <Image src={star} alt="star" className="md:mx-20 ml-40 mt-2  " />
        <p className=" md:mx-20 mx-5 my-5">
          “It felt like the auditing team was available within a short
          timeframe, <br /> which was excellent. The auditing process looked
          thorough, and I <br className="" /> really appreciate the fact that
          you took time to investigate GAS <br /> optimizations.”
        </p>
        <Image
          src={verBlue}
          alt="vblue"
          className=" relative left-[85%]  md:left-[93%] m-2"
        />
      </div>
    </main>
  );
};

export default CeoTemp;
