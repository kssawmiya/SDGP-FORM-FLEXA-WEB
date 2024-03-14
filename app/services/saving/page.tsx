import SavingPage from "@/components/SavingPage";
import SideBar from "@/components/SideBar";
import React from "react";

const Saving = () => {
  return (
    <div className="flex column h-screen">
      <SideBar />
      <SavingPage />
    </div>
  );
};

export default Saving;
