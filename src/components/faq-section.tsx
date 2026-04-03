"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqItems } from "@/content/faq";
import { BorderEdges, DisplayHeadline, SectionLabel } from "./ui";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id="faq" className="border-y">
      <section className="w-full mx-auto max-w-8xl px-6">
        <div className="relative">
          <BorderEdges />
          <div className="border-x p-4 py-16 lg:p-12 lg:py-28">
            <div className="text-center mb-12">
              <SectionLabel className="justify-center mb-6">FAQ</SectionLabel>
              <DisplayHeadline
                as="h2"
                className="text-[clamp(32px,4vw,52px)] m-0 mb-4"
              >
                Common questions
              </DisplayHeadline>
            </div>

            <div className="max-w-2xl mx-auto">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.question} className="border-b last:border-b-0">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
                    >
                      <span className="text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        strokeWidth={2}
                        className={`shrink-0 text-muted-foreground transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        isOpen ? "max-h-96 pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-[14px] text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
