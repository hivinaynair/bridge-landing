import type { Metadata } from "next";
import Link from "next/link";
import { BorderEdges } from "@/components/ui/border-edges";
import { DisplayHeadline } from "@/components/ui/display-headline";
import { SectionLabel } from "@/components/ui/section-label";
import { blogPosts } from "@/content/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Bridge | Driving School Software Insights",
  description:
    "Guides, comparisons, and insights for running a modern driving school in India. From software reviews to RTO tips.",
};

export default function BlogIndex() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="border-y">
      <section className="w-full mx-auto max-w-8xl px-6">
        <div className="relative">
          <BorderEdges />
          <div className="border-x p-4 py-16 lg:p-12 lg:py-28">
            <div className="text-center mb-16">
              <SectionLabel className="justify-center mb-6">BLOG</SectionLabel>
              <DisplayHeadline
                as="h1"
                className="text-[clamp(32px,5vw,60px)] m-0 mb-4"
              >
                Insights for driving schools
              </DisplayHeadline>
              <p className="text-muted-foreground text-[15px] font-medium max-w-md mx-auto leading-relaxed">
                Guides, comparisons, and tips for running a modern motor
                training school in India.
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-0">
              {sorted.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block border-b last:border-b-0 py-8 group"
                >
                  <time className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="text-lg font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
