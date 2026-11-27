import { NextResponse } from "next/server";
import { connectDB, isDatabaseConfigured } from "@/lib/db";
import ProjectQuery from "@/lib/models/ProjectQuery";
import {
  parseJsonBody,
  sanitizeText,
  isValidEmail,
  checkRateLimit,
  formatApiError,
} from "@/lib/api-utils";

export async function POST(req) {
  try {
    const rate = checkRateLimit(req, "project-query", { limit: 15, windowMs: 10 * 60 * 1000 });
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
    const subject = sanitizeText(body.subject || "General Project Query", 200);
    const message = sanitizeText(body.message, 2000);

    if (!fullName || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide full name, email, and project message.",
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
      record = await ProjectQuery.create({ fullName, email, phone, subject, message });
    }

    console.log(`[API /project-query] Project query from ${email}`);

    return NextResponse.json(
      {
        success: true,
        persisted: Boolean(record),
        message: "Your project inquiry has been received. Our project desk will get back to you shortly.",
        data: record,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API /project-query] Error:", error);
    const formatted = formatApiError(error, "Failed to submit project inquiry.");
    return NextResponse.json(
      { success: false, message: formatted.message },
      { status: formatted.status }
    );
  }
}
