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
            className="flex justify-between py-1.5 border-b text-2xs"
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

export function PaymentsVisual() {
  const collected = 5000;
  const total = 10000;
  const percent = Math.round((collected / total) * 100);

  return (
    <div className="w-full max-w-lg">
      <MockupCard className="p-5">
        <div className="text-2xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          STUDENT PAYMENT SUMMARY
        </div>
        <div className="flex justify-between items-center mb-2 gap-10">
          <div>
            <div className="text-base font-semibold text-card-foreground">
              Ravi Kumar
            </div>
            <div className="text-2xs text-muted-foreground">
              4-Wheeler · 21 sessions
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-card-foreground">
              ₹{collected.toLocaleString("en-IN")}
              <span className="text-sm font-normal text-muted-foreground">
                {" "}
                / ₹{total.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="w-full h-2 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="flex justify-end mt-1">
            <span className="text-2xs text-amber-600 font-semibold">
              ₹{(total - collected).toLocaleString("en-IN")} due
            </span>
          </div>
        </div>
        {[
          { date: "15 Feb", amount: "₹5,000", method: "UPI", status: "Paid" },
        ].map((p) => (
          <div
            key={p.date}
            className="flex justify-between items-center py-2 border-b text-2xs"
          >
            <span className="text-muted-foreground w-14">{p.date}</span>
            <span className="font-medium text-card-foreground">{p.amount}</span>
            <span className="text-muted-foreground">{p.method}</span>
            <span
              className={`font-semibold ${p.status === "Due" ? "text-amber-600" : "text-primary"}`}
            >
              {p.status}
            </span>
          </div>
        ))}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1 bg-primary text-primary-foreground py-2 px-3 text-2xs font-semibold rounded text-center">
            Send Payment Link · ₹5,000
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
                      className="py-0.5 px-0.5 border text-2xs font-medium text-center min-w-11"
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
