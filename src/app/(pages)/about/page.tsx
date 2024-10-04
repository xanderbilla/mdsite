import React from "react";
import RichText from "./component/RichText";
import TechList from "./component/Techlist";
import Experience from "./component/Experience";
import { Metadata } from "next";

type Props = object;

export const metadata: Metadata = {
  title: 'About  | Xander Billa',
  description: 'Discover more about Vikas Singh, Student, with expertise in AWS, Java and web development. Learn about my background, professional journey, and passion for tech. Explore projects, achievements, and personal insights.',
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
