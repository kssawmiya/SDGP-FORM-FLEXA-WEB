"use client";
import { useState } from "react";
import DrawingPointer from "./DrawingPointer";
import FooterButton from "./FooterButton";
import RetryButton from "./RetryButton";

const Signature = () => {
  const [url, setUrl] = useState("");
  const [save, setSave] = useState(false);

  const onClick = () => {
    setSave(true);
  };

  return (
    <div className="w-4/5 h-screen flex flex-col p-5">
      <div className="flex items-center justify-center w-full">
        <p className="text-4xl text-pink-800 font-bold mt-7 text-center">
          Write Your Signature
        </p>
      </div>
      {/* <div>
        <RetryButton onClick={}></RetryButton>
      </div> */}
      <div
        className="w-4/5 h-4/5 border-fuchsia-900 ml-28 mt-7 rounded-xl border-4"
        style={{ overflowY: "auto" }}
      >
        <DrawingPointer setUrl={setUrl} save={save} />
      </div>
      <div className="flex mt-[40px] justify-between">
        <FooterButton link="/services/saving" text="Go Back" isBack={true} />
        <FooterButton
          onClick={onClick}
          link="/services/saving/filledForm"
          text="continue"
          isBack={false}
        />
        {/* <p> Test:{url}</p> */}
      </div>
    </div>
  );
};

export default Signature;
