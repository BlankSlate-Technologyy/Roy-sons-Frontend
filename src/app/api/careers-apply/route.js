import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import CompanyContact from "@/lib/models/CompanyContact";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, phone, position, experience, linkedin, coverNote } = body;

    if (!fullName || !email || !position) {
      return NextResponse.json(
        { success: false, message: "Please provide full name, email, and position applied for." },
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
      record = await CompanyContact.create({
        companySlug: "roysons-careers",
        companyName: "Roysons Group Human Resources",
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: (phone || "").trim(),
        subject: `Job Application: ${position}`,
        message: (coverNote || `Application for ${position} (${experience || "N/A"} experience)`).trim(),
        additionalFields: {
          position,
          experience: experience || "",
          linkedin: linkedin || "",
        },
      });
    }

    console.log(`[API /careers-apply] Application for ${position} from ${email}`);

    return NextResponse.json(
      {
        success: true,
        message: "Your application has been received. Our HR team will review your profile and contact qualified candidates.",
        data: record,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API /careers-apply] Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to submit job application." },
      { status: 500 }
    );
  }
}
