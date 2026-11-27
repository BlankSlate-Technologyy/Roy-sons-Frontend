import { NextResponse } from "next/server";
import { connectDB, isDatabaseConfigured } from "@/lib/db";
import CompanyContact from "@/lib/models/CompanyContact";
import {
  parseJsonBody,
  sanitizeText,
  isValidEmail,
  checkRateLimit,
  formatApiError,
} from "@/lib/api-utils";

export async function POST(req) {
  try {
    const rate = checkRateLimit(req, "careers-apply", { limit: 15, windowMs: 10 * 60 * 1000 });
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

    const fullName = sanitizeText(body.fullName, 120);
    const email = sanitizeText(body.email, 254).toLowerCase();
    const phone = sanitizeText(body.phone, 40);
    const position = sanitizeText(body.position, 150);
    const experience = sanitizeText(body.experience, 100);
    const linkedin = sanitizeText(body.linkedin, 300);
    const coverNote = sanitizeText(body.coverNote, 4000);

    if (!fullName || !email || !position) {
      return NextResponse.json(
        { success: false, message: "Please provide full name, email, and position applied for." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
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
      record = await CompanyContact.create({
        companySlug: "roysons-careers",
        companyName: "Roysons Group Human Resources",
        fullName,
        email,
        phone,
        subject: `Job Application: ${position}`,
        message: coverNote || `Application for ${position} (${experience || "N/A"} experience)`,
        additionalFields: {
          position,
          experience,
          linkedin,
        },
      });
    }

    console.log(`[API /careers-apply] Application for ${position} from ${email}`);

    return NextResponse.json(
      {
        success: true,
        persisted: Boolean(record),
        message:
          "Your application has been received. Our HR team will review your profile and contact qualified candidates.",
        data: record,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API /careers-apply] Error:", error);
    const formatted = formatApiError(error, "Failed to submit job application.");
    return NextResponse.json(
      { success: false, message: formatted.message },
      { status: formatted.status }
    );
  }
}
