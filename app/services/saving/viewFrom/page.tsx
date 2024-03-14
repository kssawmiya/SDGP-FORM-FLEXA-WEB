import SideBar from "@/components/SideBar";
import ViewForm from "@/components/ViewForm";
import React from "react";

const page = () => {
  return (
    <div className="flex column h-screen">
      <SideBar />
      <ViewForm />
    </div>
  );
};

export default page;
