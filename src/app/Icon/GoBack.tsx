import React from "react";

type Props = {};

export default function GoBack({}: Props) {
  return (
    <svg
      height={24}
      width={24}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill="##94a3b8"
      stroke="##94a3b8"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="##94a3b8"
          d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
        ></path>
        <path
          fill="##94a3b8"
          d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
        ></path>
      </g>
    </svg>
  );
}
