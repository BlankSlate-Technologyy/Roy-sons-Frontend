import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import ProjectQuery from "@/lib/models/ProjectQuery";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, phone, subject, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide full name, email, and project message.",
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
      record = await ProjectQuery.create({
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: (phone || "").trim(),
        subject: (subject || "General Project Query").trim(),
        message: message.trim(),
      });
    }

    console.log(`[API /project-query] Project query from ${email}`);

    return NextResponse.json(
      {
        success: true,
        message: "Your project inquiry has been received. Our project desk will get back to you shortly.",
        data: record,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API /project-query] Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to submit project inquiry.",
      },
      { status: 500 }
    );
  }
}
