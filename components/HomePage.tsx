import React from "react";
import Image from "next/image";
import LanguageButton from "./LanguageButton";

const HomePage = () => {
  return (
    <div className="w-4/5  h-screen flex flex-col items-center">
      <Image
        className="mt-5"
        src="/images/model.png"
        width={400}
        height={400}
        alt="Picture of the author"
      />
      <div className="text-3xl font-medium leading-10 text-pink-950 my-5 text-center">
        <p> Please Select Your Language</p>
        <p> தயவுசெய்து உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்</p>
        <p> කරුණාකර ඔබගේ භාෂාව තෝරන්න</p>
      </div>
      <div className="flex w-4/5 justify-between mt-2">
        <LanguageButton text="A" subText="English" />
        <LanguageButton text="அ" subText="தமிழ்" />
        <LanguageButton text="අ" subText="සිංහල" />
      </div>
    </div>
  );
};

export default HomePage;
