// @ts-nocheck
import Link from "next/link";
import React, { useState } from "react";
import QRCode from "react-qr-code";
import useFormStore from "@/app/store";

interface QRScanButtonProps {
  link: string;
  formId: string;
}

const QRScanButton = ({ link, formId }: QRScanButtonProps) => {
  const setSessionIdNew = useFormStore((state: any) => state.setSessionId);

  const [sessionId, setSessionId] = useState<string>(() => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let sessionId = "";
    for (let i = 0; i < 16; i++) {
      sessionId += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setSessionIdNew(sessionId);
    return sessionId;
  });

  const qrCodeValue = `${link}?formId=${formId}&sessionId=${sessionId}`;

  return (
    <Link href={link} className="flex justify-evenly items-center flex-col">
      <QRCode value={qrCodeValue} />
      <div>
        {/* <p>
          {formId},{sessionId}
        </p> */}
      </div>
    </Link>
  );
};

export default QRScanButton;
