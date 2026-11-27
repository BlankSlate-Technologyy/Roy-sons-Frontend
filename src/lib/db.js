import mongoose from "mongoose";

const globalCache =
  globalThis.__roysonsMongooseCache ||
  (globalThis.__roysonsMongooseCache = { conn: null, promise: null });

export const isDatabaseConfigured = () => Boolean(process.env.MONGODB_URI?.trim());

/**
 * Connect to MongoDB with globalThis serverless connection/promise pooling.
 * Returns the mongoose connection, or null if unavailable.
 */
export const connectDB = async () => {
  if (globalCache.conn && mongoose.connection.readyState === 1) {
    return globalCache.conn;
  }

  const mongoURI = process.env.MONGODB_URI?.trim();
  if (!mongoURI) {
    console.warn(
      "Database Notice: MONGODB_URI is not configured in environment variables. Operating without persistent DB storage."
    );
    return null;
  }

  mongoose.set("strictQuery", true);

  if (!globalCache.promise) {
    const options = {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 30000,
      family: 4,
    };

    globalCache.promise = mongoose
      .connect(mongoURI, options)
      .then((mongooseInstance) => {
        console.log("Database: MongoDB connection established successfully");
        return mongooseInstance;
      })
      .catch((error) => {
        globalCache.promise = null;
        console.error(`Database Error: MongoDB connection failed (${error.message}).`);
        return null;
      });
  }

  globalCache.conn = await globalCache.promise;
  return globalCache.conn;
};

if (!globalThis.__roysonsMongooseListenersAttached) {
  globalThis.__roysonsMongooseListenersAttached = true;

  mongoose.connection.on("error", (err) => {
    console.warn("Database Event Warning:", err.message);
    globalCache.conn = null;
    globalCache.promise = null;
  });

  mongoose.connection.on("disconnected", () => {
    globalCache.conn = null;
    globalCache.promise = null;
  });
}
