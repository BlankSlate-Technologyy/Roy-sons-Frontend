import { NextResponse } from "next/server";
import { connectDB, isDatabaseConfigured } from "@/lib/db";
import Newsletter from "@/lib/models/Newsletter";
import {
  parseJsonBody,
  sanitizeText,
  isValidEmail,
  checkRateLimit,
  formatApiError,
} from "@/lib/api-utils";

export async function POST(req) {
  try {
    const rate = checkRateLimit(req, "newsletter", { limit: 15, windowMs: 10 * 60 * 1000 });
    if (!rate.allowed) {
      return NextResponse.json(
        { success: false, message: "Too many attempts. Please try again in a few minutes." },
        { status: 429, headers: { "Retry-After": String(rate.retryAfterSeconds) } }
      );
    }

    const { data: body, error: parseError } = await parseJsonBody(req);
    if (parseError) {
      return NextResponse.json({ success: false, message: parseError }, { status: 400 });
    }

    const cleanEmail = sanitizeText(body.email, 254).toLowerCase();
    if (!cleanEmail) {
      return NextResponse.json(
        { success: false, message: "Please provide an email address." },
        { status: 400 }
      );
    }

    if (!isValidEmail(cleanEmail)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid corporate or personal email address." },
        { status: 400 }
      );
    }

    const configured = isDatabaseConfigured();
    const db = await connectDB();
    if (configured && !db) {
      return NextResponse.json(
        { success: false, message: "Database temporarily unavailable. Please try again shortly." },
        { status: 503 }
      );
    }

    let persisted = false;
    if (db) {
      try {
        const existing = await Newsletter.findOne({ email: cleanEmail });
        if (existing) {
          if (!existing.active) {
            existing.active = true;
            await existing.save();
            return NextResponse.json({
              success: true,
              persisted: true,
              message: "Welcome back! Your newsletter subscription has been reactivated.",
            });
          }
          return NextResponse.json({
            success: true,
            persisted: true,
            message: "You are already subscribed to the Roysons Group newsletter.",
          });
        }

        await Newsletter.create({ email: cleanEmail });
        persisted = true;
      } catch (dbErr) {
        if (dbErr.code === 11000) {
          return NextResponse.json({
            success: true,
            persisted: true,
            message: "You are already subscribed to our newsletter.",
          });
        }
        throw dbErr;
      }
    }

    console.log(`[API /newsletter] Subscription registered for: ${cleanEmail}`);

    return NextResponse.json(
      {
        success: true,
        persisted,
        message: "Thank you for subscribing! You will receive our latest corporate reports and updates.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API /newsletter] Error:", error);
    const formatted = formatApiError(error, "Failed to process newsletter subscription.");
    return NextResponse.json(
      { success: false, message: formatted.message },
      { status: formatted.status }
    );
  }
}
