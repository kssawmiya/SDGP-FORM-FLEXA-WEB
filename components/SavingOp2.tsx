"use client";
import React from "react";
import SavingOpButton from "./SavingOpButton";
import FooterButton from "./FooterButton";
import useFormStore from "@/app/store";

const SavingOp2 = () => {
  const setMobileBankingChecked = useFormStore(
    (state: any) => state.setMobileBankingChecked
  );
  return (
    <div className="w-4/5  h-screen flex flex-col p-20 ">
      <div className="flex items-center justify-center w-full">
        <p className="text-4xl text-pink-800 font-bold mt-7">
          Do you wish to receive SMS and Emails of your transactions.
        </p>
      </div>

      <div className="flex mt-36 space-x-72">
        <div className="mt-[40px] justify-center ml-36">
          <SavingOpButton
            onClick={() => setMobileBankingChecked(true)}
            link="/services/signature"
            text="Yes"
            isBack={true}
            width="280px"
            height="130px"
          />
        </div>
        <div className="mt-[40px] justify-center">
          <SavingOpButton
            onClick={() => setMobileBankingChecked(false)}
            link="/services/signature"
            text="No"
            isBack={false}
            width="280px"
            height="130px"
          />
        </div>
      </div>

      <div className="flex mt-[200px]">
        <FooterButton
          link="/services/saving/SavingOp1"
          text="Go Back"
          isBack={true}
        />
      </div>
    </div>
  );
};

export default SavingOp2;
