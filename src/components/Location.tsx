import React from "react";

const Location = () => {
  return (
    <div className=" md:relative md:top-20 ">
      <div className="flex flex-col gap-4 mx-auto p-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  hover:border-blue-700 border-blue-400 rounded-md  border md:w-1/2 w-4/5">
        <div>
          <p className="text-muted-foreground text-sm">Headquarters</p>
          <h5>Switzerland</h5>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">Chain</p>
          <h5>Pulse Blockchain</h5>
        </div>
      </div>
    </div>
  );
};

export default Location;
