import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type, value, onChange, ...rest }: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      {...rest}
      className="w-full p-2 border border-slate-400 rounded-md outline-slate-600/50"
    />
  );
}
