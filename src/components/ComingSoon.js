import React from "react";
import { Link } from "react-router-dom";
const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-1/4">
        <img src="logo.png" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-7xl font-bold text-green-700">Coming Soon!</h1>
      </div>
      <div>
        <div className="mb-16">
          <Link to={"/"}>
            <button
              style={{
                background:
                  "linear-gradient(95.1deg, #115C3E 11.71%, #21A74D 113.94%)",
              }}
              className="font-light shadow-2xl px-6 text-white font-bold py-2 my-10 w-48 rounded-full"
            >
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
