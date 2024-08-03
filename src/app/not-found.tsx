"use client";

import { useRouter } from "next/navigation";

type Props = {};

export default function NotFound({}: Props) {
  const router = useRouter();
  router.push("/");
  return null;
}
