import React from "react";

const ServicesOffer = () => {
  return (
    <div className="h-auto p-10 flex flex-col gap-10">
      <div>
        <h1 className="text-5xl text-center font-semibold">Services We Offer</h1>
      </div>
      <div className="flex flex-wrap gap-7 px-2 xl:w-4/5 w-full justify-center mx-auto">
        <div className="w-80 md:w-72 xl:w-80 flex flex-col gap-6 items-center">
          <div className="">
            <img src="wc-1.png" className="rounded-full" />
          </div>
          <div className="text-center text-xl w-4/5">
            <h1 className="font-bold">Service 1</h1>
            <p className="font-light"></p>
            <p className="mt-2">
              Being a one-stop solution for the agriculture value chain.
            </p>
          </div>
        </div>
        <div className="w-80 md:w-72 xl:w-80 flex flex-col gap-6 items-center">
          <div className="">
            <img src="wc-1.png" className="rounded-full" />
          </div>
          <div className="text-center text-xl w-4/5">
            <h1 className="font-bold">Service 2</h1>
            <p className="font-light"></p>
            <p className="mt-2">
              Being a one-stop solution for the agriculture value chain.
            </p>
          </div>
        </div>
        <div className="w-80 md:w-72 xl:w-80 flex flex-col gap-6 items-center">
          <div className="">
            <img src="wc-1.png" className="rounded-full" />
          </div>
          <div className="text-center text-xl w-4/5">
            <h1 className="font-bold">Service 3</h1>
            <p className="font-light"></p>
            <p className="mt-2">
              Being a one-stop solution for the agriculture value chain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOffer;
