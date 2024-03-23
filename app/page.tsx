import HomePage from "@/components/HomePage";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex column h-screen">
      <SideBar />
      <HomePage />
    </div>
  );
}
