"use client";
// @ts-nocheck
import Link from "next/link";
import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface SavingOpButtonProps {
  link: string;
  text: string;
  isBack: boolean;
  width: string;
  height: string;
  onClick: any;
}

const SavingOpButton = ({
  link,
  text,
  isBack,
  width,
  height,
  onClick,
}: SavingOpButtonProps) => {
  return (
    <Link
      onClick={onClick}
      href={link}
      className={`w-[${width}] h-[${height}] my-gradient border rounded-3xl flex justify-evenly items-center p-10 space-x-2 shadow shadow-blue-500/40 hover:shadow-indigo-500/40`}
    >
      {isBack && <FaCheckCircle size={50} color="white" />}
      <p className="text-slate-200 text-3xl font-semibold">{text}</p>
      {!isBack && <FaTimesCircle size={50} color="white" />}
    </Link>
  );
};
//

export default SavingOpButton;
