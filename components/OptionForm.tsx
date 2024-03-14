import Image from "next/image";
import React from "react";
import OptionButton from "./OptionButton";
import FooterButton from "./FooterButton";

const OptionForm = () => {
  return (
    <div className="w-4/5  h-screen flex flex-col p-14">
      <div className="flex justify-center items-center">
        <p className="font-bold text-fuchsia-800 text-4xl font-serif ">
          Are you a FormFlexa User
        </p>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col">
          <Image
            width={400}
            height={400}
            src={"/Group 49.png"}
            alt="phone option"
          />
          <div className="flex mt-[40px] justify-center">
            <OptionButton
              link="/services/scanQRcode"
              text="Yes"
              isBack={true}
            />
          </div>
        </div>

        <div className="flex flex-col mt-20">
          <div className="border-4 border-fuchsia-800 w-56 h-64 ml-5 rounded-xl shadow-xl shadow-fuchsia-700">
            <img
              className="h-56 w-56"
              src={
                "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExODMwMWo0NzR2NDFrdnc4dzZ6d2o3Zm83NXZuNmdyMmh2am9iNWh6ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3a53VvGpzUgh05qq7W/giphy.gif"
              }
              alt="form"
            />
          </div>
          <div className="flex mt-[120px] justify-center">
            <OptionButton link="/services/signature" text="No" isBack={false} />
          </div>
        </div>
      </div>
      <div className="flex mt-[50px]">
        <FooterButton link="/services/saving" text="Go Back" isBack={true} />
      </div>
    </div>
  );
};

export default OptionForm;
