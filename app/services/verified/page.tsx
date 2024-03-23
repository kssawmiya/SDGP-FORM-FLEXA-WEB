import SideBar from "@/components/SideBar";
import VerificationPg from "@/components/VerificationPg";
import React, { useEffect, useState } from "react";

const page = () => {
  return (
    <div className="flex column h-screen">
      <SideBar />
      <VerificationPg />
    </div>
  );
};

export default page;
