// @ts-nocheck
import { IoIosStar } from "react-icons/io";

interface InfoPointProps {
  text: string;
}

const InfoPoint = ({ text }: InfoPointProps) => {
  return (
    <div className="flex items-center justify-start p-2">
      <IoIosStar color="#be185d" size={25} />
      <p className="ml-5 font-medium text-3xl">{text}</p>
    </div>
  );
};

export default InfoPoint;
