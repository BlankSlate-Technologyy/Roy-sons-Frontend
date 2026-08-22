import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Consultation from "@/lib/models/Consultation";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, company, division, requirements } = body;

    if (!fullName || !email || !division || !requirements) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields (Name, Email, Division, Requirements).",
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
      record = await Consultation.create({
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        company: (company || "").trim(),
        division: division.trim(),
        requirements: requirements.trim(),
      });
    }

    console.log(`[API /consultation] Consultation request from ${email} for division: ${division}`);

    return NextResponse.json(
      {
        success: true,
        message: "Your consultation request has been registered. An industry specialist will reach out to you within 24 hours.",
        data: record,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API /consultation] Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to submit consultation request.",
      },
      { status: 500 }
    );
  }
}
