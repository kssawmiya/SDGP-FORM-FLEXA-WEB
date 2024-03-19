// @ts-nocheck
"use client";
import { RefObject, SetStateAction, useEffect, useRef, useState } from "react";
import DisplayForm from "./DisplayForm";
import FooterButton from "./FooterButton";
import "simple-keyboard/build/css/index.css";
import Keyboard from "react-simple-keyboard";

const FilledForm = () => {
  const [focus, setFocus] = useState("");

  const onChange = (input) => {
    console.log("Input changed", input);
    if (focus == "name") {
      setName(input);
    } else if (focus == "age") {
      setNic(input);
    }
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
  };

  return (
    <div className="w-4/5 h-screen flex flex-col p-5">
      <div
        className="w-4/5 h-4/5 border-fuchsia-900 ml-28 mt-7 rounded-xl border-4"
        style={{ overflowY: "auto" }}
      >
        <DisplayForm />
      </div>
      <div className="flex mt-[40px] justify-between">
        <FooterButton link="/services/thankYou" text="Print" isBack={""} />
      </div>

      <Keyboard
        theme={"hg-theme-default hg-layout-default myTheme simple-keyboard"}
        onChange={onChange}
        onKeyPress={onKeyPress}
        inputName={focus}
      />
    </div>
  );
  //
};

export default FilledForm;
