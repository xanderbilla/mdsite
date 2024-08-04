import Image from "next/image";
import React from "react";

interface Props {
  onlyProjectLogo?: boolean;
  isFooter?: boolean;
}

export default function ProjectLogo({ onlyProjectLogo, isFooter }: Props) {
  return (
    <div className="flex items-center justify-center gap-4">
      {onlyProjectLogo ? null : (
        <>
          <Image
            src="/logo.png"
            alt="AWS Logo"
            width={150}
            height={50}
            className="h-auto"
          />
          <Image
            src="/icons/v_bar.png"
            alt="Vertical bar"
            width={50}
            height={50}
            className={`h-auto ${isFooter ? "hidden tablet::block" : ""}`}
          />
        </>
      )}
      <Image
        src="/amplify.png"
        alt="AWS Amplify Logo"
        width={200}
        height={200}
        className={`${isFooter ? "hidden tablet::block" : ""} h-auto`}
      />
    </div>
  );
}
