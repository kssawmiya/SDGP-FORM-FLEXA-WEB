// FooterButton.tsx
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface FooterButtonProps {
  link: string;
  text: string;
  isBack: Boolean | any;
  onClick?: () => void;
}

const FooterButton = ({ link, text, isBack, onClick }: FooterButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="w-[280px] h-[80px] my-gradient border rounded-full flex justify-evenly items-center text cursor-pointer"
    >
      <Link href={link} passHref>
        <div className="flex justify-evenly items-center text-slate-200 text-3xl font-semibold">
          {isBack && <FaChevronLeft size={30} color="white" />}
          <p>{text}</p>
          {!isBack && <FaChevronRight size={30} color="white" />}
        </div>
      </Link>
    </div>
  );
};

export default FooterButton;
