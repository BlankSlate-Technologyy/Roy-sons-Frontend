import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import CompanyContact from "@/lib/models/CompanyContact";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, fullName, email, phone, subject, message, ...rest } = body;
    const applicantName = fullName || name;
    if (!applicantName || !email || !message) {
      return NextResponse.json({ success: false, message: "Name, email, and message are required." }, { status: 400 });
    }
    const contactDoc = await CompanyContact.create({
      companySlug: "max-wood",
      companyName: "Max Wood",
      fullName: applicantName,
      email,
      phone: phone || "",
      subject: subject || "Wood Products Inquiry",
      message,
      additionalFields: rest,
    });
    return NextResponse.json({ success: true, message: "Message received successfully.", data: contactDoc }, { status: 201 });
  } catch (error) {
    console.error("Max Wood Contact API Error:", error);
    return NextResponse.json({ success: false, message: error.message || "Failed to process message." }, { status: 500 });
  }
}
