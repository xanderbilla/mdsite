import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";

type Props = object;

export default function RichText({}: Props) {
  return (
    <Bounded>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr, 1fr]">
        <Heading as="h1" size="xl" className="col-start-1">
          About Vikas
        </Heading>
        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          <p>
            I&apos;m a B.Tech student at <strong>Lovely Professional University</strong>, skilled in
            cloud computing, networking, and web development. I work with
            <strong>Python, SQL, C++, Java, and now Spring Boot</strong>, excelling in DevOps and
            full-stack projects. Passionate about learning, I’m exploring AWS
            and containerization to stay ahead. Check out my work—I’m ready to
            collaborate and build something great!
          </p>

          <p>
            I also enjoy developing projects that integrate modern technologies and improve user experiences, constantly pushing my boundaries.
          </p>
        </div>
        <Button
          linkField="https://xanderbilla.s3.ap-south-1.amazonaws.com/Resume.pdf"
          label="Resume"
        />
        <Image
          src="https://github.com/shadcn.png"
          height={300}
          width={300}
          alt="Avatar"
          className="w-72 h-72 rounded-3xl aspect-square row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
}
