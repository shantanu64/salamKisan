import React from "react";
import Nav from "./Nav";

const AboutUsHero = () => {
  return (
    <div className="image-box">
      <div
        className="image-box__background"
        style={{ backgroundImage: "url(aboutBg.png)" }}
      ></div>
      <div className="image-box__overlay"></div>
      <div className="image-box__content flex flex-col justify-between items-center">
        <Nav />
        <div className="w-full text-center flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          <div className="xl:w-1/2 lg:w-2/3 md:w-3/4 px-4">
            <h1 className="lg:text-6xl xl:text-7xl md:text-4xl text-3xl text-left md:ml-20 ml-10 leading-tight">
              MEET OUR TEAM WHO MADE THIS POSSIBLE
            </h1>
            <div className="flex flex-row gap-4 mt-10 items-center">
              <div className="bg-yellow-400 w-10 h-1.5 md:ml-20 ml-10 rounded-full"></div>
              <p className="text-xl font-light text-left">The Team</p>
            </div>
          </div>
          <div className="text-center w-1/2">
            <img src="aboutHero.png" className="xl:h-3/5 xl:w-3/5 lg:w-4/5 lg:h-4/5 md:w-full md:h-full mx-auto" />
          </div>
        </div>
        <div className="mb-16"></div>
      </div>
    </div>
  );
};

export default AboutUsHero;
