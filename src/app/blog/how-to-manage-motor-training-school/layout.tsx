import { BlogPostLayout } from "@/components/blog-post-layout";
import { blogPosts } from "@/content/blog-posts";

const post = blogPosts.find(
  (p) => p.slug === "how-to-manage-motor-training-school",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  if (!post) return children;
  return <BlogPostLayout post={post}>{children}</BlogPostLayout>;
}
