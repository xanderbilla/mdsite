import ProjectLogo from "@/app/components/ProjectLogo";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  const year = new Date().getFullYear();
  return (
    <div className="w-full h-24 flex flex-col tablet:flex-row tabletflex-row items-center justify-between my-4 gap-4">
      <ProjectLogo isFooter />
      <div className="h-auto flex flex-col items-center justify-center gap-1">
        <h3 className="text-lg tablettext-2xl">Home</h3>
        <p className="text-sm tablettext-xs text-center">
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
