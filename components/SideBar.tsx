"use client";
import NextLink from "next/link";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-and-time";
import { useState, useEffect } from "react";

const SideBar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = currentDateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return (
    <div className="bg-slate-600 w-1/5 flex justify-around flex-col items-center h-screen my-gradient">
      <Link href="/">
        <Image
          className="mt-10"
          src="/images/mainLogo.png"
          width={200}
          height={200}
          alt="Picture of the author"
        />
      </Link>
      <div className="flex flex-col items-center justify-evenly my-10 h-[280px] text-4xl font-semibold font-serif">
        <p className="text-slate-50">WELCOME</p>
        <p className="text-slate-50">TO</p>
        <p className="text-pink-950">FORM FLEXA</p>
      </div>
      <div className="flex flex-col items-center justify-evenly my-10 text-snow-200 font-serif font-semibold text-3xl h-[75px] text-slate-300">
        <h1>{formattedDate}</h1>
        <p className="mt-3">{formattedTime}</p>
      </div>
    </div>
  );
};

export default SideBar;
