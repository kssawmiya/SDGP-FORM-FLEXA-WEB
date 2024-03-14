import SideBar from "@/components/SideBar";
import Signature from "@/components/Signature";

const page = () => {
  return (
    <div className="flex column h-screen">
      <SideBar />
      <Signature />
    </div>
  );
};

export default page;
