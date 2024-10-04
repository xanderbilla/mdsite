import ContentList from "@/app/Layout/ContentList";
import { blogs } from "@/app/static/data";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blogs | Xander Billa',
  description: "Explore insightful articles and personal reflections on topics ranging from technology and software development to project showcases and creative solutions. Stay updated with what I'm learning and how I apply it in real-world scenarios.",
}

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
