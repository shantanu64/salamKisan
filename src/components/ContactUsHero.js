import React from "react";
import Nav from "./Nav";

const ContactUsHero = () => {
  return (
    <div className="image-box">
      <div
        className="image-box__background"
        style={{ backgroundImage: "url(contactUs.jpg)" }}
      ></div>
      <div className="image-box__overlay"></div>
      <div className="image-box__content flex flex-col justify-between items-center">
        <Nav />
        <div className="xl:w-4/6 text-center flex flex-col items-center gap-6">
          <h1 className="text-4xl w-full md:w-full lg:w-full text-left md:text-center md:text-5xl lg:text-6xl font-semibold leading-tight">
            Contact Us
          </h1>
          <div className="text-center md:w-4/6">
            <p className="font-light mx-auto w-3/4 md:w-full text-sm text-left md:text-center md:text-xl ">
             
            </p>
          </div>
        </div>
        <div className="mb-16">
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

export default ContactUsHero;
