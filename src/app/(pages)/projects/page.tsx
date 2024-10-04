import ContentList from "@/app/Layout/ContentList";
import { projects } from "@/app/static/data";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

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
