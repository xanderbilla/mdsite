import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  label: string;
  href: string;
  target?: boolean;
};

export default function CardBtn({ className, label, href, target }: Props) {
  return (
    <Link href={href} target={`${target ? "_blank" : "_self"}`} passHref
      className={`min-w-56 min-h-14 p-2 rounded-md bg-slate-200/80 hover:bg-slate-100/80 
        hover:border hover:border-slate-400/50 font-medium transition-all duration-500 
        ease-in-out flex items-center justify-center twmerge ${className}`}
    >
      {label}
    </Link>
  );
}
