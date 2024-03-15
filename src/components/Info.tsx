import {
  CarpeDiem,
  discoveries,
  extraPoint,
  lastRandI,
  manualmorepoints,
  pensionJourney,
  strategicAppr,
} from "@/constants";
import Image from "next/image";
import React from "react";

const Info = () => {
  return (
    <section>
      <div>
        {CarpeDiem.map((infos, i) => (
          <div key={i}>
            <h1 className="font-bold text-4xl my-10 md:pr-32">{infos.title}</h1>
            <p className="md:pr-32 my-8">{infos.info}</p>
            <Image src={infos.image} alt="img" />
          </div>
        ))}
      </div>
      <div>
        <h1 className="font-bold text-4xl my-10 md:pr-32">
          CarpeDiem Pension{"'"}s Journey Through our Audit Process
        </h1>

        {pensionJourney.map((info, ip) => (
          <div key={ip}>
            <div className=" md:pr-28">
              <ul>
                <li className="font-semibold my-1 text-2xl">
                  {/* Add numbering before the title */}
                  {ip + 1}. {info.title}
                </li>
              </ul>
              {info.points?.map((sminfo, im) => (
                <ul key={im} className="pl-6">
                  <li className="  list-disc sm:my-5 my-2">{sminfo.point}</li>
                  <div>
                    {ip === 1 && // Check if the current point index is 1
                      manualmorepoints.map((extrapoints, i) => (
                        <ul key={i} className="md:pl-10 pl-3 my-3">
                          <li className=" my-2 ">
                            <div className="flex gap-2 justify-center ">
                              <div className="text-[8px] relative top-1.5">
                                &#9675;{" "}
                              </div>
                              <div>
                                <span className="font-semibold italic">
                                  {extrapoints.pointss}
                                </span>{" "}
                                <span className="">{extrapoints.ans}</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      ))}
                  </div>
                </ul>
              ))}
            </div>
          </div>
        ))}

        {strategicAppr.map((data) => (
          <div key={data.title}>
            <h1 className="font-bold text-4xl my-10 md:pr-32">{data.title}</h1>
            <p className="md:pr-32 my-8 ">{data.points}</p>
          </div>
        ))}

        {discoveries.map((info, i) => (
          <div key={i} className="md:pr-32">
            <ul>
              <li className="font-semibold my-4">
                {i + 1}. {info.main}
              </li>
              <div className="flex ">
                <p className="pl-4 font-semibold">a.</p>
                <p className="pl-2">{info.second}</p>
              </div>
            </ul>
          </div>
        ))}

        {lastRandI.map((info, i) => (
          <div key={i} className="md:pr-32">
            <h1 className="font-bold text-2xl my-10">{info.title}</h1>
            <p>{info.point}</p>
          </div>
        ))}

        {extraPoint.map((info, i) => (
          <ul className="pl-10 my-2" key={i}>
            <li className="list-disc  "> {info.point}</li>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Info;
