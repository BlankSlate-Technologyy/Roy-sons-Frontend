// Shared API validation, sanitization, rate-limiting, and error formatting utilities

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const UNSAFE_KEYS = new Set(["__proto__", "constructor", "prototype"]);

/**
 * Safely parse a JSON request body. Returns { data } or { error }.
 */
export async function parseJsonBody(req) {
  try {
    const data = await req.json();
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return { error: "Invalid request body. Expected a JSON object." };
    }
    return { data };
  } catch {
    return { error: "Invalid JSON payload." };
  }
}

/**
 * Trim and cap a string field safely.
 */
export function sanitizeText(value, maxLength = 500) {
  if (value === null || value === undefined) return "";
  return String(value).trim().slice(0, maxLength);
}

/**
 * Validate email address using modern TLD-safe format.
 */
export function isValidEmail(email) {
  if (!email || typeof email !== "string") return false;
  const trimmed = email.trim();
  if (trimmed.length > 254) return false;
  return EMAIL_REGEX.test(trimmed);
}

/**
 * Recursively sanitize arbitrary metadata/additionalFields objects:
 * - Drops prototype-pollution keys and MongoDB operator keys (`$` or `.`).
 * - Limits total keys, nesting depth, array sizes, and string lengths.
 */
export function sanitizeAdditionalFields(input, depth = 0) {
  if (!input || typeof input !== "object" || depth > 3) return {};
  if (Array.isArray(input)) {
    return input
      .slice(0, 20)
      .map((item) =>
        typeof item === "object" && item !== null
          ? sanitizeAdditionalFields(item, depth + 1)
          : sanitizeText(item, 300)
      );
  }

  const clean = {};
  const entries = Object.entries(input).slice(0, 25);
  for (const [key, val] of entries) {
    const safeKey = String(key).trim();
    if (
      !safeKey ||
      safeKey.length > 64 ||
      UNSAFE_KEYS.has(safeKey) ||
      safeKey.startsWith("$") ||
      safeKey.includes(".")
    ) {
      continue;
    }

    if (val === null || val === undefined) {
      clean[safeKey] = "";
    } else if (typeof val === "boolean" || typeof val === "number") {
      clean[safeKey] = Number.isFinite(val) || typeof val === "boolean" ? val : "";
    } else if (typeof val === "string") {
      clean[safeKey] = val.trim().slice(0, 1000);
    } else if (Array.isArray(val)) {
      clean[safeKey] = sanitizeAdditionalFields(val, depth + 1);
    } else if (typeof val === "object") {
      clean[safeKey] = sanitizeAdditionalFields(val, depth + 1);
    }
  }
  return clean;
}

/**
 * Extract best-effort client IP from request headers.
 */
export function getClientIp(req) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return req.headers.get("x-real-ip") || "unknown";
}

/**
 * Lightweight sliding-window in-memory rate limiter per serverless instance.
 */
const rateLimitStore =
  globalThis.__roysonsRateLimitStore || (globalThis.__roysonsRateLimitStore = new Map());

export function checkRateLimit(req, namespace = "api", { limit = 15, windowMs = 10 * 60 * 1000 } = {}) {
  const ip = getClientIp(req);
  const key = `${namespace}:${ip}`;
  const now = Date.now();

  // Periodic cleanup to keep memory bounded
  if (rateLimitStore.size > 1000) {
    for (const [k, timestamps] of rateLimitStore.entries()) {
      const fresh = timestamps.filter((ts) => now - ts < windowMs);
      if (fresh.length === 0) rateLimitStore.delete(k);
      else rateLimitStore.set(k, fresh);
    }
  }

  const existing = (rateLimitStore.get(key) || []).filter((ts) => now - ts < windowMs);
  if (existing.length >= limit) {
    const oldest = existing[0];
    const retryAfterSeconds = Math.max(1, Math.ceil((oldest + windowMs - now) / 1000));
    return { allowed: false, retryAfterSeconds };
  }

  existing.push(now);
  rateLimitStore.set(key, existing);
  return { allowed: true, retryAfterSeconds: 0 };
}

/**
 * Map Mongoose/runtime errors to clean HTTP status codes without leaking internals.
 */
export function formatApiError(error, fallbackMessage = "Failed to process your request. Please try again.") {
  if (error?.name === "ValidationError" && error.errors) {
    const firstErr = Object.values(error.errors)[0];
    return {
      status: 400,
      message: firstErr?.message || "Please check all required fields and try again.",
    };
  }
  if (error?.code === 11000) {
    return {
      status: 409,
      message: "This record already exists.",
    };
  }
  return {
    status: 500,
    message: fallbackMessage,
  };
}
