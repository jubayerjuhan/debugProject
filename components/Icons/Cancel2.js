import React from "react";

const Cancel2 = ({ size = 71, color = "#EC1C24", stroke = "#EC1C24" }) => {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 71 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.3333 68.6667C53.7428 68.6667 68.6667 53.7428 68.6667 35.3333C68.6667 16.9238 53.7428 2 35.3333 2C16.9238 2 2 16.9238 2 35.3333C2 53.7428 16.9238 68.6667 35.3333 68.6667Z"
        stroke={stroke}
        stroke-width="4"
      />
      <path
        d="M48.3333 49.3333L21.6666 22.6666M48.3333 22.6666L21.6666 49.3333"
        stroke="#EC1C24"
        stroke-width="3.33333"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Cancel2;
