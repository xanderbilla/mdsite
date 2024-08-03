import React from "react";
import Success from "../Icon/Success";
import Error from "../Icon/Error";
import Warning from "../Icon/Warning";
import Info from "../Icon/Info";

type AlertProps = {
  type: "Success" | "Error" | "Warning" | "Info";
  message?: string;
};

export default function Alert({ type, message }: AlertProps) {
  let textColor = "";
  let bgColor = "";
  let borderColor = "";
  let node: JSX.Element | null = null;

  switch (type) {
    case "Success":
      textColor = "text-green-600";
      bgColor = "bg-green-100";
      borderColor = "border-green-800/25";
      node = <Success />;
      break;
    case "Error":
      textColor = "text-red-600";
      bgColor = "bg-red-100";
      borderColor = "border-red-800/25";
      node = <Error />;
      break;
    case "Warning":
      textColor = "text-yellow-600";
      bgColor = "bg-yellow-100";
      borderColor = "border-yellow-800/25";
      node = <Warning />;
      break;
    case "Info":
      textColor = "text-blue-600";
      bgColor = "bg-blue-100";
      borderColor = "border-blue-800/25";
      node = <Info />;
      break;
    default:
      textColor = "text-gray-600";
      bgColor = "bg-gray-100";
      borderColor = "border-gray-800/25";
      break;
  }

  return (
    <div
      className={`w-full h-auto ${textColor} flex items-center justify-start gap-2 
        border-2 rounded-sm p-4 font-medium ${bgColor} ${borderColor}`}
    >
      {node}
      {message ? message : type}
    </div>
  );
}
