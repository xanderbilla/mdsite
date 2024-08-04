import ProjectLogo from "@/app/components/ProjectLogo";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  const year = new Date().getFullYear();
  return (
    <div className="w-full h-32 md:h-24 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center 
    justify-between py-4 gap-4 bg-gradient-to-t from-slate-300 via-slate-200/90 to-slate-100/30">
      <ProjectLogo isFooter />
      <div className="h-auto flex flex-col items-center justify-center gap-1">
        <h3 className="text-lg md:text-2xl">mdsite Template</h3>
        <p className="text-sm md:text-xs text-center">
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
