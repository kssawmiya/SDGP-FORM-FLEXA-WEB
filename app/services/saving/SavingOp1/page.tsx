import SavingOp1 from "@/components/SavingOp1";
import SideBar from "@/components/SideBar";
import React from "react";

const page = () => {
  return (
    <div className="flex column h-screen">
      <SideBar />
      <SavingOp1 />
    </div>
  );
};

export default page;
