import ContentList from "@/app/Layout/ContentList";
import { blogs } from "@/app/static/data";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

const BlogPostIndex = () => {
  return (
    <Bounded>
      <Heading size="xl" className="mb-8">
        Blogs
      </Heading>
      <div className="prose prose-xl prose-invert mb-10">
        I write about what I&apos;ve learned so others can benefit.
      </div>
      <ContentList contentType="blogs" items={blogs} />
    </Bounded>
  );
};

export default BlogPostIndex;
