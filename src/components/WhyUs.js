import React from "react";

const WhyUs = () => {
  return (
    <div className="h-full p-10 flex flex-col gap-10">
      <div>
        <h1 className="text-3xl md:text-5xl text-center font-semibold">
          Why Choose Us?
        </h1>
      </div>
      <div className="flex flex-wrap gap-7 px-2 xl:w-4/5 w-full justify-center mx-auto">
        <div className="w-80 md:w-72 lg:w-80 flex flex-col gap-6 items-center">
          <div className="">
            <img src="wc-1.png" className="" />
          </div>
          <div className="text-center text-xl md:w-4/5">
            One-stop solution for the agri-value chain.
          </div>
        </div>
        <div className="w-80 flex flex-col gap-6 items-center md:w-72 lg:w-80">
          <div className="">
            <img src="wc-2.png" className="" />
          </div>
          <div className="text-center text-xl md:w-4/5">
            Centralizing the value-chain.
          </div>
        </div>{" "}
        <div className="w-80 flex flex-col gap-6 items-center md:w-72 lg:w-80">
          <div className="">
            <img src="wc-3.png" className="" />
          </div>
          <div className="text-center text-xl md:w-4/5">
            Input market linkage.
          </div>
        </div>
        <div className="w-80 flex flex-col gap-6 items-center md:w-72 lg:w-80">
          <div className="">
            <img src="wc-4.png" className="" />
          </div>
          <div className="text-center text-xl md:w-4/5">
            Yield improvement and precision agriculture.
          </div>
        </div>
        <div className="w-80 flex flex-col gap-6 items-center md:w-72 lg:w-80">
          <div className="">
            <img src="wc-5.png" className="" />
          </div>
          <div className="text-center text-xl md:w-4/5">
            Digitized farm records.
          </div>
        </div>
        <div className="w-80 flex flex-col gap-6 items-center md:w-72 lg:w-80">
          <div className="">
            <img src="wc-6.png" className="" />
          </div>
          <div className="text-center text-xl md:w-4/5">
            Data-driven crop calendar.
          </div>
        </div>
        <div className="w-80 flex flex-col gap-6 items-center md:w-72 lg:w-80">
          <div className="">
            <img src="wc-7.png" className="" />
          </div>
          <div className="text-center text-xl md:w-4/5">
            Quality Management and traceability of produce.
          </div>
        </div>
        <div className="w-80 flex flex-col gap-6 items-center md:w-72 lg:w-80">
          <div className="">
            <img src="wc-8.png" className="" />
          </div>
          <div className="text-center text-xl md:w-4/5">
            Output market linkage.
          </div>
        </div>
        <div className="w-80 flex flex-col gap-6 items-center md:w-72 lg:w-80">
          <div className="">
            <img src="wc-9.png" className="" />
          </div>
          <div className="text-center text-xl md:w-4/5">
            Access to credit and insurance.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
