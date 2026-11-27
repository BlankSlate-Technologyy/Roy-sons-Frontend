import mongoose from "mongoose";

const companyContactSchema = new mongoose.Schema(
  {
    companySlug: {
      type: String,
      required: true,
      index: true,
      trim: true,
      maxlength: [80, "Company slug is too long"],
    },
    companyName: {
      type: String,
      trim: true,
      default: "",
      maxlength: [150, "Company name is too long"],
    },
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [2, "Full name must be at least 2 characters"],
      maxlength: [120, "Full name cannot exceed 120 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      index: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        "Please provide a valid email address",
      ],
    },
    phone: {
      type: String,
      trim: true,
      default: "",
      maxlength: [40, "Phone number is too long"],
    },
    subject: {
      type: String,
      trim: true,
      default: "Inquiry",
      maxlength: [200, "Subject cannot exceed 200 characters"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: [5000, "Message cannot exceed 5000 characters"],
    },
    additionalFields: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
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

export default mongoose.models.CompanyContact ||
  mongoose.model("CompanyContact", companyContactSchema);
