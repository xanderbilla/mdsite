"use client";

import React from "react";

interface NameAnimationProps {
  name: string;
  keyPrefix: string;
  className?: string;
}

export const NameAnimation: React.FC<NameAnimationProps> = ({
  name,
  keyPrefix,
  className = "",
}) => {
  if (!name) return null;

  return (
    <>
      {name.split("").map((letter, index) => (
        <span
          key={index}
          className={`name-animation name-animation-${keyPrefix} inline-block opacity-0 ${className}`}
        >
          {letter}
        </span>
      ))}
    </>
  );
};
