// @ts-nocheck
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface FooterButtonProps {
  link: string;
  text: string;
  isBack: Boolean | any;
  onClick?: any | undefined;
}

const FooterButton = ({ link, text, isBack, onClick }: FooterButtonProps) => {
  return (
    <Link
      href={link}
      onClick={onClick}
      className="w-[280px] h-[80px] my-gradient border rounded-full flex justify-evenly items-center text"
    >
      {isBack && <FaChevronLeft size={30} color="white" />}
      <p className="text-slate-200 text-3xl font-semibold">{text}</p>
      {!isBack && <FaChevronRight size={30} color="white" />}
    </Link>
  );
};

export default FooterButton;
