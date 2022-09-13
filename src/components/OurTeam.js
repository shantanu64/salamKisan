import React from "react";

const OurTeam = () => {
  return (
    <div className="h-auto p-10 flex flex-col gap-10">
      <div>
        <h1 className="text-5xl text-center font-semibold">Our Team</h1>
      </div>
      <div className="flex flex-wrap gap-7 px-2 w-full justify-center mx-auto">
        <div className="w-80 md:w-72 xl:w-80 flex flex-col gap-6 items-center">
          <div className="">
            <img src="wc-1.png" className="rounded-full" />
          </div>
          <div className="text-center text-xl w-4/5">
            <h1 className="font-bold">Ms. Dhanashree Mandhani</h1>
            <p className="font-light">CEO</p>
            <p className="mt-2"></p>
          </div>
        </div>
        <div className="w-80 md:w-72 xl:w-80 flex flex-col gap-6 items-center">
          <div className="">
            <img src="wc-1.png" className="rounded-full" />
          </div>
          <div className="text-center text-xl w-4/5">
            <h1 className="font-bold">Mr. Akshay Khobragade</h1>
            <p className="font-light">COO</p>
            <p className="mt-2"></p>
          </div>
        </div>
        <div className="w-80 md:w-72 xl:w-80 flex flex-col gap-6 items-center">
          <div className="">
            <img src="wc-1.png" className="rounded-full" />
          </div>
          <div className="text-center text-xl w-4/5">
            <h1 className="font-bold">Mr. Pradhyumn Mandhani</h1>
            <p className="font-light">Legal</p>
            <p className="mt-2"></p>
          </div>
        </div>
        <div className="w-80 md:w-72 xl:w-80 flex flex-col gap-6 items-center">
          <div className="">
            <img src="wc-1.png" className="rounded-full" />
          </div>
          <div className="text-center text-xl w-4/5">
            <h1 className="font-bold">Ms. Vaishnavi Niyati</h1>
            <p className="font-light">Development Head</p>
            <p className="mt-2"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
