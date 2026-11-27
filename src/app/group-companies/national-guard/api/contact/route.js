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

export async function GET() {
  const configured = isDatabaseConfigured();
  const db = configured ? await connectDB() : null;
  return NextResponse.json(
    {
      success: true,
      service: "national-guard-contact",
      dbConfigured: configured,
      dbConnected: Boolean(db),
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}

export async function POST(req) {
  try {
    const rate = checkRateLimit(req, "national-guard-contact", { limit: 15, windowMs: 10 * 60 * 1000 });
    if (!rate.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please wait a few minutes or call our 24/7 security control room.",
        },
        {
          status: 429,
          headers: { "Retry-After": String(rate.retryAfterSeconds) },
        }
      );
    }

    const { data: body, error: parseError } = await parseJsonBody(req);
    if (parseError) {
      return NextResponse.json({ success: false, message: parseError }, { status: 400 });
    }

    const { name, fullName, email, phone, service, subject, message, additionalFields, ...rest } = body;
    const applicantName = sanitizeText(fullName || name, 120);
    const cleanEmail = sanitizeText(email, 254).toLowerCase();
    const cleanMessage = sanitizeText(message, 5000);

    if (!applicantName || applicantName.length < 2 || !cleanEmail || !cleanMessage) {
      return NextResponse.json(
        { success: false, message: "Full name, valid email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(cleanEmail)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const configured = isDatabaseConfigured();
    const db = await connectDB();
    if (configured && !db) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Our security desk database is temporarily unavailable. Please try again shortly or call +92 321 8431665.",
        },
        { status: 503 }
      );
    }

    let contactDoc = null;
    if (db) {
      contactDoc = await CompanyContact.create({
        companySlug: "national-guard",
        companyName: "National Guard Security Services",
        fullName: applicantName,
        email: cleanEmail,
        phone: sanitizeText(phone, 40),
        subject: sanitizeText(service || subject || "Security Inquiry", 200),
        message: cleanMessage,
        additionalFields: sanitizeAdditionalFields({
          ...(additionalFields && typeof additionalFields === "object" ? additionalFields : {}),
          ...rest,
        }),
      });
    }

    return NextResponse.json(
      {
        success: true,
        persisted: Boolean(contactDoc),
        message:
          "Your security inquiry has been received successfully. Our operations officer will reach out shortly.",
        data: contactDoc,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("National Guard Contact API Error:", error);
    const formatted = formatApiError(error, "Failed to process message. Please try again.");
    return NextResponse.json(
      { success: false, message: formatted.message },
      { status: formatted.status }
    );
  }
}
