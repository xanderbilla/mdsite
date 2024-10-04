import ContentList from "@/app/Layout/ContentList";
import { projects } from "@/app/static/data";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Xander Billa",
  description:
    "Explore innovative projects showcasing creative solutions across various fields including technology, design, and more. Each project is presented with detailed information, visual demonstrations, and key highlights to inspire and inform.",
  keywords:
    "projects, showcases, portfolio, technology, design, creative solutions, case studies, innovation, demos, project details",
};

const BlogPostIndex = () => {
  return (
    <Bounded>
      <Heading size="xl" className="mb-8">
        Projects
      </Heading>
      <div className="prose prose-xl prose-invert mb-10">
        The tech projects I&apos;ve created
      </div>
      <ContentList contentType="projects" items={projects} />
    </Bounded>
  );
};

export default BlogPostIndex;
