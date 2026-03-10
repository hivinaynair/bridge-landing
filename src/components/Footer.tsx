import { Home } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-10 grid grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Home size={18} className="text-primary" strokeWidth={1.5} />
            <span className="font-sans font-semibold text-sm text-card-foreground">
              Bridge
            </span>
          </div>
          <p className="text-2xs text-muted-foreground leading-relaxed max-w-xs">
            Modern software for Indian driving schools. Built in India.
          </p>
        </div>

        {[
          { heading: "PRODUCT", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
          { heading: "COMPANY", links: ["About", "Blog", "Careers", "Contact"] },
          { heading: "LEGAL", links: ["Privacy Policy", "Terms of Service", "Security"] },
        ].map((col) => (
          <div key={col.heading}>
            <div className="text-2xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              {col.heading}
            </div>
            <ul className="list-none p-0 m-0 space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="/" className="text-sm text-muted-foreground hover:text-foreground no-underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border py-4 px-6 mx-auto max-w-[1440px] flex justify-between items-center">
        <span className="text-2xs text-muted-foreground">
          © 2025 Bridge Technologies Pvt. Ltd.
        </span>
        <span className="text-2xs text-muted-foreground">
          Made with ♥ in Bengaluru, India
        </span>
      </div>
    </footer>
  );
}
