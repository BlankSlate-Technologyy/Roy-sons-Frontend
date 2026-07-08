import mongoose from "mongoose";

let isConnected = false;
let dbConnection = null;

export const connectDB = async () => {
  if (isConnected && dbConnection) {
    console.log("Database: Reusing existing Mongoose connection");
    return dbConnection;
  }

  const mongoURI = process.env.MONGODB_URI;
  if (!mongoURI) {
    console.error("Database Error: MONGODB_URI is not defined in environment variables");
    throw new Error("MONGODB_URI is not defined");
  }

  mongoose.set("strictQuery", true);

  const options = {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4,
  };

  try {
    console.log("Database: Connecting to MongoDB...");
    dbConnection = await mongoose.connect(mongoURI, options);
    isConnected = dbConnection.connections[0].readyState === 1;
    console.log("Database: Connection established successfully");
    return dbConnection;
  } catch (error) {
    console.error(`Database Connection Failed: ${error.message}`);
    throw error;
  }
};

mongoose.connection.on("connected", () => {
  isConnected = true;
  console.log("Database Status: Connected");
});

mongoose.connection.on("error", (err) => {
  console.error("Database Event Error:", err);
});

mongoose.connection.on("disconnected", () => {
  isConnected = false;
  console.log("Database Status: Disconnected");
});

const shutdown = async (signal) => {
  if (mongoose.connection.readyState === 0) {
    process.exit(0);
  }

  try {
    await mongoose.connection.close();
    console.log(`Database: Closed connection path due to process termination (${signal})`);
    process.exit(0);
  } catch (err) {
    console.error("Database: Error closing connection:", err);
    process.exit(1);
  }
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
