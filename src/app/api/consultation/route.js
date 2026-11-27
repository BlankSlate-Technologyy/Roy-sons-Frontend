import { NextResponse } from "next/server";
import { connectDB, isDatabaseConfigured } from "@/lib/db";
import Consultation from "@/lib/models/Consultation";
import {
  parseJsonBody,
  sanitizeText,
  isValidEmail,
  checkRateLimit,
  formatApiError,
} from "@/lib/api-utils";

export async function POST(req) {
  try {
    const rate = checkRateLimit(req, "consultation", { limit: 15, windowMs: 10 * 60 * 1000 });
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
    const company = sanitizeText(body.company, 150);
    const division = sanitizeText(body.division, 150);
    const requirements = sanitizeText(body.requirements, 3000);

    if (!fullName || !email || !division || !requirements) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields (Name, Email, Division, Requirements).",
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

    if (requirements.length < 10) {
      return NextResponse.json(
        { success: false, message: "Requirements description must be at least 10 characters long." },
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
      record = await Consultation.create({ fullName, email, company, division, requirements });
    }

    console.log(`[API /consultation] Consultation request from ${email} for division: ${division}`);

    return NextResponse.json(
      {
        success: true,
        persisted: Boolean(record),
        message: "Your consultation request has been registered. An industry specialist will reach out to you within 24 hours.",
        data: record,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API /consultation] Error:", error);
    const formatted = formatApiError(error, "Failed to submit consultation request.");
    return NextResponse.json(
      { success: false, message: formatted.message },
      { status: formatted.status }
    );
  }
}
