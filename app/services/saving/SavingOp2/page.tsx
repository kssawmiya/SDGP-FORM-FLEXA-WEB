import SavingOp2 from "@/components/SavingOp2";
import SideBar from "@/components/SideBar";
import React from "react";

const page = () => {
  return (
    <div className="flex column h-screen">
      <SideBar />
      <SavingOp2 />
    </div>
  );
};

export default page;
