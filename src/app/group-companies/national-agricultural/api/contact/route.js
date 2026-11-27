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
      service: "national-agricultural-contact",
      dbConfigured: configured,
      dbConnected: Boolean(db),
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}

export async function POST(req) {
  try {
    const rate = checkRateLimit(req, "national-agricultural-contact", {
      limit: 15,
      windowMs: 10 * 60 * 1000,
    });
    if (!rate.allowed) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Too many submissions from your connection. Please wait a few minutes before trying again.",
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

    const {
      name,
      fullName,
      email,
      phone,
      subject,
      message,
      additionalFields,
      ...rest
    } = body;

    const applicantName = sanitizeText(fullName || name, 120);
    const cleanEmail = sanitizeText(email, 254).toLowerCase();
    const cleanMessage = sanitizeText(message, 5000);

    if (!applicantName || applicantName.length < 2) {
      return NextResponse.json(
        { success: false, message: "Please enter your full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (!cleanEmail || !isValidEmail(cleanEmail)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!cleanMessage) {
      return NextResponse.json(
        { success: false, message: "Please enter your inquiry message or requirements." },
        { status: 400 }
      );
    }

    const cleanSubject = sanitizeText(subject || "Agricultural Inquiry", 200);
    const cleanPhone = sanitizeText(phone, 40);
    const cleanAdditional = sanitizeAdditionalFields({
      ...(additionalFields && typeof additionalFields === "object" ? additionalFields : {}),
      ...rest,
    });

    const configured = isDatabaseConfigured();
    const db = await connectDB();

    if (configured && !db) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Our database is temporarily unavailable. Please try again shortly or call our agronomy desk directly.",
        },
        { status: 503 }
      );
    }

    let contactDoc = null;
    if (db) {
      contactDoc = await CompanyContact.create({
        companySlug: "national-agricultural",
        companyName: "National Agricultural Corporation",
        fullName: applicantName,
        email: cleanEmail,
        phone: cleanPhone,
        subject: cleanSubject,
        message: cleanMessage,
        additionalFields: cleanAdditional,
      });
    }

    return NextResponse.json(
      {
        success: true,
        persisted: Boolean(contactDoc),
        message:
          "Your agribusiness inquiry has been received. Our Chief Agronomist will contact you within 24 hours.",
        data: contactDoc,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("National Agricultural Contact API Error:", error);
    const formatted = formatApiError(error, "Failed to process message. Please try again.");
    return NextResponse.json(
      { success: false, message: formatted.message },
      { status: formatted.status }
    );
  }
}
