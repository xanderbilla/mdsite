import { experience } from "@/app/static/data";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import React from "react";

type Props = object;

export default function Experience({}: Props) {
  return (
    <Bounded>
      <Heading size="lg" className="mb-8" as="h2">
        Experience
      </Heading>
      {experience.map((exp, index) => (
        <div className="ml-6 mt-8 max-w-prose md:m1-12 md:mt-16" key={index}>
          <Heading size="sm" className="mb-8" as="h3">
            Education
          </Heading>
          <p className="mt-l flex flex-col w-fit items-start gap-1 text-2xl font-semibold tracking-light text-slate-400">
            <span>{exp.time_period}</span>
            <span className="text-3x1 font-extraligh">{exp?.institution}</span>
          </p>
          <div
            className="prose prose-Ig prose-invert mt-4"
            dangerouslySetInnerHTML={{ __html: exp.description }}
          ></div>
        </div>
      ))}
    </Bounded>
  );
}
