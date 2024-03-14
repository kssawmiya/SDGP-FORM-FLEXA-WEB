"use client";
import React, { useState, useRef, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import RetryButton from "./RetryButton";
import useFormStore from "@/app/store";

interface DrawingPointerProps {
  setUrl: any;
  save: any;
}

const DrawingPointer = ({ setUrl, save }: DrawingPointerProps) => {
  const [sign, setSign] = useState<SignatureCanvas | null>(null);
  const setSignImageUrl = useFormStore((state: any) => state.setSignImageUrl);

  useEffect(() => {
    handleGenerate();
  }, [save]);

  //const [url, setUrl] = useState<string | undefined>();

  const handleClear = () => {
    if (sign) {
      sign.clear();
      setUrl(undefined);
      setSignImageUrl("");
    }
  };

  const handleGenerate = () => {
    if (sign) {
      console.log("url" + sign.getTrimmedCanvas().toDataURL("image/png"));
      setUrl(sign.getTrimmedCanvas().toDataURL("image/png"));
      setSignImageUrl(sign.getTrimmedCanvas().toDataURL("image/png"));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="border border-slate-950 h-[450px] w-[800px] flex justify-center items-center mt-4">
        <SignatureCanvas
          canvasProps={{ width: 800, height: 500, className: "sigCanvas" }}
          ref={(data) => setSign(data)}
        />
      </div>

      {/* <RetryButton /> */}
      <div className="mt-5">
        <RetryButton onClick={handleClear} />
        {/* <button
          style={{ height: "30px", width: "60px" }}
          onClick={handleGenerate}
        >
          Save
        </button> */}
      </div>

      {/* {url && <img src={url} />} */}
    </div>
  );
};

export default DrawingPointer;
