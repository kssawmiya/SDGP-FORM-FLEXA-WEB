// @ts-nocheck
"use client";
import { RefObject, SetStateAction, useEffect, useRef, useState } from "react";
import DisplayForm from "./DisplayForm";
import FooterButton from "./FooterButton";
import VirtualKeyboard from "./VitualKeyboard";

const FilledForm = () => {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const keyboardContainerRef: RefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const inputField = document.querySelector("input");
      if (
        showKeyboard &&
        keyboardContainerRef.current &&
        !keyboardContainerRef.current.contains(event.target as Node) &&
        event.target !== inputField
      ) {
        setShowKeyboard(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showKeyboard]);

  const toggleKeyboard = () => {
    setShowKeyboard(!showKeyboard);
  };

  const handleInputChange = (input: SetStateAction<string>) => {
    setInputValue(input);
  };
  return (
    <div className="w-4/5 h-screen flex flex-col p-5">
      <div
        className="w-4/5 h-4/5 border-fuchsia-900 ml-28 mt-7 rounded-xl border-4"
        style={{ overflowY: "auto" }}
      >
        <DisplayForm
          toggleKeyboard={toggleKeyboard}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
        />
      </div>
      <div className="flex mt-[40px] justify-between">
        <FooterButton link="/services/thankYou" text="Print" isBack={""} />
      </div>

      {showKeyboard && (
        <div
          className="absolute inset-0 flex items-center justify-center mt-[500px] ml-[700px] w-[900px] bg-fuchsia-900 border rounded-3xl"
          ref={keyboardContainerRef}
        >
          <VirtualKeyboard
            onChange={handleInputChange}
            initialInput={inputValue}
          />
        </div>
      )}
    </div>
  );
  //
};

export default FilledForm;
