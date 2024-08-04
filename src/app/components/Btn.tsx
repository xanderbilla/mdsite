import React from "react";

type BtnProps = {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
  className?: string;
};

export const Btn: React.FC<BtnProps> = ({
  label,
  onClick,
  isDisabled = false,
  className = "",
  ...restProps
}) => {
  const mergedClassName = `min-w-24 h-auto p-2 rounded-md bg-slate-100 hover:bg-slate-200/80 
  transition-all duration-500 ease-in-out twmerge ${className}`;

  return (
    <button
      className={mergedClassName}
      onClick={onClick}
      disabled={isDisabled}
      {...restProps}
    >
      {label}
    </button>
  );
};
