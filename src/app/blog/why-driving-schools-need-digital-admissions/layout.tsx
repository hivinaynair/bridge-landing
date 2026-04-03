import { BlogPostLayout } from "@/components/blog-post-layout";
import { blogPosts } from "@/content/blog-posts";

const post = blogPosts.find(
  (p) => p.slug === "why-driving-schools-need-digital-admissions",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  if (!post) return children;
  return <BlogPostLayout post={post}>{children}</BlogPostLayout>;
}
