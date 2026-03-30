"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Button } from "./ui/button";

type BookDemoButtonProps = {
  variant?: "primary" | "outline" | "muted" | "outline-white";
  className?: string;
  children: React.ReactNode;
};

export function BookDemoButton({
  variant = "outline",
  className,
  children,
}: BookDemoButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        className={className}
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });

      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  function handleClose() {
    onClose();
    setTimeout(() => {
      setName("");
      setPhone("");
      setStatus("idle");
    }, 300);
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
          >
            <div
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-md border bg-background p-8"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>

              {status === "sent" ? (
                <div className="text-center py-8">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-3">
                    Thank you
                  </p>
                  <p className="text-foreground font-medium">
                    We&apos;ll reach out to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-foreground mb-1">
                    Get in touch
                  </p>
                  <p className="text-foreground text-[14px] mb-6">
                    Leave your details and we&apos;ll reach out to you shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border bg-transparent px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground outline-none focus:border-foreground transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border bg-transparent px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground outline-none focus:border-foreground transition-colors"
                    />

                    {status === "error" && (
                      <p className="text-[13px] text-red-500">
                        Something went wrong. Please try again.
                      </p>
                    )}

                    <Button
                      variant="primary"
                      type="submit"
                      disabled={status === "sending"}
                      className="justify-center w-full mt-2"
                    >
                      {status === "sending" ? "SENDING..." : "GET IN TOUCH"}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
