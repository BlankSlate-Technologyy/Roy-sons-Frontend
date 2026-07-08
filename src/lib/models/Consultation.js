import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [2, "Full name must be at least 2 characters"],
      maxlength: [100, "Full name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      lowercase: true,
      index: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    company: {
      type: String,
      trim: true,
      default: "",
    },
    division: {
      type: String,
      required: [true, "Division of interest is required"],
      trim: true,
    },
    requirements: {
      type: String,
      required: [true, "Requirements details are required"],
      trim: true,
      minlength: [10, "Requirements description must be at least 10 characters long"],
      maxlength: [3000, "Requirements description cannot exceed 3000 characters"],
    },
    status: {
      type: String,
      enum: ["pending", "reviewed", "contacted", "closed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Consultation || mongoose.model("Consultation", consultationSchema);
