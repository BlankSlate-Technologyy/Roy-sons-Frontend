import { NextResponse } from "next/server";
import { connectDB, isDatabaseConfigured } from "@/lib/db";
import CompanyContact from "@/lib/models/CompanyContact";
import {
  checkRateLimit,
  formatApiError,
  isValidEmail,
  parseJsonBody,
  sanitizeAdditionalFields,
  sanitizeText,
} from "@/lib/api-utils";

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      endpoint: "/group-companies/swiss-farm/api/contact",
      company: "Swiss Farms Dairy & Livestock (Pvt) Ltd",
      databaseConfigured: isDatabaseConfigured(),
      status: "healthy",
    },
    { status: 200 }
  );
}

export async function POST(req) {
  try {
    const rate = checkRateLimit(req, "swiss-farm-contact", {
      limit: 15,
      windowMs: 10 * 60 * 1000,
    });
    if (!rate.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many inquiry requests. Please wait a few minutes and try again.",
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

    const { name, fullName, email, phone, subject, message, additionalFields, ...rest } = body;
    const applicantName = sanitizeText(fullName || name, 120);
    const cleanEmail = sanitizeText(email, 254).toLowerCase();
    const cleanPhone = sanitizeText(phone, 40);
    const cleanSubject = sanitizeText(subject, 200) || "Dairy & Livestock Procurement Inquiry";
    const cleanMessage = sanitizeText(message, 4000);

    if (!applicantName || !cleanEmail || !cleanMessage) {
      return NextResponse.json(
        { success: false, message: "Full name, email address, and inquiry details are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(cleanEmail)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const mergedMeta =
      additionalFields && typeof additionalFields === "object"
        ? { ...rest, ...additionalFields }
        : rest;
    const cleanAdditionalFields = sanitizeAdditionalFields(mergedMeta);

    const db = await connectDB();
    if (!db && isDatabaseConfigured()) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Database service is temporarily unavailable. Please try again shortly or call our dairy desk.",
        },
        { status: 503 }
      );
    }

    if (db) {
      const contactDoc = await CompanyContact.create({
        companySlug: "swiss-farm",
        companyName: "Swiss Farms Dairy & Livestock",
        fullName: applicantName,
        email: cleanEmail,
        phone: cleanPhone,
        subject: cleanSubject,
        message: cleanMessage,
        additionalFields: cleanAdditionalFields,
      });

      return NextResponse.json(
        {
          success: true,
          persisted: true,
          message:
            "Your dairy procurement inquiry has been registered. Our Commercial Operations Director will contact you within 24 hours.",
          data: {
            id: contactDoc._id,
            companySlug: contactDoc.companySlug,
            submittedAt: contactDoc.submittedAt,
          },
        },
        { status: 201 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        persisted: false,
        message:
          "Your dairy procurement inquiry has been received. Our Commercial Operations Director will contact you within 24 hours.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Swiss Farm Contact API Error:", error);
    const { status, message } = formatApiError(
      error,
      "Failed to submit dairy procurement inquiry. Please try again."
    );
    return NextResponse.json({ success: false, message }, { status });
  }
}
