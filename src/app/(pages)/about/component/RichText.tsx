
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
            in <strong>cloud computing, networking, and web development</strong>
            . I have a strong foundation in programming languages like Python,
            SQL, C++, and Java, and I&apos;m proficient in web development
            frameworks. My skills in Git, Amazon Web Services (AWS), and Cisco
            Certified Network Associate (CCNA) demonstrate my technical
            expertise.{" "}
          </p>

          <p>
            I&apos;m a continuous learner, always seeking opportunities to expand my
            knowledge. I&apos;m currently exploring{" "}
            <strong>containerization technologies and DevOps practices</strong>{" "}
            to further enhance my capabilities and contribute effectively to the
            dynamic field of technology and software development.{" "}
          </p>

          <p>
            My passion for continuous learning drives me to stay updated with
            the latest industry trends and explore new opportunities for
            professional growth. I&apos;m eager to apply my skills and knowledge to
            real-world projects and collaborate with talented professionals to
            create innovative solutions.
          </p>
        </div>
        <Button linkField="https://xanderbilla.s3.ap-south-1.amazonaws.com/Resume.pdf" label="Resume" />
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
