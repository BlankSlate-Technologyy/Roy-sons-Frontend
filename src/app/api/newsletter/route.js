import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Newsletter from "@/lib/models/Newsletter";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Please provide an email address." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid corporate or personal email address." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const db = await connectDB();

    if (db) {
      try {
        const existing = await Newsletter.findOne({ email: cleanEmail });
        if (existing) {
          if (!existing.active) {
            existing.active = true;
            await existing.save();
            return NextResponse.json({
              success: true,
              message: "Welcome back! Your newsletter subscription has been reactivated.",
            });
          }
          return NextResponse.json({
            success: true,
            message: "You are already subscribed to the Roysons Group newsletter.",
          });
        }

        await Newsletter.create({ email: cleanEmail });
      } catch (dbErr) {
        if (dbErr.code === 11000) {
          return NextResponse.json({
            success: true,
            message: "You are already subscribed to our newsletter.",
          });
        }
        console.warn("[API /newsletter] DB Warn:", dbErr.message);
      }
    }

    console.log(`[API /newsletter] Subscription registered for: ${cleanEmail}`);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for subscribing! You will receive our latest corporate reports and updates.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API /newsletter] Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process newsletter subscription." },
      { status: 500 }
    );
  }
}
