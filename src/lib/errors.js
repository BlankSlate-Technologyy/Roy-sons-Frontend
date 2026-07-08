export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || "error";

  console.error(`[Error] ${err.message}`, err.stack);

  res.status(statusCode).json({
    status,
    message: err.message || "Internal server error occurred",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
