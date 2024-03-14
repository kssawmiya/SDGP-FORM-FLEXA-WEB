import React from "react";
import CircleButton from "./CircleButton";
import FooterButton from "./FooterButton";

const ServicePage = () => {
  return (
    <div className="w-4/5  h-screen flex flex-col p-5">
      <div className="flex justify-center">
        <p className="font-bold text-pink-950 text-4xl font-serif">
          Please Select the Service Required
        </p>
      </div>
      <div className="w-full p-20">
        <div className="flex justify-between items-center w-full">
          <CircleButton
            text="Savings Account"
            imageId="1"
            link="services/saving"
          />
          <CircleButton text="Personal Loans" imageId="2" link="next" />
          <CircleButton text="Cards" imageId="3" link="next" />
          <CircleButton text="Fixed Deposit" imageId="4" link="next" />
        </div>

        <div className="flex justify-between items-center w-full mt-20">
          <CircleButton text="Housing Loans" imageId="5" link="next" />
          <CircleButton text="Current Account" imageId="6" link="next" />
          <CircleButton text="Leasing Service" imageId="7" link="next" />
          <CircleButton text="KYC Form" imageId="8" link="next" />
        </div>
      </div>
      <FooterButton link="/" isBack={true} text="Go Back" />
    </div>
  );
};

export default ServicePage;
