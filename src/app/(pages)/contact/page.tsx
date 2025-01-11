import { footerData } from "@/app/static/data";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Metadata } from "next";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import MessageForm from "./components/MessageForm";

export const metadata: Metadata = {
  title: "Contact Me | Xander Billa",
  description:
    "Contact me for any queries, collaborations, or just to say hi. I'm always open to new opportunities.",
  keywords:
    "projects, showcases, portfolio, technology, design, creative solutions, case studies, innovation, demos, project details",
};

const BlogPostIndex = () => {
  return (
    <Bounded>
      <Heading size="xl" className="mb-8">
        Contact Me
      </Heading>
      <div className="prose prose-xl prose-invert mb-10">
        I&apos;m always open to new opportunities, collaborations, and just to
        say hi. Feel free to reach out to me on{" "}
      </div>
      <div className="text-slate-300 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-4">
        <div className="flex items-center justify-center gap-4">
          <Link
            href={footerData.github_link}
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            aria-label={footerData.name + " on GitHub"}
          >
            <FaGithub size={48} />
          </Link>
          <Link
            href={footerData.linkedin_link}
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            aria-label={footerData.name + " on LinkedIn"}
          >
            <FaLinkedin size={48} />
          </Link>
        </div>
        <div className="hidden md:block h-full border-l border-slate-300" />
        <MessageForm />
      </div>
    </Bounded>
  );
};

export default BlogPostIndex;
