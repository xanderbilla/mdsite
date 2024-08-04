import ProjectLogo from "@/app/components/ProjectLogo";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="w-full h-24 px-4 tablet:px-8 laptop:px-16 flex items-center justify-end gap-4 bg-gradient-to-b from-slate-300 via-slate-200/90 to-slate-100/30">
      <Link
        href="https://github.com/xanderbilla/mdsite/tree/mdsite-template"
        target="_blank"
      >
        <Image src="/icons/github.svg" alt="Menu" width={48} height={48} />
      </Link>
    </div>
  );
}
