"use client";

import ProjectLogo from "@/app/components/ProjectLogo";
import GoBack from "../Icon/GoBack";
import { useRouter } from "next/navigation";

type Props = {};

export default function Navbar({}: Props) {
  const router = useRouter();
  const handleBtn = () => {
    router.back();
  };
  return (
    <div className="w-full h-24 flex items-center justify-center md:justify-between gap-4">
      <ProjectLogo onlyProjectLogo />
      <div className="hidden md:flex gap-4">
        <div
          className="text-slate-600 bg-slate-200 hover:bg-slate-300 font-medium 
          flex items-center justify-center gap-2 w-auto px-2 py-1 duration-700 
          rounded-md ease-in-out transition-all cursor-pointer"
          onClick={handleBtn} // Fixed the onClick event handler
        >
          <GoBack />
          Go Back
        </div>
      </div>
    </div>
  );
}
