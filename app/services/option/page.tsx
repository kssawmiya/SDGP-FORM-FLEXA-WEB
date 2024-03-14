import OptionForm from "@/components/OptionForm";
import SideBar from "@/components/SideBar";
import React from "react";

const page = () => {
  return (
    <div className="flex column h-screen">
      <SideBar />
      <OptionForm />
    </div>
  );
};

export default page;
