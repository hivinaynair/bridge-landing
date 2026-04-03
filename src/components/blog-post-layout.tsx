import { BlogPostJsonLd } from "@/components/blog-json-ld";
import type { BlogPost } from "@/content/blog-posts";

export function BlogPostLayout({
  post,
  children,
}: {
  post: BlogPost;
  children: React.ReactNode;
}) {
  return (
    <div className="border-y">
      <BlogPostJsonLd post={post} />
      <article className="w-full mx-auto max-w-8xl px-6">
        <div className="border-x">
          <div className="max-w-2xl mx-auto px-4 py-16 lg:py-28">
            <time className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <div className="mt-8">{children}</div>
          </div>
        </div>
      </article>
    </div>
  );
}
