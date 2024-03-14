"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ContinueButton from "./ContinueButton";
import io from "socket.io-client";

interface FormAttributes {
  en: {
    name: string;
  };
}

const VerificationPg = () => {
  const socket = io("http://localhost:3001");
  const [messageReceived, setMessageReceived] = useState("");

  const [name, setName] = useState("");

  useEffect(() => {
    socket.on("receive_message", (data) => {
      const { en }: FormAttributes = JSON.parse(data.message);

      setMessageReceived(data.message);
      setName(en.name);
    });
  }, [socket]);

  useEffect(() => {
    socket.emit("join_room", "45");
  }, []);
  return (
    <div className="w-4/5  h-screen flex flex-col p-20 ">
      <div className="flex items-center justify-center w-full mr-6">
        <p className="text-4xl text-fuchsia-800 font-bold text-center">
          Verification of the User
        </p>
      </div>
      <div className="flex justify-around">
        {/* generate the QR code */}
        <div className="mt-20 mr-auto">
          <Image
            width={500}
            height={500}
            src={"/Group67.png"}
            alt="phone option"
          />
        </div>

        <div
          className="flex flex-col mt-32 text-fuchsia-900 font-serif text-center font-semibold 
        text-4xl p-20 justify-around"
        >
          <p>Hi! {name},Welcome,to FormFlexa</p>
          <p>Let's fill your form for you...</p>
        </div>
      </div>
      <div className="flex mt-16 ml-auto">
        <ContinueButton link="/services/saving/SavingOp1" text="Continue" />
      </div>
    </div>
  );
};

export default VerificationPg;
