import mongoose from "mongoose";

const companyContactSchema = new mongoose.Schema(
  {
    companySlug: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    companyName: {
      type: String,
      trim: true,
      default: "",
    },
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },
    subject: {
      type: String,
      trim: true,
      default: "Inquiry",
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
    additionalFields: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.CompanyContact || mongoose.model("CompanyContact", companyContactSchema);
