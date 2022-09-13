import React from "react";

const Contacts = () => {
  return (
    <div className="h-auto p-10 flex flex-col gap-10">
      <div>
        <h1 className="text-5xl text-center font-semibold">
          Connect With Us Here
        </h1>
      </div>
      <div className="flex flex-wrap gap-7 px-2 xl:w-4/5 w-full justify-center mx-auto">
        <div className="w-80 md:w-72 xl:w-80 flex flex-col gap-2">
          <p className="font-bold text-xl">Email</p>
          <span className="text-xl">
            <a href="mailto:info@salamkisan.com">info@salamkisan.com </a>
          </span>
          <p className="font-bold text-xl">Phone</p>
          <span className="text-xl">
            <a href="tel:022-35120759">022-35120759</a>
          </span>
        </div>
        <div className="w-80 md:w-72 xl:w-80 flex flex-col gap-2">
          <p className="font-bold text-xl">Registered Office Address</p>
          <address className="text-xl">
            Prym Solution Private Limited <br/>C - 104, 10th Floor, Plot No. 210,<br/>C –
            Wing Mittal Tower, Barrister Rajni Patel Marg <br/>Mumbai 400021,
            Maharashtra <br/><span className="font-bold">Registration Number – 27AAMCP5981E1ZZ</span>
          </address>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
