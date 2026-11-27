import { NextResponse } from "next/server";
import { connectDB, isDatabaseConfigured } from "@/lib/db";
import Contact from "@/lib/models/Contact";
import {
  parseJsonBody,
  sanitizeText,
  isValidEmail,
  checkRateLimit,
  formatApiError,
} from "@/lib/api-utils";

export async function POST(req) {
  try {
    const rate = checkRateLimit(req, "contact", { limit: 15, windowMs: 10 * 60 * 1000 });
    if (!rate.allowed) {
      return NextResponse.json(
        { success: false, message: "Too many submissions. Please try again in a few minutes." },
        { status: 429, headers: { "Retry-After": String(rate.retryAfterSeconds) } }
      );
    }

    const { data: body, error: parseError } = await parseJsonBody(req);
    if (parseError) {
      return NextResponse.json({ success: false, message: parseError }, { status: 400 });
    }

    const fullName = sanitizeText(body.fullName, 100);
    const email = sanitizeText(body.email, 254).toLowerCase();
    const phone = sanitizeText(body.phone, 40);
    const subject = sanitizeText(body.subject, 60);
    const company = sanitizeText(body.company, 150);
    const message = sanitizeText(body.message, 2000);

    if (!fullName || !email || !phone || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide full name, email, phone, subject, and message.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { success: false, message: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    const configured = isDatabaseConfigured();
    const db = await connectDB();
    if (configured && !db) {
      return NextResponse.json(
        { success: false, message: "Database temporarily unavailable. Please try again shortly." },
        { status: 503 }
      );
    }

    let record = null;
    if (db) {
      record = await Contact.create({ fullName, email, phone, subject, company, message });
    }

    console.log(`[API /contact] Inbound inquiry from ${email} (${fullName})`);

    return NextResponse.json(
      {
        success: true,
        persisted: Boolean(record),
        message: "Thank you! Your message has been received. Our team will contact you shortly.",
        data: record,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API /contact] Error:", error);
    const formatted = formatApiError(error, "Failed to process contact inquiry. Please try again.");
    return NextResponse.json(
      { success: false, message: formatted.message },
      { status: formatted.status }
    );
  }
}
