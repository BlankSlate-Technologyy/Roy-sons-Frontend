import { NextResponse } from "next/server";
import { connectDB, isDatabaseConfigured } from "@/lib/db";
import CompanyContact from "@/lib/models/CompanyContact";
import {
  parseJsonBody,
  sanitizeText,
  isValidEmail,
  sanitizeAdditionalFields,
  checkRateLimit,
  formatApiError,
} from "@/lib/api-utils";

export async function POST(req) {
  try {
    const rate = checkRateLimit(req, "company-contact", { limit: 15, windowMs: 10 * 60 * 1000 });
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

    const {
      companySlug,
      companyName,
      fullName,
      name,
      email,
      phone,
      subject,
      message,
      additionalFields,
      ...rest
    } = body;

    const applicantName = sanitizeText(fullName || name, 120);
    const cleanEmail = sanitizeText(email, 254).toLowerCase();
    const cleanPhone = sanitizeText(phone, 40);
    const cleanMessage = sanitizeText(message, 5000);

    if (!applicantName || !cleanEmail || !cleanMessage) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields (Name, Email, and Message/Scope).",
        },
        { status: 400 }
      );
    }

    if (applicantName.length < 2) {
      return NextResponse.json(
        { success: false, message: "Full name must be at least 2 characters long." },
        { status: 400 }
      );
    }

    if (!isValidEmail(cleanEmail)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const slug = sanitizeText(companySlug || "general", 80);
    const cName = sanitizeText(companyName || slug, 150);
    const cleanSubject = sanitizeText(subject || `Inquiry for ${cName}`, 200);
    const safeAdditionalFields = sanitizeAdditionalFields({
      ...(additionalFields && typeof additionalFields === "object" ? additionalFields : {}),
      ...rest,
    });

    const configured = isDatabaseConfigured();
    const db = await connectDB();
    if (configured && !db) {
      return NextResponse.json(
        {
          success: false,
          message: "Database temporarily unavailable. Please try again shortly or call our commercial desk.",
        },
        { status: 503 }
      );
    }

    let record = null;
    if (db) {
      record = await CompanyContact.create({
        companySlug: slug,
        companyName: cName,
        fullName: applicantName,
        email: cleanEmail,
        phone: cleanPhone,
        subject: cleanSubject,
        message: cleanMessage,
        additionalFields: safeAdditionalFields,
      });
    }

    console.log(`[API /company-contact] Inquiry for [${cName}] from ${cleanEmail} (${applicantName})`);

    return NextResponse.json(
      {
        success: true,
        persisted: Boolean(record),
        message: `Thank you! Your request for ${cName} has been submitted successfully. Our team will review your specifications and contact you within 24 hours.`,
        data: record,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API /company-contact] Error:", error);
    const formatted = formatApiError(error, "Failed to submit inquiry. Please try again.");
    return NextResponse.json(
      { success: false, message: formatted.message },
      { status: formatted.status }
    );
  }
}
