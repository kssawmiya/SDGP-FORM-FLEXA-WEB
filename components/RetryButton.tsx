// @ts-nocheck
import Link from "next/link";
import React from "react";

interface RetryButtonProps {
  onClick: () => void;
}

const RetryButton = ({ onClick }: RetryButtonProps) => {
  return (
    <button onClick={onClick}>
      <a className="w-[280px] p-5 my-gradient border rounded-full flex justify-evenly items-center text">
        <p>Retry</p>
      </a>
    </button>
  );
};
//

export default RetryButton;
