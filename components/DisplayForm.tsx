"use client";
// @ts-nocheck
import useFormStore from "@/app/store";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import dotenv from "dotenv";
import VirtualKeyboard from "./VitualKeyboard";
dotenv.config();

interface FormAttributes {
  en: {
    address: string;
    name: string;
    NIC: string;
    dob: string;
    passport: string;
    contactNo: string;
  };
}

interface DisplayFormProps {
  toggleKeyboard: () => void;
  inputValue: string;
  handleInputChange: (input: string) => void;
}

const DisplayForm = ({
  toggleKeyboard,
  inputValue,
  handleInputChange,
}: DisplayFormProps) => {
  const mobileBankingChecked = useFormStore(
    (state: any) => state.mobileBankingChecked
  );
  const signImageUrl = useFormStore((state: any) => state.signImageUrl);
  const sessionId = useFormStore((state: any) => state.sessionId);

  const socketUrl =
    process.env.SOCKET_IO_URL || "https://sdgp-50-server-1.onrender.com"; // Provide a default URL
  const socket = io(socketUrl);
  const [messageReceived, setMessageReceived] = useState("");

  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [passport, setPassport] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");

  useEffect(() => {
    socket.on("receive_message", (data) => {
      const { en }: FormAttributes = JSON.parse(data.message);

      setMessageReceived(data.message);
      setNic(en.NIC);
      setName(en.name);
      setDob(en.dob);
      setPassport(en.passport);
      setAddress(en.address);
      setContactNo(en.contactNo);
    });
  }, [socket]);

  useEffect(() => {
    socket.emit("join_room", sessionId);
  }, []);

  return (
    <>
      <div className="bg-white w-[650px] h-[1020px] border border-black ml-52">
        <form>
          <div className="flex justify-between pb-3">
            <div className="flex flex-col">
              <div className="flex space-x-2 p-2">
                <label>Date :</label>
                <input
                  type="text"
                  name="date"
                  className="border border-black rounded-md w-24"
                  value={inputValue}
                  onClick={toggleKeyboard}
                  onChange={(e) => handleInputChange(e.target.value)}
                />
              </div>
              <div className="flex space-x-2 p-2">
                <label>branch :</label>
                <input
                  type="text"
                  name="branch"
                  className="border border-black rounded-md w-32"
                  value={inputValue}
                  onClick={toggleKeyboard}
                  onChange={(e) => handleInputChange(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col border border-black">
              <p className="font-semibold text-center">For Bank Use Only</p>
              <label className="p-2">
                Account No :
                <input
                  type="text"
                  name="Account No"
                  className="border border-black rounded-md"
                  value={inputValue}
                  onClick={toggleKeyboard}
                  onChange={(e) => handleInputChange(e.target.value)}
                />
              </label>
              <label className="p-2 space-x-2 pb-3">
                CIF No :
                <input
                  type="text"
                  name="CIF No"
                  className="border border-black rounded-md"
                  value={inputValue}
                  onClick={toggleKeyboard}
                  onChange={(e) => handleInputChange(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div>
            <div className="">
              <p className="font-semibold text-white bg-fuchsia-800 w-[650px] text-center p-1">
                TYPE OF ACCOUNTS
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-2">
                <label>General Saving</label>
                <input type="checkbox" name="language" />
              </div>
              <div className="flex space-x-2">
                <label>Capital Saving</label>
                <input type="checkbox" name="language" />
              </div>
              <div className="flex space-x-2">
                <label>Others</label>
                <input type="checkbox" name="language" />
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <p className="font-semibold text-white bg-fuchsia-800 w-[650px] text-center p-1">
                PERSONAL DETAILS
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex border space-x-5 p-1">
                <label>1. Name in Full</label>
                <input
                  type="text"
                  name="Full Name"
                  className="border border-black rounded-md w-96"
                  value={name}
                  onClick={toggleKeyboard}
                  onChange={(e) => handleInputChange(e.target.value)}
                />
              </div>
              <div className="flex border space-x-5 p-1">
                <label>2. NIC No</label>
                <input
                  type="text"
                  name="NIC No"
                  className="border border-black rounded-md w-80"
                  value={nic}
                  onClick={toggleKeyboard}
                  onChange={(e) => handleInputChange(e.target.value)}
                />
              </div>
              <div className="flex border space-x-5 p-1">
                <label>3. Passport No</label>
                <input
                  type="text"
                  name="Passport No"
                  className="border border-black rounded-md w-80"
                  value={passport}
                  onClick={toggleKeyboard}
                  onChange={(e) => handleInputChange(e.target.value)}
                />
              </div>
              <div className="flex border space-x-5 p-1">
                <label>4. Date of Birth</label>
                <input
                  type="text"
                  name="Date of Birth"
                  className="border border-black rounded-md w-52"
                  value={dob}
                  onClick={toggleKeyboard}
                  onChange={(e) => handleInputChange(e.target.value)}
                />
              </div>
              <div className="flex border  space-x-5 p-1">
                <label>5. Permanent Address</label>
                <input
                  type="text"
                  name="Permanent Address"
                  className="border border-black rounded-md w-96"
                  value={address}
                  onClick={toggleKeyboard}
                  onChange={(e) => handleInputChange(e.target.value)}
                />
              </div>
              <div className="flex border space-x-5 p-1">
                <label>6. Contact Number</label>
                <input
                  type="text"
                  name="Contact Number"
                  className="border border-black rounded-md w-96"
                  value={contactNo}
                  onClick={toggleKeyboard}
                  onChange={(e) => handleInputChange(e.target.value)}
                />
              </div>
              <div className="flex border space-x-5 p-1">
                7. Citizenship :
                <div className="flex space-x-1">
                  <label>Srilankan</label>
                  <input type="checkbox" name="Srilankan" />
                </div>
                <div className="flex space-x-1">
                  <label>Others</label>
                  <input type="checkbox" name="Others" />
                </div>
              </div>

              <div className="flex border space-x-5 p-1">
                <label>8. Signature :</label>
                <div>
                  <Image
                    src={signImageUrl}
                    alt="signature"
                    height={200}
                    width={200}
                  />
                </div>
              </div>
              <div className="flex space-x-5 p-2 justify-between">
                <div className="flex space-x-2 p-2 border border-black">
                  <div className="flex space-x-2">
                    <input
                      type="checkbox"
                      name="language"
                      checked={mobileBankingChecked}
                    />
                    <label>Moblie Banking</label>
                  </div>
                </div>
                <div className="flex space-x-5 p-2 border border-black">
                  <label>SMS/Email</label>
                  <input
                    type="checkbox"
                    name="language"
                    checked={mobileBankingChecked}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="font-semibold text-white bg-fuchsia-800 w-[650px] text-center p-1">
                DECLARATION
              </p>
              <p className="p-2">
                ELECTRONIC FUND TRANSFER CARD (EFTC)
                <p className="text-justify p-1">
                  1. I hereby confirm that I am aware of the terms and
                  conditions applicable for the use of Electronic Fund Transfer
                  Cards (the EFTC) as detailed in the Directions No. 03 of 2021
                  dated 18th March 2021 issued under the provisions of the
                  Foreign Exchange Act, No. 12 of 2017 (the FEA) subject to
                  which the card may be used for transactions
                </p>
                <br />
                <p className="text-justify p-1">
                  2. I further agree to provide any information on transactions
                  carried out by me in foreign exchange on the card issued to me
                  as Hatton National Bank PLC (the Bank) may require for the
                  purpose of the FEA.
                </p>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default DisplayForm;
