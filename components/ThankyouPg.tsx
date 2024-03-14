// @ts-nocheck
import Image from "next/image";
import React from "react";

const ThankyouPg = () => {
  return (
    <div className="flex border-4 border-fuchsia-800 rounded-xl w-[900px] h-[500px] m-32 ml-[230px] shadow-lg shadow-fuchsia-700">
      <img
        className="h-48 w-48 mt-28"
        src={
          "https://media.tenor.com/SNL9_xhZl9oAAAAi/waving-hand-joypixels.gif"
        }
        alt="bye"
      />
      <div className="flex flex-col">
        <p className="text-5xl font-serif mt-36 font-semibold text-center text-fuchsia-800">
          Thank You For Filling the Form,
        </p>
        <br />
        <p className="text-5xl font-serif font-semibold text-center text-fuchsia-800 ">
          Have a nice day...
        </p>
      </div>
    </div>
  );
};
//
export default ThankyouPg;
