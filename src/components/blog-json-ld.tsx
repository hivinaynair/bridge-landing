import type { BlogPost } from "@/content/blog-posts";

export function BlogPostJsonLd({ post }: { post: BlogPost }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Bridge",
      url: "https://bridgedrive.in",
    },
    publisher: {
      "@type": "Organization",
      name: "Bridge",
      url: "https://bridgedrive.in",
      logo: {
        "@type": "ImageObject",
        url: "https://bridgedrive.in/arch.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bridgedrive.in/blog/${post.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
