import Link from "next/link";
import { FaWpforms } from "react-icons/fa";

const FormButton = () => {
  return (
    <Link
      href="/services/saving/viewFrom"
      className="w-[280px] h-[80px] border-pink-700 border-2 rounded-full flex justify-evenly items-center text"
    >
      <p className="text-pink-700 font-semibold text-2xl">View Form</p>
      <FaWpforms color="#be185d" size={45} />
    </Link>
  );
};

export default FormButton;
