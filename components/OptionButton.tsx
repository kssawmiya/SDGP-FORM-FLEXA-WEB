import Link from "next/link";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface OptionButtonProps {
  link: string;
  text: string;
  isBack: Boolean;
}

const OptionButton = ({ link, text, isBack }: OptionButtonProps) => {
  return (
    <Link
      href={link}
      className="w-[280px] h-[80px] my-gradient border rounded-full flex justify-evenly items-center text"
    >
      {isBack && <FaCheckCircle size={50} color="white" />}
      <p className="text-slate-200 text-3xl font-semibold">{text}</p>
      {!isBack && <FaTimesCircle size={50} color="white" />}
    </Link>
  );
};

export default OptionButton;
