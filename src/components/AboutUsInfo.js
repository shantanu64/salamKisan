import React from "react";
import { Link } from "react-router-dom";
import MissionVisionTabs from "./MissionVisionTabs";

const AboutUsInfo = () => {
  return (
    <div className="h-auto md:p-10 flex flex-col gap-10">
      <div>
        <h1 className="text-4xl p-5 md:p-0 md:text-5xl text-center font-semibold">
          We At Salam Kisan
        </h1>
      </div>
      <div>
        <div className="mx=auto">
          <MissionVisionTabs />
        </div>
        <div className="md:w-2/3 p-5 md:p-0 w-full mx-auto">
          <p className="text-center font-light italic mx-auto md:text-xl text-lg w-full md:w-2/3">
            <span className="font-black text-4xl">“</span>Salam Kisan is an
            agricultural ecosystem providing a centralised end-to-end solution
            for all stakeholders in the agriculture value chain.
            <span className="font-black text-4xl">”</span>
          </p>
          <p className="text-justify mt-14 text-lg md:text-xl">
            We have data-driven solutions that bring together agricultural
            stakeholders, services, products, and technologies. We provide
            services and AI-powered tools for farmers to increase their yield
            and profitability through our digital platform and physical stores
            where they can sell/ rent state-of-art devices, farm inputs, and
            farm outputs and provide financial services, value addition, and
            government convergence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsInfo;
