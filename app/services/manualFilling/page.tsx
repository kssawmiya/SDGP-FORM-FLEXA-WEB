import ManualFormFilling from "@/components/ManualFormFilling";
import SideBar from "@/components/SideBar";
import React from "react";

const page = () => {
  return (
    <div className="flex column h-screen">
      <SideBar />
      <ManualFormFilling />
    </div>
  );
};

export default page;
