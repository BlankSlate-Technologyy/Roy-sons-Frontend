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
  return NextResponse.json(
    {
      success: true,
      service: "National Mines Corporation Commercial Inquiry API",
      status: "operational",
    },
    { status: 200 }
  );
}

export async function POST(req) {
  try {
    const rate = checkRateLimit(req, "national-mines-contact", { limit: 15, windowMs: 10 * 60 * 1000 });
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
      name,
      fullName,
      email,
      phone,
      company,
      service,
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
        { success: false, message: "Name, email, and message are required." },
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

    const cleanSubject = sanitizeText(service || subject || "National Mines Commercial Inquiry", 200);
    const safeAdditionalFields = sanitizeAdditionalFields({
      ...(company ? { company } : {}),
      ...(additionalFields && typeof additionalFields === "object" ? additionalFields : {}),
      ...rest,
    });

    const configured = isDatabaseConfigured();
    const db = await connectDB();
    if (configured && !db) {
      return NextResponse.json(
        {
          success: false,
          message: "Database temporarily unavailable. Please try again shortly or call our Lahore desk.",
        },
        { status: 503 }
      );
    }

    let contactDoc = null;
    if (db) {
      contactDoc = await CompanyContact.create({
        companySlug: "national-mines",
        companyName: "National Mines Corporation",
        fullName: applicantName,
        email: cleanEmail,
        phone: cleanPhone,
        subject: cleanSubject,
        message: cleanMessage,
        additionalFields: safeAdditionalFields,
      });
    }

    return NextResponse.json(
      {
        success: true,
        persisted: Boolean(contactDoc),
        message:
          "Your mineral commodity quotation request has been registered. Our Chief Commercial Officer will respond with grade assays within 24 hours.",
        data: contactDoc,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("National Mines Contact API Error:", error);
    const formatted = formatApiError(error, "Failed to process message. Please try again.");
    return NextResponse.json(
      { success: false, message: formatted.message },
      { status: formatted.status }
    );
  }
}
