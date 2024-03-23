// @ts-nocheck
import Link from "next/link";
import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import useFormStore from "@/app/store";
import io, { Socket } from "socket.io-client";
import { useRouter } from "next/navigation";

interface QRScanButtonProps {
  link: string;
  formId: string;
}

const QRScanButton = ({ link, formId }: QRScanButtonProps) => {
  const router = useRouter();
  const socketUrl =
    process.env.SOCKET_IO_URL || "https://sdgp-50-server-1.onrender.com"; // Provide a default URL
  const socket: Socket = io(socketUrl);

  //const sessionId = useFormStore((state: any) => state.sessionId);
  const setMessage = useFormStore((state: any) => state.setMessage);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessage(data.message);
      router.push("/services/verified");
    });
  }, [socket]);

  useEffect(() => {
    socket.emit("join_room", sessionId);
  }, []);

  const setSessionIdNew = useFormStore((state: any) => state.setSessionId);

  const [sessionId, setSessionId] = useState<string>(() => {
    const characters = "0123456789";
    let sessionId = "";
    for (let i = 0; i < 5; i++) {
      sessionId += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setSessionIdNew(sessionId);
    return sessionId;
  });

  const qrCodeValue = JSON.stringify({
    formId: `${formId}`,
    sessionId: `${sessionId}`,
  });

  return (
    <Link href={link} className="flex justify-evenly items-center flex-col">
      <QRCode value={qrCodeValue} />
      <div>
        <p>
          {formId},{sessionId}
        </p>
      </div>
    </Link>
  );
};

export default QRScanButton;
