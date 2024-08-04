"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div
      className="w-full h-24 px-4 tablet:px-8 laptop:px-16 flex items-center justify-end gap-4 bg-gradient-to-b
     from-slate-300 via-slate-200/90 to-slate-100/30"
    >
      <Link href="https://github.com/xanderbilla">
        <Image src="/icons/github.svg" alt="AWS Logo" width={48} height={48} />
      </Link>
    </div>
  );
}
