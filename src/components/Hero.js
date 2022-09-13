import React from "react";
import Nav from "./Nav";

const Hero = () => {
  return (
    <div className="image-box">
      <div
        className="image-box__background"
        style={{ backgroundImage: "url(heroBg.png)" }}
      ></div>
      <div className="image-box__overlay"></div>
      <div className="image-box__content flex flex-col justify-between items-center">
        <Nav />
        <div className="xl:w-4/6 text-center flex flex-col items-center gap-6">
          <h1 className="text-4xl w-3/4 md:w-full lg:w-3/4 text-left md:text-center md:text-5xl lg:text-6xl font-semibold leading-tight">
            Revolutionise farming with Salam Kisan
          </h1>
          <div className="text-center md:w-4/6">
            <p className="font-light mx-auto w-3/4 md:w-full text-sm text-left md:text-center md:text-xl ">
              Salam Kisan is an agricultural ecosystem providing a centralised
              end-to-end solution for all stakeholders in the agriculture
              ecosystem. We aim to provide everything in the entire agriculture
              value chain.
              <br />
              Salam Kisan is a new turn in the lives of farmers to increase
              yield efficiency, increase productivity and profitability.
            </p>
          </div>
        </div>
        <div className="mb-16 -ml-12">
          <button
            style={{
              background:
                "linear-gradient(95.1deg, #115C3E 11.71%, #21A74D 113.94%)",
            }}
            className="font-light shadow-2xl px-6 py-2 w-48 rounded-full"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
