import ProjectLogo from "@/app/components/ProjectLogo";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  const year = new Date().getFullYear();
  return (
    <div
      className="w-full h-36 tablet:h-24 px-4 tablet:px-8 laptop:px-16 flex flex-col tablet:flex-row items-center 
    justify-between py-4 gap-4 bg-gradient-to-t from-slate-300 via-slate-200/90 to-slate-100/30"
    >
      <ProjectLogo isFooter />
      <div className="h-auto flex flex-col items-center justify-center gap-1">
        <h3 className="text-lg tablet:text-2xl">Home</h3>
        <p className="text-sm tablet:text-xs text-center">
          &copy; {year},{" "}
          <Link
            href="https://github.com/xanderbilla"
            target="_blank"
            className="underline font-bold text-neutral-600/80"
          >
            @xanderbilla
          </Link>
        </p>
      </div>
    </div>
  );
}
