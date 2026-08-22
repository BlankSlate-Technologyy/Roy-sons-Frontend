import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import ServiceQuery from "@/lib/models/ServiceQuery";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, phone, company, service, subject, message } = body;

    if (!fullName || !email || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide full name, email, service selection, and message.",
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

    const db = await connectDB();
    let record = null;
    if (db) {
      record = await ServiceQuery.create({
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: (phone || "").trim(),
        company: (company || "").trim(),
        service: service.trim(),
        subject: (subject || `Inquiry for ${service}`).trim(),
        message: message.trim(),
      });
    }

    console.log(`[API /service-query] Inquiry for ${service} from ${email}`);

    return NextResponse.json(
      {
        success: true,
        message: `Your inquiry regarding ${service} has been successfully logged.`,
        data: record,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API /service-query] Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to process service query.",
      },
      { status: 500 }
    );
  }
}
