import { Resend } from "resend";
import { env } from "@/env";

const resend = new Resend(env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, phone } = (await request.json()) as {
    name: string;
    phone: string;
  };

  if (!name || !phone) {
    return Response.json(
      { error: "Name and phone are required" },
      { status: 400 },
    );
  }

  const { error } = await resend.emails.send({
    from: "Bridge <onboarding@resend.dev>",
    to: env.CONTACT_EMAIL,
    subject: `New demo request from ${name}`,
    text: `Name: ${name}\nPhone: ${phone}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json({ error: "Failed to send" }, { status: 500 });
  }

  return Response.json({ success: true });
}
