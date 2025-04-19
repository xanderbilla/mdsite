"use client";

import React from "react";
import { slice } from "../static/data";
import { Shapes } from "@/components/Shapes";
import Bounded from "@/components/Bounded";
import { NameAnimation } from "@/components/NameAnimation";
import { JobTitle } from "@/components/JobTitle";
import { HeroAnimation } from "@/components/HeroAnimation";

type Props = object;

export default function Hero({}: Props) {
  return (
    <HeroAnimation>
      <Bounded className="py-0 md:px-6 md:py-0 lg:py-0">
        <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
          <Shapes />
          <div className="col-start-1 md:row-start-1">
            <h1
              className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter"
              aria-label={slice.first_name + " " + slice.last_name}
            >
              <span className="block text-slate-300">
                <NameAnimation name={slice.first_name} keyPrefix="first" />
              </span>
              <span className="-mt-[.2em] block text-slate-500">
                <NameAnimation name={slice.last_name} keyPrefix="last" />
              </span>
            </h1>
            <JobTitle profession={slice.profession} />
          </div>
        </div>
      </Bounded>
    </HeroAnimation>
  );
}
