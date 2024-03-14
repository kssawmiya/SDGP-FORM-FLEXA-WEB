// @ts-nocheck
import Link from "next/link";

interface LanguageButtonProps {
  text: string;
  subText: string;
}

const LanguageButton = ({ text, subText }: LanguageButtonProps) => {
  return (
    <Link
      href="/services"
      className="h-[210px] w-[210px] my-gradient flex flex-col items-center justify-around p-5 rounded-2xl text-slate-100"
    >
      <p className="text-9xl ">{text}</p>
      <p className="text-3xl">{subText}</p>
    </Link>
  );
};

export default LanguageButton;
