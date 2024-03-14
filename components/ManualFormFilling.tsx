import React from "react";
import Image from "next/image";
import FooterButton from "./FooterButton";

const ManualFormFilling = () => {
  return (
    <div className="w-4/5  h-screen flex flex-col p-20 ">
      <div className="flex items-center justify-center w-full mr-6">
        <p className="text-4xl text-fuchsia-800 font-bold text-center">
          Scan the QR Code to Download the FormFlexa Application
        </p>
      </div>
      <div className="flex justify-around">
        {/* generate the QR code */}
        <div className="flex w-64 h-64 border-4 border-fuchsia-900 mt-28 rounded-3xl"></div>

        <div className="flex flex-col mt-20">
          <Image
            width={400}
            height={400}
            src={"/Group43.png"}
            alt="phone option"
          />
        </div>
      </div>
      <div className="flex mt-[50px]">
        <FooterButton link="/services/option" text="Go Back" isBack={true} />
      </div>
    </div>
  );
};

export default ManualFormFilling;
