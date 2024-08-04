import ProjectLogo from "@/app/components/ProjectLogo";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="w-full h-24 flex items-center justify-between gap-4">
      <ProjectLogo onlyProjectLogo />
      <Link
        href="https://github.com/xanderbilla"
        target="_blank"
      >
        <Image src="/icons/github.svg" alt="Menu" width={48} height={48} />
      </Link>
    </div>
  );
}
