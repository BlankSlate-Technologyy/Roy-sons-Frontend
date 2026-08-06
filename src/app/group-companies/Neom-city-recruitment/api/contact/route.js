import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import CompanyContact from "@/lib/models/CompanyContact";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, fullName, email, phone, service, subject, message, ...rest } = body;

    const applicantName = fullName || name;
    if (!applicantName || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const contactDoc = await CompanyContact.create({
      companySlug: "Neom-city-recruitment",
      companyName: "Neom City Recruitment Consultants",
      fullName: applicantName,
      email,
      phone: phone || "",
      subject: service || subject || "Recruitment Inquiry",
      message,
      additionalFields: rest,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your recruitment inquiry has been received successfully.",
        data: contactDoc,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Neom City Recruitment Contact API Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to process message." },
      { status: 500 }
    );
  }
}
