import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Contact from "@/lib/models/Contact";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, phone, subject, company, message } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide full name, email, phone, subject, and message.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Attempt DB save if connection available
    const db = await connectDB();
    let record = null;
    if (db) {
      record = await Contact.create({
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        subject: subject.trim(),
        company: (company || "").trim(),
        message: message.trim(),
      });
    }

    console.log(`[API /contact] Inbound inquiry from ${email} (${fullName})`);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received. Our team will contact you shortly.",
        data: record,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API /contact] Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to process contact inquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}
