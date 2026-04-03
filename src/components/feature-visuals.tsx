"use client";

import {
  Calendar,
  CreditCard,
  LayoutDashboard,
  MessageCircle,
  Users,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

function AppChrome({
  path,
  children,
  footer,
}: {
  path: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden border bg-white"
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(0,0,0,0.07), 0 12px 32px -4px rgba(0,0,0,0.10)",
      }}
    >
      {/* Title bar */}
      <div className="bg-[#f5f5f5] border-b flex items-center gap-2.5 px-3 py-2">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 bg-white border rounded-md text-[10px] text-[#999] px-2.5 py-0.5 text-center leading-4 truncate">
          app.bridgedrive.in/{path}
        </div>
      </div>
      {children}
      {footer}
    </div>
  );
}

function AppSidebar({ active }: { active: string }) {
  const items = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: Users, label: "Students" },
    { icon: CreditCard, label: "Payments" },
    { icon: Calendar, label: "Schedule" },
    { icon: MessageCircle, label: "Messages" },
    { icon: Zap, label: "Admissions" },
  ];
  return (
    <div className="flex flex-col gap-0.5 py-2 w-[44px] border-r bg-[#fafafa] shrink-0">
      {items.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className={`flex items-center justify-center h-8 mx-1 rounded cursor-default ${
            label === active
              ? "bg-primary/10 text-primary"
              : "text-[#bbb] hover:text-[#888]"
          }`}
          title={label}
        >
          <Icon size={14} strokeWidth={label === active ? 2 : 1.5} />
        </div>
      ))}
    </div>
  );
}

// ─── Admissions ───────────────────────────────────────────────────────────────

// Step 1: Bridge "Client Identity" CTA → 2.5s
// Step 2: Meri Pehchaan sign-in + OTP → 3.5s
// Step 3: DigiLocker consent → 2.5s
// Step 4: Bridge form auto-filled → 4s
const STEP_DURATIONS = [2500, 3500, 2500, 4000];
const MOBILE_TEXT = "9326515133";
const OTP_TEXT = "483219";

const FORM_FIELDS = [
  { label: "Full Name", value: "Vinay Venukuttan Nair" },
  { label: "Date of Birth", value: "02/07/1999" },
  { label: "Gender", value: "MALE" },
  { label: "Phone Number", value: "9326515133" },
  { label: "Aadhaar Number", value: "•••• •••• 0929" },
];

const stepVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

function StepDots({ active, count }: { active: number; count: number }) {
  return (
    <div className="flex items-center justify-center gap-1.5 py-2.5 border-t bg-[#fafafa]">
      {Array.from({ length: count }).map((_, i) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: positional dots have no natural id
          key={i}
          className="h-1.5 rounded-full transition-all duration-300"
          style={{
            width: i === active ? 16 : 6,
            background:
              i === active ? "var(--primary)" : "var(--muted-foreground)",
            opacity: i === active ? 1 : 0.25,
          }}
        />
      ))}
    </div>
  );
}

// Ashoka-style emblem for Meri Pehchaan branding
function GovEmblem({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="6" r="3" fill="#8B6914" />
      <rect x="10" y="9" width="4" height="2" rx="0.5" fill="#8B6914" />
      <path d="M6 13h12v1.5H6z" fill="#8B6914" />
      <path d="M7 15h10l-1 4H8z" fill="#8B6914" opacity="0.7" />
      <path d="M8 19h8v1.5H8z" fill="#8B6914" />
    </svg>
  );
}

function MeriPehchaanHeader() {
  return (
    <div className="flex flex-col items-center gap-1 mb-3">
      <GovEmblem size={22} />
      <div className="text-center">
        <span className="text-[13px] font-bold" style={{ color: "#D4760A" }}>
          Meri
        </span>
        <span className="text-[13px] font-bold" style={{ color: "#2E7D32" }}>
          {" "}
          Pehchaan
        </span>
      </div>
      <div className="text-[7px] font-semibold tracking-wider uppercase text-[#555]">
        Single Sign-On Service
      </div>
      <div className="flex items-center gap-2 mt-0.5">
        {["DigiLocker", "e-Pramaan", "Jan Parichay"].map((s) => (
          <span key={s} className="text-[6px] text-[#888] font-medium">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

// Step 1: Bridge app — Client Identity verification CTA
function BridgeVerifyStep() {
  return (
    <div className="flex flex-col h-full">
      {/* Step indicator */}
      <div className="mb-1 text-[10px] text-[#888]">Step 3 of 5</div>
      <div className="w-full h-1 rounded-full bg-[#f0f0f0] mb-5">
        <div
          className="h-full rounded-full"
          style={{ width: "60%", background: "var(--primary)" }}
        />
      </div>

      <div className="text-base font-bold text-[#111] mb-1">
        Client Identity
      </div>
      <div className="text-xs text-[#666] mb-6 leading-relaxed">
        Verify identity via DigiLocker for instant auto-fill, or enter details
        manually.
      </div>

      <motion.button
        type="button"
        transition={{ duration: 0.3 }}
        className="w-full py-3 rounded-lg text-xs font-semibold border-2 border-[#003580]/20 text-[#003580] flex items-center justify-center gap-2 bg-[#f8f9fc] hover:bg-[#eef1f8]"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="#003580"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M12 7v5l3 3"
            stroke="#003580"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        Verify with DigiLocker
      </motion.button>

      <motion.div
        transition={{ delay: 0.2, duration: 0.3 }}
        className="text-[10px] text-[#aaa] mt-2.5 cursor-pointer"
      >
        Skip & enter manually
      </motion.div>
    </div>
  );
}

// Step 2: Meri Pehchaan sign-in — mobile number types, then OTP fills
function SignInOtpStep() {
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"mobile" | "otp">("mobile");
  const [otpFilled, setOtpFilled] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < MOBILE_TEXT.length) {
        setTyped(MOBILE_TEXT.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        // Transition to OTP after a brief pause
        setTimeout(() => {
          setPhase("otp");
          let j = 0;
          const otpInterval = setInterval(() => {
            if (j < OTP_TEXT.length) {
              j++;
              setOtpFilled(j);
            } else {
              clearInterval(otpInterval);
            }
          }, 250);
        }, 500);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <MeriPehchaanHeader />

      <AnimatePresence mode="wait">
        {phase === "mobile" ? (
          <motion.div
            key="mobile"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            <div className="text-xs font-semibold text-[#333] text-center mb-3">
              Sign in via <span className="text-[#003580]">DigiLocker</span>
            </div>

            {/* Tabs */}
            <div className="flex gap-0 mb-3 justify-center">
              {["Mobile", "Username", "Other ID"].map((tab, i) => (
                <div
                  key={tab}
                  className="px-3 py-1 text-[10px] font-medium rounded-full"
                  style={{
                    background: i === 0 ? "#003580" : "transparent",
                    color: i === 0 ? "white" : "#888",
                  }}
                >
                  {tab}
                </div>
              ))}
            </div>

            {/* Mobile input */}
            <div className="border rounded-md px-3 py-2 text-xs text-[#222] bg-white mb-2 min-h-[32px] font-mono">
              {typed || <span className="text-[#bbb]">Mobile*</span>}
              {typed.length < MOBILE_TEXT.length && (
                <span className="inline-block w-px h-3.5 bg-[#222] align-middle ml-px animate-pulse" />
              )}
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-1 mb-3">
              {["PIN less authentication", "I consent to terms of use."].map(
                (label) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 text-[9px] text-[#555]"
                  >
                    <div className="w-3 h-3 rounded-sm bg-[#1976D2] flex items-center justify-center shrink-0">
                      <svg
                        aria-hidden="true"
                        width="8"
                        height="8"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2.5 6l2.5 2.5 4.5-5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {label}
                  </div>
                ),
              )}
            </div>

            {/* Sign In button */}
            <button
              type="button"
              className="w-full py-2 rounded-md text-xs font-semibold text-white"
              style={{ background: "#4CAF50" }}
            >
              Sign In
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="otp"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full"
          >
            <div className="text-xs font-bold text-[#333] mb-2">Verify OTP</div>
            <div className="text-[10px] text-[#555] bg-[#E8F5E9] rounded-md p-2 mb-3 leading-relaxed">
              DigiLocker has sent you an OTP to your registered mobile
              (xxxxxx5133). OTP will be valid for 10 Minutes.
            </div>

            {/* OTP input */}
            <div className="border-2 border-[#1976D2]/40 rounded-md px-3 py-2 text-sm font-mono text-[#222] bg-white mb-2 min-h-[34px] flex items-center">
              {OTP_TEXT.split("").map((d, i) => (
                <motion.span
                  // biome-ignore lint/suspicious/noArrayIndexKey: positional OTP chars have no natural id
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: i < otpFilled ? 1 : 0,
                  }}
                  transition={{ duration: 0.15 }}
                >
                  {i < otpFilled ? d : ""}
                </motion.span>
              ))}
              {otpFilled < OTP_TEXT.length && (
                <span className="inline-block w-px h-4 bg-[#222] animate-pulse" />
              )}
            </div>

            <div className="text-[9px] text-[#888] text-right mb-3">
              Resend OTP in 01:56
            </div>

            <button
              type="button"
              className="w-full py-2 rounded-md text-xs font-semibold text-white"
              style={{ background: "#4CAF50" }}
            >
              Sign In
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Step 3: DigiLocker consent — document sharing
function ConsentStep() {
  const [allowHighlight, setAllowHighlight] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAllowHighlight(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const documents = [
    { name: "Aadhaar Card (XX0929)", checked: true },
    { name: "Driving License (XX3222)", checked: false },
  ];

  return (
    <div className="flex flex-col">
      {/* DigiLocker header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <rect x="3" y="10" width="18" height="11" rx="2" fill="#003580" />
            <path
              d="M7 10V7a5 5 0 1 1 10 0v3"
              stroke="#003580"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <span className="text-xs font-bold text-[#003580]">DigiLocker</span>
        </div>
        <div className="w-5 h-5 rounded-full bg-[#4CAF50] flex items-center justify-center">
          <svg
            aria-hidden="true"
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2.5 6l2.5 2.5 4.5-5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="text-[10px] text-[#333] mb-3 leading-relaxed">
        Please provide your consent to share the following with{" "}
        <span className="font-bold">Bridge</span>:
      </div>

      {/* Documents */}
      <div className="border rounded-lg overflow-hidden mb-2.5">
        <div className="flex items-center justify-between px-3 py-1.5 bg-[#f9f9f9] border-b">
          <span className="text-[10px] font-medium text-[#555]">
            Issued Documents (6)
          </span>
          <span className="text-[9px] text-[#1976D2] font-medium">
            Select all
          </span>
        </div>
        {documents.map((doc) => (
          <div
            key={doc.name}
            className="flex items-center justify-between px-3 py-1.5 border-b last:border-0"
          >
            <span className="text-[10px] text-[#333]">{doc.name}</span>
            <div
              className="w-3.5 h-3.5 rounded-sm border flex items-center justify-center shrink-0"
              style={{
                background: doc.checked ? "#1976D2" : "white",
                borderColor: doc.checked ? "#1976D2" : "#ccc",
              }}
            >
              {doc.checked && (
                <svg
                  aria-hidden="true"
                  width="8"
                  height="8"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M2.5 6l2.5 2.5 4.5-5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
        ))}
        <div className="px-3 py-1 border-t">
          <span className="text-[9px] text-[#1976D2]">
            ... View all 6 documents
          </span>
        </div>
      </div>

      {/* Profile info */}
      <div className="flex items-center gap-2 px-3 py-1.5 border rounded-lg mb-2.5">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="4" fill="#888" />
          <path
            d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
            stroke="#888"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <div>
          <div className="text-[10px] font-medium text-[#333]">
            Profile information
          </div>
          <div className="text-[8px] text-[#888]">
            Name, Date of Birth, Gender
          </div>
        </div>
      </div>

      {/* Purpose */}
      <div className="flex items-center gap-2 px-3 py-1.5 border rounded-lg mb-3">
        <span className="text-[10px] text-[#888]">Purpose:</span>
        <span className="text-[10px] font-medium text-[#333]">
          Know Your Customer
        </span>
      </div>

      {/* Deny / Allow */}
      <div className="flex gap-2">
        <button
          type="button"
          className="flex-1 py-2 rounded-md text-xs font-medium border border-[#ccc] text-[#666]"
        >
          Deny
        </button>
        <motion.button
          type="button"
          animate={{
            scale: allowHighlight ? [1, 1.03, 1] : 1,
            boxShadow: allowHighlight
              ? "0 0 0 3px rgba(25, 118, 210, 0.2)"
              : "none",
          }}
          transition={{ duration: 0.4 }}
          className="flex-1 py-2 rounded-md text-xs font-semibold text-white"
          style={{ background: "#1976D2" }}
        >
          Allow
        </motion.button>
      </div>
    </div>
  );
}

// Step 4: Bridge form auto-filled from DigiLocker
function FormFilledStep() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < FORM_FIELDS.length) {
        i++;
        setVisibleCount(i);
      } else {
        clearInterval(interval);
      }
    }, 220);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Step indicator */}
      <div className="mb-1 text-[10px] text-[#888]">Step 3 of 5</div>
      <div className="w-full h-1 rounded-full bg-[#f0f0f0] mb-4">
        <div
          className="h-full rounded-full"
          style={{ width: "60%", background: "var(--primary)" }}
        />
      </div>

      <div className="text-base font-bold text-[#111] mb-1">
        Client Identity
      </div>
      <div className="text-xs text-[#666] mb-3">
        Verify identity via DigiLocker for instant auto-fill, or enter details
        manually.
      </div>

      {/* Verified badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center gap-1.5 mb-3"
      >
        <span className="text-[9px] font-semibold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full flex items-center gap-1">
          <svg
            aria-hidden="true"
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2.5 6l2.5 2.5 4.5-5"
              stroke="#15803d"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Verified via DigiLocker
        </span>
      </motion.div>

      {/* Form grid */}
      <div className="grid grid-cols-3 gap-x-2 gap-y-2">
        {FORM_FIELDS.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 6 }}
            animate={
              i < visibleCount ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }
            }
            transition={{ duration: 0.2 }}
            className={
              i === 0 ? "col-span-3" : i >= 3 ? "col-span-3" : "col-span-1"
            }
          >
            <div className="block text-[8px] font-semibold text-[#888] mb-0.5 uppercase tracking-wider">
              {f.label}
            </div>
            <div className="border rounded px-2 py-1.5 text-xs text-[#1a1a1a] bg-[#fafafa] truncate">
              {f.value}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function AdmissionsVisual() {
  const [step, setStep] = useState(0);

  const advance = useCallback(() => {
    setStep((s) => (s + 1) % 4);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(advance, STEP_DURATIONS[step]);
    return () => clearTimeout(timeout);
  }, [step, advance]);

  return (
    <div className="w-[520px]">
      <AppChrome
        path={
          step === 1 || step === 2
            ? "digilocker.meripehchaan.gov.in"
            : "clients/new?flow=standard"
        }
        footer={<StepDots active={step} count={4} />}
      >
        <div className="p-5 bg-white overflow-hidden" style={{ height: 380 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="h-full"
            >
              {step === 0 && <BridgeVerifyStep />}
              {step === 1 && <SignInOtpStep />}
              {step === 2 && <ConsentStep />}
              {step === 3 && <FormFilledStep />}
            </motion.div>
          </AnimatePresence>
        </div>
      </AppChrome>
    </div>
  );
}

export function AdmissionsVisualMobile() {
  const [step, setStep] = useState(0);

  const advance = useCallback(() => {
    setStep((s) => (s + 1) % 4);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(advance, STEP_DURATIONS[step]);
    return () => clearTimeout(timeout);
  }, [step, advance]);

  return (
    <div className="w-full max-w-[300px] mx-auto">
      <AppChrome
        path={
          step === 1 || step === 2
            ? "digilocker.meripehchaan.gov.in"
            : "clients/new"
        }
        footer={<StepDots active={step} count={4} />}
      >
        <div className="p-4 bg-white overflow-hidden" style={{ height: 360 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="h-full"
            >
              {step === 0 && <BridgeVerifyStep />}
              {step === 1 && <SignInOtpStep />}
              {step === 2 && <ConsentStep />}
              {step === 3 && <FormFilledStepMobile />}
            </motion.div>
          </AnimatePresence>
        </div>
      </AppChrome>
    </div>
  );
}

function FormFilledStepMobile() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < FORM_FIELDS.length) {
        i++;
        setVisibleCount(i);
      } else {
        clearInterval(interval);
      }
    }, 220);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="mb-1 text-[10px] text-[#888]">Step 3 of 5</div>
      <div className="w-full h-1 rounded-full bg-[#f0f0f0] mb-4">
        <div
          className="h-full rounded-full"
          style={{ width: "60%", background: "var(--primary)" }}
        />
      </div>
      <div className="text-base font-bold text-[#111] mb-1">
        Client Identity
      </div>
      <div className="text-xs text-[#666] mb-3">
        Verified via DigiLocker — auto-filled.
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center gap-1.5 mb-3"
      >
        <span className="text-[9px] font-semibold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full flex items-center gap-1">
          <svg
            aria-hidden="true"
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2.5 6l2.5 2.5 4.5-5"
              stroke="#15803d"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Verified via DigiLocker
        </span>
      </motion.div>
      <div className="flex flex-col gap-1.5">
        {FORM_FIELDS.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 6 }}
            animate={
              i < visibleCount ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }
            }
            transition={{ duration: 0.2 }}
          >
            <div className="block text-[8px] font-semibold text-[#888] mb-0.5 uppercase tracking-wider">
              {f.label}
            </div>
            <div className="border rounded px-2 py-1.5 text-xs text-[#1a1a1a] bg-[#fafafa] truncate">
              {f.value}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Accounting ──────────────────────────────────────────────────────────────

const ACCT_STEP_DURATIONS = [4000, 4500];

const ACCT_SUMMARY = [
  {
    label: "Total Collected",
    value: "₹1,47,500",
    sub: "From 12 payments",
    icon: "₹",
  },
  { label: "Outstanding", value: "₹32,500", sub: "4 enrollments", icon: "!" },
  { label: "Transactions", value: "14", sub: "₹10,535 avg", icon: "#" },
  { label: "Top Method", value: "UPI", sub: "₹98,000", icon: "⚡" },
];

const ACCT_ROWS = [
  {
    date: "28 Mar",
    client: "Vinay Nair",
    method: "Cash",
    status: "Completed",
    amount: "₹20,000",
  },
  {
    date: "25 Mar",
    client: "Priya Menon",
    method: "UPI",
    status: "Completed",
    amount: "₹8,500",
  },
  {
    date: "22 Mar",
    client: "Arun Shah",
    method: "Online",
    status: "Pending",
    amount: "₹6,500",
  },
  {
    date: "20 Mar",
    client: "Meera Patel",
    method: "UPI",
    status: "Completed",
    amount: "₹12,000",
  },
  {
    date: "18 Mar",
    client: "Rajesh Kumar",
    method: "Online",
    status: "Pending",
    amount: "₹5,500",
  },
  {
    date: "15 Mar",
    client: "Sneha Reddy",
    method: "UPI",
    status: "Completed",
    amount: "₹10,000",
  },
  {
    date: "12 Mar",
    client: "Amit Patel",
    method: "Cash",
    status: "Completed",
    amount: "₹7,500",
  },
];

// Step 1: Enrollment payment form (matches real UI)
function AcctPaymentStep() {
  const [showBtn, setShowBtn] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowBtn(true), 500);
    const t2 = setTimeout(() => setShowSuccess(true), 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="flex gap-3 h-full">
      {/* Left: form */}
      <div className="flex-1 flex flex-col">
        {/* Step indicator */}
        <div className="mb-1 text-[10px] text-[#888]">Step 6 of 6</div>
        <div className="w-full h-1 rounded-full bg-[#f0f0f0] mb-2.5">
          <div
            className="h-full rounded-full"
            style={{ width: "100%", background: "var(--primary)" }}
          />
        </div>

        <div className="text-sm font-bold text-[#111] mb-0.5">Payment</div>
        <div className="text-[9px] text-[#888] mb-2">
          Record the payment for this enrollment.
        </div>

        {/* Package card */}
        <div className="border rounded-lg p-2 flex items-center justify-between mb-2">
          <div>
            <div className="text-[8px] text-[#888]">Package</div>
            <div className="text-[10px] font-semibold text-[#111]">
              SUV - Advance (Full Service)
            </div>
          </div>
          <div className="text-xs font-bold text-[#111]">₹20,000</div>
        </div>

        {/* Payment Plan */}
        <div className="text-[9px] font-medium text-[#333] mb-1">
          Payment Plan
        </div>
        <div className="flex gap-2 mb-2">
          <div
            className="flex-1 border-2 rounded-lg p-2"
            style={{ borderColor: "var(--primary)" }}
          >
            <div className="flex items-center justify-between">
              <div className="text-[9px] font-semibold text-[#111]">
                Full Payment
              </div>
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center"
                style={{ background: "var(--primary)" }}
              >
                <svg
                  aria-hidden="true"
                  width="8"
                  height="8"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M2.5 6l2.5 2.5 4.5-5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="text-[8px] text-[#888]">Pay the entire fee now</div>
          </div>
          <div className="flex-1 border rounded-lg p-2">
            <div className="text-[9px] font-semibold text-[#111]">
              2 Installments
            </div>
            <div className="text-[8px] text-[#888]">
              Pay half now, rest later
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="text-[9px] font-medium text-[#333] mb-1">
          Payment Method
        </div>
        <div className="flex gap-1.5 mb-2">
          {["Online", "QR", "Cash"].map((m, i) => (
            <div
              key={m}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-medium"
              style={{
                background: i === 2 ? "var(--primary)" : "transparent",
                color: i === 2 ? "var(--primary-foreground)" : "#888",
                border: i === 2 ? "none" : "1px solid #e5e5e5",
              }}
            >
              {i === 2 && (
                <svg
                  aria-hidden="true"
                  width="8"
                  height="8"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M2.5 6l2.5 2.5 4.5-5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {m}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto flex items-center justify-between">
          <div className="text-[9px] text-[#888]">← Back</div>
          <AnimatePresence mode="wait">
            {showSuccess ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-1.5 bg-green-50 border border-green-200 px-3 py-1.5 rounded-lg"
              >
                <svg
                  aria-hidden="true"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M2.5 6l2.5 2.5 4.5-5"
                    stroke="#15803d"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[9px] font-semibold text-green-700">
                  Admission Complete
                </span>
              </motion.div>
            ) : (
              <motion.button
                key="cta"
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: showBtn ? 1 : 0 }}
                exit={{ opacity: 0 }}
                className="px-4 py-1.5 rounded-lg text-[9px] font-semibold text-white"
                style={{ background: "var(--primary)" }}
              >
                Complete Admission →
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right: summary sidebar */}
      <div className="w-[110px] shrink-0 border-l pl-3 flex flex-col">
        <div className="text-lg font-bold" style={{ color: "var(--primary)" }}>
          ₹20,000
        </div>
        <div className="flex items-center gap-1 mb-3">
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--primary)" }}
          />
          <span className="text-[9px] text-[#888]">Total Due</span>
        </div>

        <div className="flex flex-col gap-1.5 text-[9px]">
          <div className="flex justify-between">
            <span className="text-[#888]">Total Fees</span>
            <span className="font-medium text-[#111]">₹20,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#888]">Paying Now</span>
            <span className="font-medium text-[#111]">₹20,000</span>
          </div>
        </div>

        <div className="mt-2 pt-2 border-t text-[7px] text-[#aaa]">
          All amounts include GST and applicable taxes
        </div>
      </div>
    </div>
  );
}

// Step 2: Income dashboard with summary cards + table
function AcctDashboardStep() {
  const [cardsVisible, setCardsVisible] = useState(0);
  const [rowsVisible, setRowsVisible] = useState(0);

  useEffect(() => {
    // Animate cards first
    let i = 0;
    const cardInterval = setInterval(() => {
      if (i < ACCT_SUMMARY.length) {
        i++;
        setCardsVisible(i);
      } else {
        clearInterval(cardInterval);
        // Then animate rows
        let j = 0;
        const rowInterval = setInterval(() => {
          if (j < ACCT_ROWS.length) {
            j++;
            setRowsVisible(j);
          } else {
            clearInterval(rowInterval);
          }
        }, 180);
      }
    }, 150);
    return () => clearInterval(cardInterval);
  }, []);

  return (
    <div className="flex flex-col gap-2.5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-bold text-[#111]">Income</div>
          <div className="text-[8px] text-[#888]">Mar 01 – Mar 31, 2026</div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="border rounded px-2 py-0.5 text-[7px] text-[#888]">
            All Statuses
          </div>
          <div className="border rounded px-2 py-0.5 text-[7px] text-[#888]">
            All Methods
          </div>
          <div className="border rounded px-2 py-0.5 text-[7px] text-[#888]">
            Export
          </div>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-4 gap-1.5">
        {ACCT_SUMMARY.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 6 }}
            animate={
              i < cardsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }
            }
            transition={{ duration: 0.2 }}
            className="border rounded-lg p-2"
          >
            <div className="text-[7px] font-medium text-[#888] uppercase tracking-wider mb-1">
              {card.icon} {card.label}
            </div>
            <div className="text-xs font-bold text-[#111]">{card.value}</div>
            <div className="text-[7px] text-[#aaa] mt-0.5">{card.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Table */}
      <div className="rounded-lg border overflow-hidden">
        <div
          className="grid bg-[#f9f9f9] border-b px-2 py-1"
          style={{ gridTemplateColumns: "44px 1fr 42px 52px 48px" }}
        >
          {["Date", "Client", "Method", "Status", "Amount"].map((h) => (
            <div
              key={h}
              className="text-[7px] font-semibold uppercase tracking-wider text-[#aaa]"
            >
              {h}
            </div>
          ))}
        </div>
        {ACCT_ROWS.map((r, i) => (
          <motion.div
            key={r.client}
            initial={{ opacity: 0, x: -6 }}
            animate={
              i < rowsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }
            }
            transition={{ duration: 0.2 }}
            className="grid px-2 py-1.5 border-b last:border-0 text-[8px] items-center"
            style={{ gridTemplateColumns: "44px 1fr 42px 52px 48px" }}
          >
            <span className="text-[#555]">{r.date}</span>
            <span className="font-medium text-[#111] truncate">{r.client}</span>
            <span className="text-[#888]">{r.method}</span>
            <span>
              <span
                className={`text-[7px] font-semibold px-1.5 py-0.5 rounded-full ${
                  r.status === "Completed"
                    ? "bg-green-50 text-green-700"
                    : "bg-amber-50 text-amber-700"
                }`}
              >
                {r.status}
              </span>
            </span>
            <span className="font-semibold text-[#111] text-right">
              {r.amount}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function PaymentsVisual() {
  const [step, setStep] = useState(0);

  const advance = useCallback(() => {
    setStep((s) => (s + 1) % 2);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(advance, ACCT_STEP_DURATIONS[step]);
    return () => clearTimeout(timeout);
  }, [step, advance]);

  return (
    <div className="w-[520px]">
      <AppChrome
        path={step === 0 ? "clients/new" : "income"}
        footer={<StepDots active={step} count={2} />}
      >
        <div className="flex">
          <AppSidebar active={step === 0 ? "Admissions" : "Payments"} />
          <div
            className="flex-1 p-3.5 bg-white overflow-hidden"
            style={{ height: 360 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-full"
              >
                {step === 0 && <AcctPaymentStep />}
                {step === 1 && <AcctDashboardStep />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </AppChrome>
    </div>
  );
}

export function PaymentsVisualMobile() {
  const [step, setStep] = useState(0);

  const advance = useCallback(() => {
    setStep((s) => (s + 1) % 2);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(advance, ACCT_STEP_DURATIONS[step]);
    return () => clearTimeout(timeout);
  }, [step, advance]);

  return (
    <div className="w-full max-w-[300px] mx-auto">
      <AppChrome
        path={step === 0 ? "clients/new" : "income"}
        footer={<StepDots active={step} count={2} />}
      >
        <div
          className="p-3 bg-white overflow-hidden"
          style={{ height: 320 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="h-full"
            >
              {step === 0 && <AcctPaymentStepMobile />}
              {step === 1 && <AcctDashboardStepMobile />}
            </motion.div>
          </AnimatePresence>
        </div>
      </AppChrome>
    </div>
  );
}

function AcctPaymentStepMobile() {
  const [showBtn, setShowBtn] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowBtn(true), 500);
    const t2 = setTimeout(() => setShowSuccess(true), 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="mb-1 text-[10px] text-[#888]">Step 6 of 6</div>
      <div className="w-full h-1 rounded-full bg-[#f0f0f0] mb-2">
        <div
          className="h-full rounded-full"
          style={{ width: "100%", background: "var(--primary)" }}
        />
      </div>
      <div className="text-sm font-bold text-[#111] mb-0.5">Payment</div>
      <div className="text-[9px] text-[#888] mb-2">
        Record the payment for this enrollment.
      </div>
      <div className="border rounded-lg p-2 flex items-center justify-between mb-2">
        <div>
          <div className="text-[8px] text-[#888]">Package</div>
          <div className="text-[10px] font-semibold text-[#111]">
            SUV - Advance (Full Service)
          </div>
        </div>
        <div className="text-xs font-bold text-[#111]">₹20,000</div>
      </div>
      <div className="text-[9px] font-medium text-[#333] mb-1">
        Payment Plan
      </div>
      <div className="flex gap-2 mb-2">
        <div
          className="flex-1 border-2 rounded-lg p-2"
          style={{ borderColor: "var(--primary)" }}
        >
          <div className="text-[9px] font-semibold text-[#111]">
            Full Payment
          </div>
          <div className="text-[8px] text-[#888]">Pay the entire fee now</div>
        </div>
        <div className="flex-1 border rounded-lg p-2">
          <div className="text-[9px] font-semibold text-[#111]">
            2 Installments
          </div>
          <div className="text-[8px] text-[#888]">Pay half now, rest later</div>
        </div>
      </div>
      <div className="text-[9px] font-medium text-[#333] mb-1">
        Payment Method
      </div>
      <div className="flex gap-1.5 mb-2">
        {["Online", "QR", "Cash"].map((m, i) => (
          <div
            key={m}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-medium"
            style={{
              background: i === 2 ? "var(--primary)" : "transparent",
              color: i === 2 ? "var(--primary-foreground)" : "#888",
              border: i === 2 ? "none" : "1px solid #e5e5e5",
            }}
          >
            {m}
          </div>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between">
        <div className="text-[9px] text-[#888]">← Back</div>
        <AnimatePresence mode="wait">
          {showSuccess ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-1.5 bg-green-50 border border-green-200 px-3 py-1.5 rounded-lg"
            >
              <span className="text-[9px] font-semibold text-green-700">
                Admission Complete
              </span>
            </motion.div>
          ) : (
            <motion.button
              key="cta"
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: showBtn ? 1 : 0 }}
              exit={{ opacity: 0 }}
              className="px-4 py-1.5 rounded-lg text-[9px] font-semibold text-white"
              style={{ background: "var(--primary)" }}
            >
              Complete Admission →
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function AcctDashboardStepMobile() {
  const [cardsVisible, setCardsVisible] = useState(0);
  const [rowsVisible, setRowsVisible] = useState(0);

  useEffect(() => {
    let i = 0;
    const cardInterval = setInterval(() => {
      if (i < 3) {
        i++;
        setCardsVisible(i);
      } else {
        clearInterval(cardInterval);
        let j = 0;
        const rowInterval = setInterval(() => {
          if (j < ACCT_ROWS.length) {
            j++;
            setRowsVisible(j);
          } else {
            clearInterval(rowInterval);
          }
        }, 180);
      }
    }, 150);
    return () => clearInterval(cardInterval);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div>
        <div className="text-sm font-bold text-[#111]">Income</div>
        <div className="text-[8px] text-[#888]">Mar 01 – Mar 31, 2026</div>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {ACCT_SUMMARY.slice(0, 3).map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 6 }}
            animate={
              i < cardsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }
            }
            transition={{ duration: 0.2 }}
            className="border rounded-lg p-1.5"
          >
            <div className="text-[6px] font-medium text-[#888] uppercase tracking-wider mb-0.5">
              {card.icon} {card.label}
            </div>
            <div className="text-[10px] font-bold text-[#111]">
              {card.value}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="rounded-lg border overflow-hidden">
        <div
          className="grid bg-[#f9f9f9] border-b px-2 py-1"
          style={{ gridTemplateColumns: "1fr 42px 48px" }}
        >
          {["Client", "Method", "Amount"].map((h) => (
            <div
              key={h}
              className="text-[7px] font-semibold uppercase tracking-wider text-[#aaa]"
            >
              {h}
            </div>
          ))}
        </div>
        {ACCT_ROWS.slice(0, 5).map((r, i) => (
          <motion.div
            key={r.client}
            initial={{ opacity: 0, x: -6 }}
            animate={
              i < rowsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }
            }
            transition={{ duration: 0.2 }}
            className="grid px-2 py-1.5 border-b last:border-0 text-[8px] items-center"
            style={{ gridTemplateColumns: "1fr 42px 48px" }}
          >
            <span className="font-medium text-[#111] truncate">
              {r.client}
            </span>
            <span className="text-[#888]">{r.method}</span>
            <span className="font-semibold text-[#111] text-right">
              {r.amount}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Scheduling ───────────────────────────────────────────────────────────────

const SCHED_STEP_DURATIONS = [4000, 4000];

const TIME_SLOTS = [
  "6:00 AM",
  "6:30 AM",
  "7:00 AM",
  "7:30 AM",
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
];
const SELECTED_TIME = "4:30 PM";
const CONFLICT_SLOTS = ["5:30 PM", "3:30 PM", "6:00 PM", "3:00 PM"];

// Step 1: Enrollment schedule picker
function SchedPickerStep() {
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const [showConflict, setShowConflict] = useState(false);

  useEffect(() => {
    // Animate selection after a pause
    const t1 = setTimeout(() => {
      setSelectedIdx(TIME_SLOTS.indexOf(SELECTED_TIME));
    }, 800);
    const t2 = setTimeout(() => setShowConflict(true), 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="flex flex-col h-full">
      {/* Step indicator */}
      <div className="mb-1 text-[10px] text-[#888]">Step 2 of 5</div>
      <div className="w-full h-1 rounded-full bg-[#f0f0f0] mb-2.5">
        <div
          className="h-full rounded-full"
          style={{ width: "40%", background: "var(--primary)" }}
        />
      </div>

      <div className="text-sm font-bold text-[#111] mb-0.5">Schedule</div>
      <div className="text-[9px] text-[#888] mb-2.5">
        Pick a joining date and preferred session time.
      </div>

      {/* Joining Date */}
      <div className="text-[9px] font-semibold text-[#333] mb-1">
        Joining Date
      </div>
      <div className="flex items-center gap-1.5 mb-3">
        <div className="flex-1 border rounded-md px-2 py-1.5 text-[9px] text-[#333] flex items-center justify-between">
          <span>31/03/2026</span>
          <Calendar size={10} className="text-[#aaa]" />
        </div>
        <div className="border rounded-md px-2 py-1.5 text-[8px] text-[#888]">
          Today
        </div>
        <div
          className="rounded-md px-2 py-1.5 text-[8px] font-semibold"
          style={{
            background: "color-mix(in srgb, var(--primary) 10%, white)",
            color: "var(--primary)",
            border: "1px solid color-mix(in srgb, var(--primary) 30%, white)",
          }}
        >
          Tomorrow
        </div>
        <div className="border rounded-md px-2 py-1.5 text-[8px] text-[#888]">
          +7 days
        </div>
      </div>

      {/* Preferred Session Time */}
      <div className="text-[9px] font-semibold text-[#333] mb-1.5">
        Preferred Session Time
      </div>
      <div className="flex flex-wrap gap-1 mb-2.5">
        {TIME_SLOTS.map((slot, i) => {
          const isSelected = i === selectedIdx;
          return (
            <motion.div
              key={slot}
              animate={isSelected ? { scale: [1, 1.08, 1] } : {}}
              transition={{ duration: 0.25 }}
              className="px-1.5 py-0.5 rounded-md text-[7px] font-medium"
              style={{
                background: isSelected
                  ? "color-mix(in srgb, var(--primary) 10%, white)"
                  : "white",
                color: isSelected ? "var(--primary)" : "#888",
                border: isSelected
                  ? "1.5px solid var(--primary)"
                  : "1px solid #e5e5e5",
              }}
            >
              {slot}
            </motion.div>
          );
        })}
      </div>

      {/* Conflict warning */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={
          showConflict
            ? { opacity: 1, height: "auto" }
            : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div
          className="rounded-lg p-2 mb-2"
          style={{
            background: "color-mix(in srgb, var(--primary) 5%, white)",
            border: "1px solid color-mix(in srgb, var(--primary) 20%, white)",
          }}
        >
          <div
            className="text-[8px] font-semibold mb-1"
            style={{ color: "var(--primary)" }}
          >
            18 of 21 sessions have conflicts
          </div>
          <div className="text-[7px] text-[#888] mb-1">Try instead:</div>
          <div className="flex gap-1">
            {CONFLICT_SLOTS.map((s) => (
              <div
                key={s}
                className="px-1.5 py-0.5 rounded text-[7px] font-semibold"
                style={{
                  background: "color-mix(in srgb, var(--primary) 10%, white)",
                  color: "var(--primary)",
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <div className="mt-auto flex items-center justify-between">
        <div className="text-[9px] text-[#aaa]">← Back</div>
        <button
          type="button"
          className="px-4 py-1.5 rounded-lg text-[9px] font-semibold text-white"
          style={{ background: "var(--primary)" }}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

// Step 2: Vehicle calendar grid (existing, now as a step)
function SchedCalendarStep() {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const slots = ["9 AM", "11 AM", "1 PM", "3 PM", "5 PM", "7 PM"];
  const bookings: Record<string, string> = {
    "MON-9 AM": "Ravi K.",
    "MON-11 AM": "Priya M.",
    "TUE-9 AM": "Arun S.",
    "TUE-1 PM": "Meera P.",
    "WED-11 AM": "Suresh R.",
    "WED-3 PM": "Lakshmi T.",
    "THU-9 AM": "Deepak N.",
    "FRI-11 AM": "Kavya B.",
    "FRI-3 PM": "Vikram J.",
    "SAT-9 AM": "Ananya R.",
  };

  return (
    <div className="flex flex-col h-full">
      {/* Vehicle header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-sm font-semibold text-[#111]">Swift Dzire</div>
          <div className="text-[10px] text-[#888]">KA-01-AB-1234</div>
        </div>
        <div className="flex items-center gap-1 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <span className="text-[10px] font-semibold text-green-700">
            0 conflicts
          </span>
        </div>
      </div>

      {/* Calendar grid */}
      <table className="border-collapse w-full" style={{ fontSize: 10 }}>
        <thead>
          <tr>
            <th className="w-12 pb-2" />
            {days.map((d) => (
              <th
                key={d}
                className="pb-2 text-center font-semibold uppercase tracking-wider"
                style={{ color: "#aaa", minWidth: 54 }}
              >
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slots.map((slot) => (
            <tr key={slot}>
              <td
                className="pr-2.5 whitespace-nowrap text-right"
                style={{ color: "#aaa", paddingBottom: 6 }}
              >
                {slot}
              </td>
              {days.map((day) => {
                const key = `${day}-${slot}`;
                const name = bookings[key];
                return (
                  <td
                    key={key}
                    className="text-center"
                    style={{
                      paddingBottom: 6,
                      paddingLeft: 2,
                      paddingRight: 2,
                    }}
                  >
                    {name ? (
                      <div
                        className="rounded-md px-1 py-1.5 font-semibold leading-none"
                        style={{
                          background: "var(--primary)",
                          color: "var(--primary-foreground)",
                        }}
                      >
                        {name}
                      </div>
                    ) : (
                      <div
                        className="rounded-md border border-dashed py-1.5 leading-none"
                        style={{ color: "#ddd", borderColor: "#e5e5e5" }}
                      >
                        —
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div className="mt-auto pt-3 border-t flex items-center justify-between">
        <div className="text-[10px] text-[#aaa]">
          Instructor Vijay · 10 sessions this week
        </div>
        <div className="text-[10px] font-semibold text-primary">
          Auto-assigned ✓
        </div>
      </div>
    </div>
  );
}

export function SchedulingVisual() {
  const [step, setStep] = useState(0);

  const advance = useCallback(() => {
    setStep((s) => (s + 1) % 2);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(advance, SCHED_STEP_DURATIONS[step]);
    return () => clearTimeout(timeout);
  }, [step, advance]);

  return (
    <div className="w-[560px]">
      <AppChrome
        path={step === 0 ? "clients/new" : "schedule"}
        footer={<StepDots active={step} count={2} />}
      >
        <div className="flex">
          <AppSidebar active={step === 0 ? "Admissions" : "Schedule"} />
          <div
            className="flex-1 p-4 bg-white overflow-hidden"
            style={{ height: 380 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-full"
              >
                {step === 0 && <SchedPickerStep />}
                {step === 1 && <SchedCalendarStep />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </AppChrome>
    </div>
  );
}

export function SchedulingVisualMobile() {
  const [step, setStep] = useState(0);

  const advance = useCallback(() => {
    setStep((s) => (s + 1) % 2);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(advance, SCHED_STEP_DURATIONS[step]);
    return () => clearTimeout(timeout);
  }, [step, advance]);

  return (
    <div className="w-full max-w-[300px] mx-auto">
      <AppChrome
        path={step === 0 ? "clients/new" : "schedule"}
        footer={<StepDots active={step} count={2} />}
      >
        <div
          className="p-3 bg-white overflow-hidden"
          style={{ height: 340 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="h-full"
            >
              {step === 0 && <SchedPickerStep />}
              {step === 1 && <SchedCalendarStepMobile />}
            </motion.div>
          </AnimatePresence>
        </div>
      </AppChrome>
    </div>
  );
}

function SchedCalendarStepMobile() {
  const days = ["MON", "TUE", "WED", "THU", "FRI"];
  const slots = ["9 AM", "11 AM", "1 PM", "3 PM", "5 PM"];
  const bookings: Record<string, string> = {
    "MON-9 AM": "Ravi K.",
    "MON-11 AM": "Priya M.",
    "TUE-9 AM": "Arun S.",
    "TUE-1 PM": "Meera P.",
    "WED-11 AM": "Suresh R.",
    "WED-3 PM": "Lakshmi T.",
    "THU-9 AM": "Deepak N.",
    "FRI-11 AM": "Kavya B.",
    "FRI-3 PM": "Vikram J.",
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-xs font-semibold text-[#111]">Swift Dzire</div>
          <div className="text-[9px] text-[#888]">KA-01-AB-1234</div>
        </div>
        <div className="flex items-center gap-1 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <span className="text-[8px] font-semibold text-green-700">
            0 conflicts
          </span>
        </div>
      </div>
      <table className="border-collapse w-full" style={{ fontSize: 9 }}>
        <thead>
          <tr>
            <th className="w-8 pb-1.5" />
            {days.map((d) => (
              <th
                key={d}
                className="pb-1.5 text-center font-semibold uppercase tracking-wider"
                style={{ color: "#aaa" }}
              >
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slots.map((slot) => (
            <tr key={slot}>
              <td
                className="pr-1 whitespace-nowrap text-right"
                style={{ color: "#aaa", paddingBottom: 4 }}
              >
                {slot}
              </td>
              {days.map((day) => {
                const key = `${day}-${slot}`;
                const name = bookings[key];
                return (
                  <td key={key} className="text-center" style={{ paddingBottom: 4, paddingLeft: 1, paddingRight: 1 }}>
                    {name ? (
                      <div
                        className="rounded px-0.5 py-1 font-semibold leading-none truncate"
                        style={{
                          background: "var(--primary)",
                          color: "var(--primary-foreground)",
                        }}
                      >
                        {name}
                      </div>
                    ) : (
                      <div
                        className="rounded border border-dashed py-1 leading-none"
                        style={{ color: "#ddd", borderColor: "#e5e5e5" }}
                      >
                        —
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-auto pt-2 border-t flex items-center justify-between">
        <div className="text-[9px] text-[#aaa]">
          Instructor Vijay · 10 sessions
        </div>
        <div className="text-[9px] font-semibold text-primary">
          Auto-assigned ✓
        </div>
      </div>
    </div>
  );
}

// ─── Leads / WhatsApp ────────────────────────────────────────────────────────

const WA_MESSAGES = [
  {
    day: "Day 1",
    delay: "Instant",
    time: "10:00",
    body: (
      <>
        Hi Vinay Nair!
        <br />
        <br />
        Thank you for your interest in{" "}
        <span className="font-bold">Perfect Driving School</span>! We offer
        professional courses with experienced instructors.
        <br />
        <br />
        Ready to start your journey?
      </>
    ),
    buttons: ["Request Callback", "Not Now"],
  },
  {
    day: "Day 3",
    delay: "+2 days",
    time: "10:01",
    body: (
      <>
        Hi Vinay Nair,
        <br />
        <br />
        Hundreds of students have earned their driving license through{" "}
        <span className="font-bold">Perfect Driving School</span>. Our
        instructors are experienced, patient, and focused on getting you
        road-ready.
        <br />
        <br />
        Ready to take the first step?
      </>
    ),
    buttons: ["Request Callback", "Not Now"],
  },
  {
    day: "Day 5",
    delay: "+2 days",
    time: "10:01",
    body: (
      <>
        Hi Vinay Nair,
        <br />
        <br />
        Slots at <span className="font-bold">Perfect Driving School</span> fill
        up fast — morning and evening timings are everyone&apos;s first choice.
        <br />
        <br />
        If you want your preferred time slot, it&apos;s worth enrolling soon.
        Call 9326515133 to check availability.
      </>
    ),
    buttons: ["Request Callback", "Not Now"],
  },
  {
    day: "Day 7",
    delay: "+2 days",
    time: "10:01",
    body: (
      <>
        Hi Vinay Nair,
        <br />
        <br />
        Special offer from{" "}
        <span className="font-bold">Perfect Driving School</span>: enroll this
        week and your first session is on us — completely free!
        <br />
        <br />
        Because we genuinely care about your success on the road. Call
        9326515133 to claim your free session.
      </>
    ),
    buttons: ["Request Callback", "Not Now"],
  },
];

const WA_STEP_DURATIONS = [3500, 3000, 3000, 3500];

function WaHeader() {
  return (
    <div
      className="flex items-center gap-2.5 px-3 py-2"
      style={{ background: "#075E54" }}
    >
      <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="4" fill="white" />
          <path
            d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <div className="flex-1">
        <div className="text-white text-xs font-semibold leading-tight">
          Perfect Driving School
        </div>
        <div className="text-white/60 text-[9px]">Business account</div>
      </div>
    </div>
  );
}

function WaMessageStep({ index }: { index: number }) {
  const msg = WA_MESSAGES[index];
  const [showBubble, setShowBubble] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowBubble(true), 300);
    const t2 = setTimeout(() => setShowButtons(true), 800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="flex flex-col h-full">
      {/* Day/timing badge */}
      <div className="flex justify-center mb-2">
        <div className="bg-[#E1F2FB] rounded-md py-0.5 px-2.5 text-[9px] text-[#555] font-medium shadow-sm">
          {msg.day}
        </div>
      </div>

      {/* Message bubble */}
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.97 }}
        animate={
          showBubble
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 12, scale: 0.97 }
        }
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex flex-col items-start"
      >
        <div className="bg-white rounded-lg rounded-tl-[3px] py-2.5 px-3 text-[10px] text-[#111] leading-relaxed max-w-[92%] shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
          {msg.body}
          <div className="flex justify-end mt-1">
            <span className="text-[8px] text-[#999]">{msg.time}</span>
          </div>
        </div>

        {/* Quick reply buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showButtons ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col mt-0.5 w-full max-w-[92%] rounded-lg overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
        >
          {msg.buttons.map((btn, i) => (
            <div
              key={btn}
              className={`flex items-center justify-center gap-1 py-1.5 bg-white text-[10px] font-medium text-[#00A5F4] ${i > 0 ? "border-t" : ""}`}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 11l8-8v5c10 0 10 9 10 9s-3-5-10-5v5z"
                  fill="#00A5F4"
                />
              </svg>
              {btn}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

function PhoneFrame({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div
      className="rounded-[2rem] border-[3px] border-[#1a1a1a] bg-[#1a1a1a] overflow-hidden"
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(0,0,0,0.07), 0 12px 32px -4px rgba(0,0,0,0.12)",
      }}
    >
      {/* Notch */}
      <div className="bg-[#1a1a1a] flex justify-center py-1.5">
        <div className="w-20 h-4 bg-[#111] rounded-full" />
      </div>
      {/* Screen */}
      <div className="bg-white rounded-t-sm overflow-hidden">{children}</div>
      {/* Footer (step dots) */}
      {footer && <div className="bg-white">{footer}</div>}
      {/* Home indicator */}
      <div className="bg-white flex justify-center pb-2 pt-1">
        <div className="w-16 h-1 bg-[#1a1a1a] rounded-full" />
      </div>
    </div>
  );
}

export function LeadsVisual() {
  const [step, setStep] = useState(0);

  const advance = useCallback(() => {
    setStep((s) => (s + 1) % 4);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(advance, WA_STEP_DURATIONS[step]);
    return () => clearTimeout(timeout);
  }, [step, advance]);

  return (
    <div className="w-full max-w-[260px]">
      <PhoneFrame footer={<StepDots active={step} count={4} />}>
        <WaHeader />
        <div
          className="p-2 overflow-hidden flex flex-col"
          style={{ background: "#ECE5DD", height: 340 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1"
            >
              <WaMessageStep index={step} />
            </motion.div>
          </AnimatePresence>
        </div>
      </PhoneFrame>
    </div>
  );
}
