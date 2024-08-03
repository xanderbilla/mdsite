import React from "react";

type Props = {
  onClick: () => void;
  label: string;
  isDisable: boolean;
};

export default function Btn(props: Props) {
  const { onClick, label, isDisable, ...rest } = props;
  return (
    <button
      onClick={onClick}
      disabled={isDisable}
      type="submit"
      className={`h-12 text-gray-600 hover:text-gray-950 bg-slate-300 hover:bg-slate-400 transition-all 
      duration-300 ease-in-out rounded-md font-medium text-lg ${
        isDisable
          ? "cursor-not-allowed bg-slate-200 hover:bg-slate-200 text-gray-400 hover:text-gray-400"
          : ""
      }`}
    >
      {label}
    </button>
  );
}
