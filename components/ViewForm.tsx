import React from "react";
import FooterButton from "./FooterButton";
import ViewSavingForm from "./viewSavingForm";

const ViewForm = () => {
  return (
    <div className="w-4/5 h-screen flex flex-col p-5">
      <div
        className="w-4/5 h-4/5 border-fuchsia-900 ml-28 mt-7 rounded-xl border-4"
        style={{ overflowY: "auto" }}
      >
        <ViewSavingForm />
      </div>
      <div className="flex mt-[40px] justify-between">
        <FooterButton link="/services/saving" text="Go Back" isBack={true} />
      </div>
    </div>
  );
};

export default ViewForm;
