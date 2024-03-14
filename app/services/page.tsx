import HomePage from "@/components/HomePage";
import ServicePage from "@/components/ServicePage";
import SideBar from "@/components/SideBar";
import React from "react";

const Services = () => {
  return (
    <div className="flex column h-screen">
      <SideBar />
      <ServicePage />
    </div>
  );
};

export default Services;
