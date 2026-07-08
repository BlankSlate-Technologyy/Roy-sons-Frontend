import cors from "cors";
import { AppError } from "./errors.js";

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - IP: ${req.ip}`);
  next();
};

export const configureCors = () => {
  const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002",
    process.env.FRONTEND_URL,
  ].filter(Boolean);

  return cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(new AppError("The CORS policy for this site does not allow access from the specified Origin.", 403), false);
      }
      return callback(null, true);
    },
    credentials: true,
  });
};

export const validateRequiredFields = (body, requiredFields) => {
  for (const field of requiredFields) {
    const val = body[field];
    if (val === undefined || val === null || (typeof val === "string" && !val.trim())) {
      throw new AppError(`Field '${field}' is required and cannot be empty.`, 400);
    }
  }
};

export const validateEmailFormat = (email) => {
  if (!email || !emailRegex.test(email)) {
    throw new AppError("Invalid email address format.", 400);
  }
};
