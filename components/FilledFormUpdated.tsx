// @ts-nocheck
"use client";
import FooterButton from "./FooterButton";
import "simple-keyboard/build/css/index.css";
import Keyboard from "react-simple-keyboard";
import useFormStore from "@/app/store";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// import io, { Socket } from "socket.io-client";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const FilledFormUpdated = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      formId: sessionId,
      fullname: name,
      generalSavings: generalSaving,
      capitalSavings: capitalSaving,
      otherSavings: others,
      addPhone_Email: mobileBankingChecked,
      sriLankanCitizenship: isSrilankan,
      otherCitizenship: isOtherCitizenship,
      address: address,
      profession: profession,
      dob: dob,
      passport: passport,
      nic: nic,
      email: email,
      contactNo: contactNo,
    };

    try {
      const response = await axios.post(
        "https://kafka-backend.onrender.com/api/v1/KafkaForm/sendMessage",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };

  const mobileBankingChecked = useFormStore(
    (state: any) => state.mobileBankingChecked
  );

  const signImageUrl = useFormStore((state: any) => state.signImageUrl);
  // const sessionId = useFormStore((state: any) => state.sessionId);
  const message = useFormStore((state: any) => state.message);

  // const socketUrl =
  //   process.env.SOCKET_IO_URL || "https://sdgp-50-server-1.onrender.com"; // Provide a default URL
  // const socket: Socket = io(socketUrl);
  const [messageReceived, setMessageReceived] = useState("");

  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [passport, setPassport] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [date, setDate] = useState("");
  const [branch, setBranch] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [CIF, setCIF] = useState("");
  const [profession, setProfession] = useState("");
  const [generalSaving, setGeneralSaving] = useState(false);
  const [capitalSaving, setCapitalSaving] = useState(false);
  const [others, setOthers] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isSrilankan, setIsSrilankan] = useState(false);
  const [isOtherCitizenship, setIsOtherCitizenship] = useState(false);
  const [focus, setFocus] = useState("");

  useEffect(() => {
    if (message != undefined && message != "{}") {
      const { en }: FormAttributes = JSON.parse(message);
      setMessageReceived(message);
      setNic(en.NIC);
      setName(en.name);
      setDob(en.dob);
      setPassport(en.passport);
      setAddress(en.address);
      setContactNo(en.contactNo);
      setProfession(en.profession);
      setEmail(en.email);
    }
  }, [message]);

  // useEffect(() => {
  //   socket.emit("join_room", sessionId);
  // }, []);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleChange2 = (event) => {
    setDate(event.target.value);
  };

  const handleChange3 = (event) => {
    setBranch(event.target.value);
  };

  const handleChange4 = (event) => {
    setAccountNo(event.target.value);
  };

  const handleChange5 = (event) => {
    setCIF(event.target.value);
  };

  const handleChange6 = (event) => {
    setNic(event.target.value);
  };

  const handleChange7 = (event) => {
    setPassport(event.target.value);
  };

  const handleChange8 = (event) => {
    setDob(event.target.value);
  };

  const handleChange9 = (event) => {
    setAddress(event.target.value);
  };

  const handleChange10 = (event) => {
    setContactNo(event.target.value);
  };

  const handleChange11 = (event) => {
    setProfession(event.target.value);
  };

  const handleChange12 = (event) => {
    setEmail(event.target.value);
  };

  const onChange = (input) => {
    console.log("Input changed", input);
    if (focus == "name") {
      setName(input);
    } else if (focus == "date") {
      setDate(input);
    } else if (focus == "branch") {
      setBranch(input);
    } else if (focus == "accountNo") {
      setAccountNo(input);
    } else if (focus == "CIF") {
      setCIF(input);
    } else if (focus == "nic") {
      setNic(input);
    } else if (focus == "passport") {
      setPassport(input);
    } else if (focus == "dob") {
      setDob(input);
    } else if (focus == "address") {
      setAddress(input);
    } else if (focus == "contactNo") {
      setContactNo(input);
    } else if (focus == "profession") {
      setProfession(input);
    } else if (focus == "email") {
      setEmail(input);
    }
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
  };

  const keyboardContainerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      keyboardContainerRef.current &&
      !keyboardContainerRef.current.contains(event.target)
    ) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-4/5 h-screen flex flex-col p-5">
      <div
        className="w-4/5 h-4/5 border-fuchsia-900 ml-28 mt-7 rounded-xl border-4"
        style={{ overflowY: "auto" }}
      >
        <div className="bg-white w-[650px] h-[1040px] border border-black ml-52">
          <form>
            <div className="flex justify-between pb-3">
              <div className="flex flex-col">
                <div className="flex space-x-2 p-2">
                  <label>Date :</label>
                  <input
                    type="text"
                    name="date"
                    className="border border-black rounded-md w-24"
                    value={date}
                    onFocus={() => setVisible(true)}
                    onChange={handleChange2}
                    onClick={() => setFocus("date")}
                  />
                </div>
                <div className="flex space-x-2 p-2">
                  <label>branch :</label>
                  <input
                    type="text"
                    name="branch"
                    className="border border-black rounded-md w-32"
                    value={branch}
                    onFocus={() => setVisible(true)}
                    onChange={handleChange3}
                    onClick={() => setFocus("branch")}
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
                    value={accountNo}
                    onFocus={() => setVisible(true)}
                    onChange={handleChange4}
                    onClick={() => setFocus("accountNo")}
                  />
                </label>
                <label className="p-2 space-x-2 pb-3">
                  CIF No :
                  <input
                    type="text"
                    name="CIF No"
                    className="border border-black rounded-md"
                    value={CIF}
                    onFocus={() => setVisible(true)}
                    onChange={handleChange5}
                    onClick={() => setFocus("CIF")}
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
                  <input
                    type="checkbox"
                    name="language"
                    checked={generalSaving}
                    onChange={(e) => setGeneralSaving(e.target.checked)}
                  />
                </div>
                <div className="flex space-x-2">
                  <label>Capital Saving</label>
                  <input
                    type="checkbox"
                    name="language"
                    checked={capitalSaving}
                    onChange={(e) => setCapitalSaving(e.target.checked)}
                  />
                </div>
                <div className="flex space-x-2">
                  <label>Others</label>
                  <input
                    type="checkbox"
                    name="language"
                    checked={others}
                    onChange={(e) => setOthers(e.target.checked)}
                  />
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
                    onFocus={() => setVisible(true)}
                    onChange={handleChange}
                    onClick={() => setFocus("name")}
                  />
                </div>
                <div className="flex border space-x-5 p-1">
                  <label>2. NIC No</label>
                  <input
                    type="text"
                    name="NIC No"
                    className="border border-black rounded-md w-80"
                    value={nic}
                    onFocus={() => setVisible(true)}
                    onChange={handleChange6}
                    onClick={() => setFocus("nic")}
                  />
                </div>
                <div className="flex border space-x-5 p-1">
                  <label>3. Passport No</label>
                  <input
                    type="text"
                    name="Passport No"
                    className="border border-black rounded-md w-80"
                    value={passport}
                    onFocus={() => setVisible(true)}
                    onChange={handleChange7}
                    onClick={() => setFocus("passport")}
                  />
                </div>
                <div className="flex border space-x-5 p-1">
                  <label>4. Date of Birth</label>
                  <input
                    type="text"
                    name="Date of Birth"
                    className="border border-black rounded-md w-52"
                    value={dob}
                    onFocus={() => setVisible(true)}
                    onChange={handleChange8}
                    onClick={() => setFocus("dob")}
                  />
                </div>
                <div className="flex border  space-x-5 p-1">
                  <label>5. Permanent Address</label>
                  <input
                    type="text"
                    name="Permanent Address"
                    className="border border-black rounded-md w-96"
                    value={address}
                    onFocus={() => setVisible(true)}
                    onChange={handleChange9}
                    onClick={() => setFocus("address")}
                  />
                </div>
                <div className="flex border space-x-5 p-1">
                  <label>6. Contact Number</label>
                  <input
                    type="text"
                    name="Contact Number"
                    className="border border-black rounded-md w-96"
                    value={contactNo}
                    onFocus={() => setVisible(true)}
                    onChange={handleChange10}
                    onClick={() => setFocus("contactNo")}
                  />
                </div>
                <div className="flex border space-x-5 p-1">
                  <label>7. Occupation</label>
                  <input
                    type="text"
                    name="Occupation"
                    className="border border-black rounded-md w-96"
                    value={profession}
                    onFocus={() => setVisible(true)}
                    onChange={handleChange11}
                    onClick={() => setFocus("profession")}
                  />
                </div>
                <div className="flex border space-x-5 p-1">
                  <label>8. Email</label>
                  <input
                    type="text"
                    name="Email"
                    className="border border-black rounded-md w-96"
                    value={email}
                    onFocus={() => setVisible(true)}
                    onChange={handleChange12}
                    onClick={() => setFocus("email")}
                  />
                </div>
                <div className="flex border space-x-5 p-1">
                  9. Citizenship :
                  <div className="flex space-x-1">
                    <label>Srilankan</label>
                    <input
                      type="checkbox"
                      name="Srilankan"
                      checked={isSrilankan}
                      onChange={(e) => setIsSrilankan(e.target.checked)}
                    />
                  </div>
                  <div className="flex space-x-1">
                    <label>Others</label>
                    <input
                      type="checkbox"
                      name="Others"
                      checked={isOtherCitizenship}
                      onChange={(e) => setIsOtherCitizenship(e.target.checked)}
                    />
                  </div>
                </div>

                <div className="flex border space-x-5 p-1">
                  <label>10. Signature :</label>
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
                <p className="p-2 text-black">
                  ELECTRONIC FUND TRANSFER CARD (EFTC)
                  <p className="text-justify p-1 text-black">
                    1. I hereby confirm that I am aware of the terms and
                    conditions applicable for the use of Electronic Fund
                    Transfer Cards (the EFTC) as detailed in the Directions No.
                    03 of 2021 dated 18th March 2021 issued under the provisions
                    of the Foreign Exchange Act, No. 12 of 2017 (the FEA)
                    subject to which the card may be used for transactions
                  </p>
                  <br />
                  <p className="text-justify p-1 text-black">
                    2. I further agree to provide any information on
                    transactions carried out by me in foreign exchange on the
                    card issued to me as Hatton National Bank PLC (the Bank) may
                    require for the purpose of the FEA.
                  </p>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex mt-[40px] justify-between">
        <FooterButton
          link="/services/thankYou"
          text="Print"
          isBack={""}
          onClick={handleSubmit}
        />
      </div>

      {visible && (
        <div
          ref={keyboardContainerRef}
          className="absolute flex items-center justify-center mt-[550px] ml-[400px] w-[900px] bg-fuchsia-900 p-5 border rounded-2xl"
        >
          <Keyboard
            theme={"hg-theme-default hg-layout-default myTheme simple-keyboard"}
            onChange={onChange}
            onKeyPress={onKeyPress}
            inputName={focus}
          />
        </div>
      )}
    </div>
  );
  //
};

export default FilledFormUpdated;
