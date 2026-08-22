import mongoose from "mongoose";

let isConnected = false;
let dbConnection = null;

/**
 * Connect to MongoDB with connection pooling and graceful error handling.
 * Returns the mongoose connection or null if database is unavailable.
 */
export const connectDB = async () => {
  if (isConnected && dbConnection && mongoose.connection.readyState === 1) {
    return dbConnection;
  }

  const mongoURI = process.env.MONGODB_URI;
  if (!mongoURI) {
    console.warn("Database Notice: MONGODB_URI is not configured in environment variables. Operating in resilient logging mode.");
    return null;
  }

  mongoose.set("strictQuery", true);

  const options = {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 4000,
    socketTimeoutMS: 30000,
    family: 4,
  };

  try {
    dbConnection = await mongoose.connect(mongoURI, options);
    isConnected = dbConnection.connections[0].readyState === 1;
    console.log("Database: MongoDB connection established successfully");
    return dbConnection;
  } catch (error) {
    console.warn(`Database Notice: MongoDB connection failed (${error.message}). Operating in resilient fallback mode.`);
    isConnected = false;
    return null;
  }
};

mongoose.connection.on("connected", () => {
  isConnected = true;
});

mongoose.connection.on("error", (err) => {
  console.warn("Database Event Warning:", err.message);
  isConnected = false;
});

mongoose.connection.on("disconnected", () => {
  isConnected = false;
});
