import Bounded from "@/components/Bounded";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

type Props = object;

export const metadata: Metadata = {
  title: "Error | Xander Billa",
  description:
    "Oops! The page you're looking for can't be found. It may have been moved, deleted, or the URL was mistyped. Explore our website for more information or head back to the homepage.",
};

export default function NotFound({}: Props) {
  return (
    <div className="w-full flex items-center justify-center">
      <Bounded>
        <Image src="/images/not-found.png" alt="Not Found" width={250} height={250} />
      </Bounded>
    </div>
  );
}
