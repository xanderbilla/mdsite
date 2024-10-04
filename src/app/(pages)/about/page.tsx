import React from "react";
import RichText from "./component/RichText";
import TechList from "./component/Techlist";
import Experience from "./component/Experience";
import { Metadata } from "next";

type Props = object;

export const metadata: Metadata = {
  title: 'About',
  description: 'About me',
}

export default function page({}: Props) {
  return (
    <>
      <RichText />
      <TechList />
      <Experience />
    </>
  );
}
