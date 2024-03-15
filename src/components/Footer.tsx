import Image from "next/image";
import React from "react";
import { defi, logo, telangana, telegram } from "../../public/assets";
import { Audit, footerButton, footerItems, socialMedia } from "@/constants";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Mail } from "lucide-react";
import footerBG from "../../public/assets/footerBG.png";

const Footer = () => {
  return (
    <section className="relative text-white">
      <Image
        src={footerBG}
        alt="bg"
        className="bg-cover relative -z-10 h-[200vh] md:h-full"
      />
      <main className="  md:px-24 px-6 absolute z-10 top-10 w-full ">
        {/* first 2 div  */}

        <div className="md:flex md:flex-col ">
          {/* here it has to 2 div  */}
          {/* this is logo and three div  */}

          <div className="flex gap-3 mb-10 justify-center items-center md:justify-start ">
            <Image src={logo} alt="logo" className="h-12 w-12" />
            <div className="text-end">
              <h1 className="text-[1.7rem]">QuillAudits</h1>
              <p className="text-[10px]">Making Web3 a safer place</p>
            </div>
          </div>

          {/* top is logo div  */}
          <div className=" md:flex ">
            <main className="flex flex-col  w-full justify-between ">
              <div className="flex w-full flex-col-reverse md:flex-row  justify-center">
                <section className="flex md:w-2/5 justify-between   ">
                  <div className="flex-1 pr-20">
                    {/* below of footer logo  */}
                    <div className="">
                      <h1 className="underline decoration-blue-500 underline-offset-8 font-semibold text-lg">
                        More About Quill
                      </h1>
                      <div className="text-sm flex flex-col gap-2.5 mt-3">
                        <p className="cursor-pointer hover:text-gray-400">
                          About Us
                        </p>
                        <p className="cursor-pointer hover:text-gray-400">
                          FAQs
                        </p>
                        <p className="cursor-pointer hover:text-gray-400">
                          Blockchains We Audit
                        </p>
                      </div>
                    </div>
                    <div className="my-9">
                      <h1 className="font-semibold">Contact Us:</h1>
                      <div className="text-sm flex flex-col gap-2 mt-2">
                        <div className="flex gap-2 items-center">
                          <Mail className="h-3 w-3" />
                          <p className="underline italic cursor-pointer hover:text-gray-400">
                            audits@quillhash.com
                          </p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Image
                            className="h-3 w-3"
                            src={telegram}
                            alt="telegram"
                          />
                          <p className="underline italic cursor-pointer hover:text-gray-400">
                            t.me/quillaudits
                          </p>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div>
                      <div className=" w-full">
                        {/* img  */}
                        <h1 className="font-semibold">Our Location:</h1>
                        <p className="text-sm my-2 ">
                          Office 104/105 Level 1,{" "}
                          <br className="hidden md:block" /> Emaar Square,
                          Building 4 <br className="hidden md:block" />
                          Sheikh Mohammed Bin Rashid{" "}
                          <br className="hidden md:block" /> Boulevard Downtown
                          Dubai, <br className="hidden md:block" />
                          United Arab Emirates{" "}
                          <br className="hidden md:block" /> P.O box: 416654
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block flex-1">
                    <h1 className="underline decoration-blue-500 underline-offset-8 font-semibold mb-5 text-xl">
                      Audit Services
                    </h1>
                    {Audit.map((data, i) => (
                      <ul key={i} className="my-1.5">
                        <li className="hover:text-gray-400 font-medium text-sm cursor-pointer inline-block">
                          {data.name}
                        </li>
                      </ul>
                    ))}
                  </div>
                </section>
                <section className="flex  flex-col-reverse md:block md:w-2/3 ">
                  <div className="md:flex grid grid-cols-2 justify-between md:mb-16 my-10 md:my-auto">
                    <div className="md:hidden mb-5">
                      <h1 className="underline decoration-blue-500 underline-offset-8 font-semibold mb-5 text-xl">
                        Audit Services
                      </h1>
                      {Audit.map((data, i) => (
                        <ul key={i} className="my-1.5">
                          <li className="hover:text-gray-400 font-medium text-sm cursor-pointer inline-block">
                            {data.name}
                          </li>
                        </ul>
                      ))}
                    </div>
                    {footerItems.map((items, i) => (
                      <div key={i} className="md:pl-12">
                        <h5 className="underline decoration-blue-500 underline-offset-8 font-semibold mb-5 text-xl">
                          {items.ftitle}
                        </h5>
                        {items.fItems.map((ffitem, index) => (
                          <ul key={index} className="my-1.5">
                            <li className="hover:text-gray-400 font-medium text-sm cursor-pointer inline-block">
                              {ffitem.fItem}
                            </li>
                          </ul>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div>
                      <h1 className="underline decoration-blue-500 underline-offset-8 font-semibold text-lg mb-4 hidden md:block">
                        Our programmer
                      </h1>
                      <div />
                    </div>
                    <div className="md:flex grid grid-cols-2 justify-between gap-4 md:m-auto">
                      {footerButton.map((but, i) => (
                        <Link
                          key={but.bid}
                          href={""}
                          className={`${buttonVariants({
                            variant: "default",
                          })}    `}
                        >
                          {but.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div></div>
                </section>
              </div>
              <div>
                <div className="my-5">
                  <section className=" w-full md:flex justify-between">
                    <div className="flex gap-6 my-16 md:my-auto">
                      <Image src={defi} alt="defi" className="h-12 md:h-full" />
                      <Image
                        src={telangana}
                        alt="defi"
                        className="h-12 md:h-full"
                      />
                    </div>
                    <div className=" flex md:justify-center md:items-center gap-7  ">
                      {socialMedia.map((social, i) => (
                        <div key={i} className="">
                          <Image
                            src={social.img}
                            alt="social"
                            className="  hover:border  rounded-sm hover:border-t-transparent hover:border-blue-500 hover:border-b-4 cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                  <section>
                    <div></div>
                  </section>
                </div>
              </div>
            </main>
          </div>
        </div>

        <div className="h-[1.5px] bg-[#15245E] mb-4  flex items-center justify-center " />

        <div className="mt-3">
          <div className="flex md:justify-between md:flex-row flex-col-reverse items-center gap-4 text-sm text-gray-200">
            <p>All Rights Reserved. © Copyright 2023. QuillAudits - LLC</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </main>
    </section>
  );
};
export default Footer;
