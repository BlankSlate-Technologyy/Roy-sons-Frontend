import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import { requestLogger, configureCors } from "./middleware.js";
import { AppError, errorHandler } from "./errors.js";
import apiRouter from "./controllers.js";

// Load Environment Variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware Configuration
app.use(configureCors());
app.use(express.json());
app.use(requestLogger);

// Mount API Routes
app.use("/api", apiRouter);

// Fallback Route Handler
app.use((req, res, next) => {
  next(new AppError(`Cannot find endpoint ${req.originalUrl} on this server.`, 404));
});

// Error Handling Middleware
app.use(errorHandler);

// Establish Environment & Start server
const bootstrap = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server: Running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Bootstrap Error: Stopped server launch: ${error.message}`);
    process.exit(1);
  }
};

bootstrap();
