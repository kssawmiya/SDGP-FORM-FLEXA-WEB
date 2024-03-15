// @ts-nocheck
import Link from "next/link";
import { FaWpforms } from "react-icons/fa";

const FormButton = () => {
  return (
    <Link
      href="/services/saving/viewFrom"
      className="w-[280px] h-[80px] border-fuchsia-900 border-2 rounded-full flex justify-evenly items-center text"
    >
      <p className="text-fuchsia-900 font-semibold text-2xl">View Form</p>
      <FaWpforms color="#7F1074" size={45} />
    </Link>
  );
};

export default FormButton;
