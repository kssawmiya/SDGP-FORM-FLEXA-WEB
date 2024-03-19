import FilledForm from "@/components/FilledForm";
import FilledFormUpdated from "@/components/FilledFormUpdated";
import SideBar from "@/components/SideBar";
import React from "react";

const page = () => {
  return (
    <div className="flex column h-screen">
      <SideBar />
      <FilledFormUpdated />
    </div>
  );
};

export default page;
