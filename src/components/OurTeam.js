import React from "react";
import { Link } from "react-router-dom";

const OurTeam = () => {
  return (
    <div className="h-auto p-10 flex flex-col gap-10">
      <div>
        <h1 className="text-5xl text-center font-semibold">Our Team</h1>
      </div>
      <div className="flex flex-wrap gap-7 px-2 w-full justify-center mx-auto">
        <a
          target={"_blank"}
          href={"https://www.linkedin.com/in/dhanashri-mandhani-978aa9200/"}
        >
          <div className="hover:shadow-2xl rounded-xl py-2 w-80 md:w-72 xl:w-80 flex flex-col gap-6 items-center">
            <div className="w-40 h-40">
              <img
                src="dhanashree.jpeg"
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="text-center text-xl w-4/5">
              <h1 className="font-bold">Ms. Dhanashree Mandhani</h1>
              <p className="font-light">CEO, Founder and Managing Director</p>
              <p className="mt-2"></p>
            </div>
          </div>
        </a>
        <a
          target={"_blank"}
          href={"https://www.linkedin.com/in/akshaykhobragade"}
        >
          <div className="hover:shadow-2xl rounded-xl py-2 w-80 md:w-72 xl:w-80 flex flex-col gap-6 items-center">
            <div className="w-40 h-40">
              <img
                src="akshay.jpg"
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="text-center text-xl w-4/5">
              <h1 className="font-bold">Mr. Akshay Khobragade</h1>
              <p className="font-light">Chief Operating Officer</p>
              <p className="mt-2"></p>
            </div>
          </div>
        </a>
        <a
          target={"_blank"}
          href={"https://www.linkedin.com/in/praduymn-m-322107123/"}
        >
          <div className="hover:shadow-2xl rounded-xl py-2 w-80 md:w-72 xl:w-80 flex flex-col gap-6 items-center">
            <div className="w-40 h-40">
              <img
                src="pradhyumn.jpeg"
                className="rounded-full h-full w-full"
              />
            </div>
            <div className="text-center text-xl w-4/5">
              <h1 className="font-bold">Mr. Praduymn Mandhani</h1>
              <p className="font-light">Managing Director</p>
              <p className="mt-2"></p>
            </div>
          </div>
        </a>
        <a
          target={"_blank"}
          href={"https://www.linkedin.com/in/vanshika-nyati-548920201/"}
        >
          <div className="hover:shadow-2xl rounded-xl py-2 w-80 md:w-72 xl:w-80 flex flex-col gap-6 items-center">
            <div className="w-40 h-40">
              <img src="vanshika.jpeg" className="rounded-full h-full w-full" />
            </div>
            <div className="text-center text-xl w-4/5">
              <h1 className="font-bold">Ms. Vanshika Nyati</h1>
              <p className="font-light">Development Head</p>
              <p className="mt-2"></p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default OurTeam;
