import { MockupCard } from "@/components/ui/mockup-card";
import { WaBubble } from "@/components/ui/wa-bubble";

export function AdmissionsVisual() {
  return (
    <div className="w-full max-w-sm">
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-5 mb-4 text-white relative overflow-hidden">
        <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-white/10" />
        <div className="text-2xs opacity-70 tracking-widest mb-2">
          AADHAAR — INDIA
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-2xl">
            👤
          </div>
          <div>
            <div className="font-bold text-base">Ravi Kumar</div>
            <div className="text-xs opacity-70">DOB: 14/03/1998</div>
            <div className="text-xs opacity-70">Male</div>
          </div>
        </div>
        <div className="mt-3 text-base font-semibold tracking-widest">
          XXXX XXXX 4321
        </div>
      </div>
      <div className="text-center mb-4 text-2xl text-primary">↓</div>
      <MockupCard className="p-4">
        <div className="text-2xs font-semibold uppercase tracking-widest text-primary mb-3">
          ✓ AUTO-FILLED FROM AADHAAR
        </div>
        {[
          { label: "Full Name", value: "Ravi Kumar" },
          { label: "Date of Birth", value: "14 Mar 1998" },
          { label: "Address", value: "Koramangala, Bengaluru 560034" },
          { label: "Photo", value: "Imported ✓" },
        ].map((f) => (
          <div
            key={f.label}
            className="flex justify-between py-1.5 border-b border-border text-2xs"
          >
            <span className="text-muted-foreground">{f.label}</span>
            <span className="text-primary font-medium">{f.value}</span>
          </div>
        ))}
        <div className="mt-3 text-2xs text-muted-foreground text-center">
          ⚡ Completed in 4 min 38 sec
        </div>
      </MockupCard>
    </div>
  );
}

export function LeadsVisual() {
  return (
    <div className="w-full max-w-sm">
      <MockupCard className="rounded-xl overflow-hidden">
        <div className="bg-[#075E54] text-white py-3 px-4 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">
            👤
          </div>
          <div>
            <div className="font-semibold text-base">+91 98765 43210</div>
            <div className="text-2xs opacity-80">online</div>
          </div>
        </div>
        <div className="bg-[#ECE5DD] p-3 flex flex-col gap-2 min-h-52">
          <WaBubble direction="in" className="max-w-xs">
            Hi, price for 4-wheeler class? 🚗
          </WaBubble>
          <div className="flex justify-end">
            <WaBubble direction="out" className="max-w-xs text-xs">
              Hi Ravi! Our 4-wheeler course is ₹6,500 for 21 sessions. Enroll
              now → bit.ly/bridge ✓✓
            </WaBubble>
          </div>
          <div className="bg-black/5 rounded py-1.5 px-2.5 text-2xs text-gray-700 text-center">
            ⏱ 48hr follow-up queued · 10% discount
          </div>
          <div className="flex justify-end">
            <WaBubble direction="out" className="max-w-xs text-xs bg-green-100">
              🎁 Special offer: ₹5,850 if you enroll today! Expires in 24hrs ⏰
            </WaBubble>
          </div>
        </div>
      </MockupCard>
      <div className="mt-2.5 flex justify-center">
        <span className="bg-yellow-100 text-yellow-900 text-2xs font-semibold py-1 px-3 uppercase tracking-wider">
          🔥 HOT LEAD FLAGGED
        </span>
      </div>
    </div>
  );
}

export function UpsellsVisual() {
  const steps = [
    {
      month: "Month 1",
      label: "Enrolled",
      color: "var(--primary)",
      note: null,
    },
    {
      month: "Month 5",
      label: "LL Expiry Alert",
      color: "#F59E0B",
      note: '"Ravi, your Learner\'s License expires in 30 days. Upgrade to DL now!"',
    },
    {
      month: "Month 6",
      label: "DL Converted ✓",
      color: "var(--primary)",
      note: null,
    },
  ];

  return (
    <div className="w-full max-w-sm">
      <MockupCard className="p-6">
        <div className="text-2xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
          AUTOMATED STUDENT JOURNEY
        </div>
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div key={step.month} className="flex gap-4 items-start">
              <div className="flex flex-col items-center shrink-0">
                <div
                  className="w-3 h-3 rounded-full mt-1"
                  style={{ background: step.color }}
                />
                {i < steps.length - 1 && (
                  <div
                    className="w-0.5 bg-border my-1"
                    style={{ height: step.note ? "80px" : "40px" }}
                  />
                )}
              </div>
              <div className="pb-1">
                <div className="text-2xs text-muted-foreground uppercase tracking-widest">
                  {step.month}
                </div>
                <div className="text-base font-medium text-card-foreground">
                  {step.label}
                </div>
                {step.note && (
                  <div className="bg-yellow-100 border border-yellow-300 rounded py-1.5 px-2.5 text-2xs text-yellow-900 mt-1.5 mb-1 leading-relaxed">
                    {step.note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 flex justify-between text-xs">
          <div>
            <div className="text-2xs text-muted-foreground">DL conversion</div>
            <div className="text-xl font-bold text-primary">68%</div>
          </div>
          <div>
            <div className="text-2xs text-muted-foreground">Upsell revenue</div>
            <div className="text-xl font-bold text-card-foreground">₹1,800</div>
          </div>
          <div>
            <div className="text-2xs text-muted-foreground">Auto-campaigns</div>
            <div className="text-xl font-bold text-card-foreground">
              3 active
            </div>
          </div>
        </div>
      </MockupCard>
    </div>
  );
}

export function SarathiVisual() {
  return (
    <div className="w-full max-w-md">
      <MockupCard className="rounded overflow-hidden py-3">
        <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b border-border">
          <div className="flex gap-1">
            {["#EF4444", "#F59E0B", "#10B981"].map((c) => (
              <div
                key={c}
                className="w-2 h-2 rounded-full"
                style={{ background: c }}
              />
            ))}
          </div>
          <div className="flex-1 bg-white rounded py-0.5 px-2 text-2xs text-muted-foreground border border-border">
            sarathi.parivahan.gov.in/sarathiservice
          </div>
        </div>
        <div className="p-4">
          <div className="text-xs font-bold text-blue-700 mb-3">
            SARATHI — Learner's Licence Application
          </div>
          {[
            { label: "Applicant Name", value: "RAVI KUMAR" },
            { label: "Father's Name", value: "SURESH KUMAR" },
            { label: "Date of Birth", value: "14-03-1998" },
            { label: "Address", value: "Koramangala, Bengaluru" },
          ].map((field) => (
            <div key={field.label} className="flex gap-3 items-center mb-2">
              <span className="text-2xs text-gray-600 w-28 shrink-0">
                {field.label}:
              </span>
              <div className="flex-1 border border-primary py-0.5 px-1.5 text-2xs bg-primary/5 text-primary font-semibold">
                {field.value}
              </div>
              <span className="text-base text-primary">✓</span>
            </div>
          ))}
          <div className="mt-2 bg-primary text-primary-foreground py-2 px-3 text-2xs font-semibold rounded flex items-center gap-1.5 w-fit">
            ⚡ Bridge: 4 fields injected
          </div>
        </div>
      </MockupCard>
    </div>
  );
}

export function SchedulingVisual() {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];
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
    "SAT-9 AM": "Ananya R.",
  };

  return (
    <div className="w-full max-w-lg">
      <MockupCard className="p-4 overflow-x-auto">
        <div className="flex justify-between items-center mb-3">
          <div className="text-2xs font-semibold uppercase tracking-widest text-muted-foreground">
            Swift Dzire · KA-01-AB-1234
          </div>
          <div className="text-2xs bg-green-100 text-green-700 py-0.5 px-2 font-semibold">
            0 conflicts
          </div>
        </div>
        <table className="border-collapse w-full text-2xs">
          <thead>
            <tr>
              <th className="py-1 px-1.5 text-left text-muted-foreground font-medium w-10" />
              {days.map((d) => (
                <th
                  key={d}
                  className="py-1 px-0.5 text-center text-muted-foreground font-semibold uppercase tracking-widest text-2xs"
                >
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slots.map((slot) => (
              <tr key={slot}>
                <td className="py-0.5 px-1.5 text-muted-foreground text-2xs whitespace-nowrap">
                  {slot}
                </td>
                {days.map((day) => {
                  const key = `${day}-${slot}`;
                  const booking = bookings[key];
                  return (
                    <td
                      key={key}
                      className="py-0.5 px-0.5 border border-border text-2xs font-medium text-center min-w-11"
                      style={{
                        background: booking ? "var(--primary)" : "transparent",
                        color: booking
                          ? "var(--primary-foreground)"
                          : "var(--muted-foreground)",
                        fontWeight: booking ? 600 : 400,
                      }}
                    >
                      {booking ?? "·"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-2.5 text-2xs text-muted-foreground">
          Auto-assigned: Instructor Vijay · 10 sessions this week
        </div>
      </MockupCard>
    </div>
  );
}
