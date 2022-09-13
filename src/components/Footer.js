import React from "react";

const Footer = () => {
  return (
    <div className="footer relative pt-1">
      <div
        style={{
          background:
            "linear-gradient(95.1deg, #115C3E 11.71%, #21A74D 113.94%)",
        }}
        className="mx-auto"
      >
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-base text-white font-sembold mb-2">© 2022 by Salam Kisan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
