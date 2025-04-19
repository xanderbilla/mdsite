"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroAnimationProps {
  children: React.ReactNode;
}

export const HeroAnimation: React.FC<HeroAnimationProps> = ({ children }) => {
  const component = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".name-animation",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1,0.3)",
          duration: 1,
          transformOrigin: "left top",
          delay: 0.5,
          stagger: {
            each: 0.1,
            from: "random",
          },
        }
      );

      tl.fromTo(
        ".job-title",
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "elastic.out(1,0.3)",
        }
      );
    }, component);

    return () => ctx.revert();
  }, []);

  return <div ref={component}>{children}</div>;
};
