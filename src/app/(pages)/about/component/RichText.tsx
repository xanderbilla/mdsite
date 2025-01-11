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
            As a B.Tech student at <strong>Lovely Professional University</strong>, I specialize
            in cloud computing, networking, and web development. I have a strong
            foundation in programming languages like <strong>Python, SQL, C++, and Java</strong>,
            and I&apos;m proficient in web development frameworks. My skills <strong>DevOps, Web Development and 
            DevOps</strong> demonstrate my technical expertise.
          </p>

          <p>
            I&apos;m a continuous learner, always seeking opportunities to expand my
            knowledge. I&apos;m currently exploring containerization technologies and
            DevOps practices, focusing on AWS cloud solutions, to further
            enhance my capabilities and contribute effectively to the dynamic
            field of technology and software development.
          </p>

          <p>
            My passion for continuous learning drives me to stay updated with
            the latest industry trends and explore new opportunities for
            professional growth. I&apos;m eager to apply my skills and knowledge to
            real-world projects, particularly in Full Stack Development, Spring
            Boot, and Cloud (AWS), and collaborate with talented professionals
            to create innovative solutions.
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
