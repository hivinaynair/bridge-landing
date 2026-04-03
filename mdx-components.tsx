import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 mt-12 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-4 mt-10">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-semibold text-xl text-foreground mb-3 mt-8">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-[15px] text-muted-foreground leading-relaxed">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-[15px] text-muted-foreground leading-relaxed">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    a: ({ href, children }) => (
      <Link
        href={href ?? "#"}
        className="text-primary underline underline-offset-2 hover:text-primary/80"
      >
        {children}
      </Link>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-primary/30 pl-4 my-6 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-[14px] border-collapse">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="border-b-2 border-border">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="text-left py-2 px-3 font-semibold text-foreground">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="py-2 px-3 text-muted-foreground border-b border-border">
        {children}
      </td>
    ),
    hr: () => <hr className="border-border my-10" />,
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
  };
}
