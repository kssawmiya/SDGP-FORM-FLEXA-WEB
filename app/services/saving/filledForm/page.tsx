import FilledForm from "@/components/FilledForm";
import SideBar from "@/components/SideBar";
import React from "react";

const page = () => {
  return (
    <div className="flex column h-screen">
      <SideBar />
      <FilledForm />
    </div>
  );
};

export default page;
