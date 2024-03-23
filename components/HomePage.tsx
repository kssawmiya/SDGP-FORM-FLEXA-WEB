// @ts-nocheck
import React from "react";
import Image from "next/image";
import LanguageButton from "./LanguageButton";

const HomePage = () => {
  return (
    <div className="w-4/5  h-screen flex flex-col items-center">
      <Image
        className="mt-5"
        src="/images/model.png"
        width={350}
        height={350}
        alt="Picture of the author"
      />
      <div className="text-3xl font-semibold leading-10 text-fuchsia-900 my-5 text-center font-serif">
        <p className="p-1"> Please Select Your Language</p>
        <p className="p-1"> தயவுசெய்து உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்</p>
        <p className="p-1"> කරුණාකර ඔබගේ භාෂාව තෝරන්න</p>
      </div>
      <div className="flex w-4/5 justify-between mt-2 font-serif">
        <LanguageButton text="A" subText="English" />
        <LanguageButton text="அ" subText="தமிழ்" />
        <LanguageButton text="අ" subText="සිංහල" />
      </div>
    </div>
  );
};

export default HomePage;
