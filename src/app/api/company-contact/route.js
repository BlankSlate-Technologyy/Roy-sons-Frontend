import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import CompanyContact from "@/lib/models/CompanyContact";

export async function POST(req) {
  try {
    const body = await req.json();
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

    const applicantName = (fullName || name || "").trim();
    const cleanEmail = (email || "").trim().toLowerCase();
    const cleanMessage = (message || "").trim();

    if (!applicantName || !cleanEmail || !cleanMessage) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields (Name, Email, and Message/Scope).",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const slug = (companySlug || "general").trim();
    const cName = (companyName || slug).trim();
    const cleanSubject = (subject || `Inquiry for ${cName}`).trim();

    const db = await connectDB();
    let record = null;
    if (db) {
      record = await CompanyContact.create({
        companySlug: slug,
        companyName: cName,
        fullName: applicantName,
        email: cleanEmail,
        phone: (phone || "").trim(),
        subject: cleanSubject,
        message: cleanMessage,
        additionalFields: {
          ...(additionalFields || {}),
          ...rest,
        },
      });
    }

    console.log(`[API /company-contact] Inquiry for [${cName}] from ${cleanEmail} (${applicantName})`);

    return NextResponse.json(
      {
        success: true,
        message: `Thank you! Your request for ${cName} has been submitted successfully. Our team will review your specifications and contact you within 24 hours.`,
        data: record,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API /company-contact] Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to submit inquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}
