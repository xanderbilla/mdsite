"use client";

import React from "react";

interface JobTitleProps {
  profession: string;
}

export const JobTitle: React.FC<JobTitleProps> = ({ profession }) => {
  return (
    <span
      className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl
                        font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl"
    >
      {profession}
    </span>
  );
};
