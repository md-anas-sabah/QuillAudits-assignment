import React from "react";
import Location from "./Location";

const Audits = [
  {
    prevAudits: [
      {
        point:
          "Exploits like reentrancy and front-running can let attackers withdraw extra funds and manipulate transaction timing for unfair gains",
      },
      {
        point:
          "Vulnerabilities could allow users to mint CDP tokens or pension shares indefinitely, disrupting the system's economic balance",
      },
    ],
    afterAudits: [
      {
        point: "Implementation of reentrancy protection mechanisms.",
      },
      {
        point:
          "Ensure precision in decimal handling with standard libraries, recalculate accurately, fix logic errors, and secure referral systems against exploitation.",
      },
    ],
  },
];

const AfterHeroSection = () => {
  return (
    <main className="flex items-center justify-center flex-col">
      <section className="md:flex w-full mt-14 justify-center px-4 lg:px-64 sm:h-48 h-full">
        <div className="BeforeQuillAudits">
          <h1 className="bg-pink-300 font-bold">Before QuillAudits</h1>
          <ul>
            {Audits.map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col md:h-44 justify-between pt-5"
              >
                {item.prevAudits.map((points, idx) => (
                  <p key={idx}>{points.point}</p>
                ))}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[0.5] bg-gray-500 border hidden md:block mx-20" />
        <div className="AfterQuillAudits mt-5 md:mt-0">
          <h1 className="bg-blue-300 font-bold">After QuillAudits</h1>
          <ul>
            {Audits.map((item, i) => (
              <li
                key={i}
                className="flex flex-col justify-between md:h-44 pt-5"
              >
                {item.afterAudits.map((points, idx) => (
                  <p key={idx}>{points.point}</p>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="md:hidden w-full block mx-auto my-16">
        <Location />
      </div>
    </main>
  );
};

export default AfterHeroSection;
