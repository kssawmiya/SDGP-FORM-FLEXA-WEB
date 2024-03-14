import Link from "next/link";
import React from "react";

interface ContinueButtonProps {
  link: string;
  text: string;
}

const ContinueButton = ({ link, text }: ContinueButtonProps) => {
  return (
    <Link
      href={link}
      className="w-[280px] h-[80px] my-gradient border rounded-full flex justify-evenly items-center text"
    >
      <p className="text-slate-200 text-3xl font-semibold">{text}</p>
    </Link>
  );
};

export default ContinueButton;
