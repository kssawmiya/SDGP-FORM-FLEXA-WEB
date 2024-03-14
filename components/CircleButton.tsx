// @ts-nocheck
import Image from "next/image";
import Link from "next/link";

interface CircleButtonProps {
  link: string;
  text: string;
  imageId: string;
}

const CircleButton = ({ link, text, imageId }: CircleButtonProps) => {
  return (
    <Link
      href={link}
      className="w-[200px] h-[200px] my-gradient rounded-full flex flex-col items-center justify-around p-5"
    >
      <Image
        src={`/images/buttons/${imageId}.png`}
        width={130}
        height={130}
        alt="Picture of the author"
      />
      <p className="text-slate-100 font-bold">{text}</p>
    </Link>
  );
  //
};

export default CircleButton;
