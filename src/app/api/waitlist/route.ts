import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: { email?: unknown; companyWebsite?: unknown };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Please enter a valid email." }, { status: 400 });
  }

  if (payload.companyWebsite) {
    return NextResponse.json({ message: "You’re on the list." });
  }

  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return NextResponse.json({ message: "Please enter a valid email." }, { status: 400 });
  }

  const webhookUrl = process.env.WAITLIST_WEBHOOK_URL;
  if (!webhookUrl) {
    if (process.env.NODE_ENV === "development") {
      console.info(`[Rolesmith waitlist] ${email}`);
      return NextResponse.json({ message: "You’re on the local development list." });
    }

    return NextResponse.json(
      { message: "Waitlist registration isn’t configured yet. Please check back shortly." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: "rolesmith-product-page" }),
      cache: "no-store",
    });

    if (!response.ok) throw new Error("Webhook rejected request");
  } catch {
    return NextResponse.json(
      { message: "We couldn’t register you just now. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "You’re on the list. We’ll be in touch." });
}
