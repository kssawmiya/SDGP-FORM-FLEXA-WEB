"use client";
// @ts-nocheck
import React from "react";
import FooterButton from "./FooterButton";
import SavingOpButton from "./SavingOpButton";
import useFormStore from "@/app/store";

const SavingOp1 = () => {
  const setMobileBankingChecked = useFormStore(
    (state: any) => state.setMobileBankingChecked
  );

  return (
    <div className="w-4/5  h-screen flex flex-col p-20 ">
      <div className="flex items-center justify-center w-full">
        <p className="text-4xl text-fuchsia-900 font-bold">
          Do you wish to add Moblie/Online Banking
        </p>
      </div>

      <div className="flex mt-44 space-x-72">
        <div className="mt-[40px] justify-center ml-36">
          <SavingOpButton
            onClick={() => setMobileBankingChecked(true)}
            link="/services/saving/SavingOp2"
            text="Yes"
            isBack={true}
            width="280px"
            height="230px"
          />
        </div>
        <div className="mt-[40px] justify-center">
          <SavingOpButton
            onClick={() => setMobileBankingChecked(false)}
            link="/services/saving/SavingOp2"
            text="No"
            isBack={false}
            width="280px"
            height="230px"
          />
        </div>
      </div>

      <div className="flex mt-[200px]">
        <FooterButton link="/services/verified" text="Go Back" isBack={true} />
      </div>
    </div>
  );
};
//

export default SavingOp1;
