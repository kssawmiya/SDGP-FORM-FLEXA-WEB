import ScanQRCode from "@/components/ScanQRCode";
import SideBar from "@/components/SideBar";
import React from "react";

const page = () => {
  return (
    <div className="flex column h-screen">
      <SideBar />
      <ScanQRCode />
    </div>
  );
};

export default page;
