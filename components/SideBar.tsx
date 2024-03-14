import NextLink from "next/link";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className="bg-slate-600 w-1/5 flex justify-around flex-col items-center h-screen my-gradient">
      <Image
        className="mt-10"
        src="/images/mainLogo.png"
        width={200}
        height={200}
        alt="Picture of the author"
      />
      <div className="flex flex-col items-center justify-evenly my-10 h-[280px] text-4xl font-semibold font-serif">
        <p className="text-slate-50">WELCOME</p>
        <p className="text-slate-50">TO</p>
        <p className="text-pink-950">FORM FLEXA</p>
      </div>

      <div className="flex flex-col items-center justify-evenly my-10 text-snow-200 font-serif font-semibold text-3xl h-[75px] text-slate-300">
        <h1>3rd January 2024</h1>
        <p className="mt-3">09:00:00 AM</p>
      </div>
    </div>
  );
};

export default SideBar;
