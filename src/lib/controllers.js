import { Router } from "express";
import { asyncHandler, validateRequiredFields, validateEmailFormat } from "./middleware.js";

// Models
import Contact from "./models/Contact.js";
import Consultation from "./models/Consultation.js";
import ServiceQuery from "./models/ServiceQuery.js";
import ProjectQuery from "./models/ProjectQuery.js";
import Newsletter from "./models/Newsletter.js";

const apiRouter = Router();

// Health Check
apiRouter.get("/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Server is healthy",
    uptime: process.uptime(),
    timestamp: new Date(),
  });
});

// Contact Us Form Submission
apiRouter.post(
  "/contact",
  asyncHandler(async (req, res) => {
    const { fullName, email, phone, subject, company, message } = req.body;

    validateRequiredFields(req.body, ["fullName", "email", "phone", "subject", "message"]);
    validateEmailFormat(email);

    const contact = await Contact.create({
      fullName,
      email,
      phone,
      subject,
      company: company || "",
      message,
    });

    console.log(`Contact Form: Saved submission from ${email}`);

    res.status(201).json({
      status: "success",
      message: "Your message has been received. Our team will contact you shortly.",
      data: contact,
    });
  })
);

// Strategic consultation request
apiRouter.post(
  "/consultation",
  asyncHandler(async (req, res) => {
    const { fullName, email, company, division, requirements } = req.body;

    validateRequiredFields(req.body, ["fullName", "email", "division", "requirements"]);
    validateEmailFormat(email);

    const consultation = await Consultation.create({
      fullName,
      email,
      company: company || "",
      division,
      requirements,
    });

    console.log(`Consultation Form: Request received from ${email} (Division: ${division})`);

    res.status(201).json({
      status: "success",
      message: "Consultation request successfully submitted.",
      data: consultation,
    });
  })
);

// Service inquiry
apiRouter.post(
  "/service-query",
  asyncHandler(async (req, res) => {
    const { fullName, email, phone, company, service, subject, message } = req.body;

    validateRequiredFields(req.body, ["fullName", "email", "service", "subject", "message"]);
    validateEmailFormat(email);

    const serviceQuery = await ServiceQuery.create({
      fullName,
      email,
      phone: phone || "",
      company: company || "",
      service,
      subject,
      message,
    });

    console.log(`Service Query Form: Saved request from ${email} (Service: ${service})`);

    res.status(201).json({
      status: "success",
      message: "Query successfully registered.",
      data: serviceQuery,
    });
  })
);

// Projects sidebar inquiry
apiRouter.post(
  "/project-query",
  asyncHandler(async (req, res) => {
    const { fullName, email, phone, subject, message } = req.body;

    validateRequiredFields(req.body, ["fullName", "email", "subject", "message"]);
    validateEmailFormat(email);

    const projectQuery = await ProjectQuery.create({
      fullName,
      email,
      phone: phone || "",
      subject,
      message,
    });

    console.log(`Project Sidebar Form: Saved inquiry from ${email}`);

    res.status(201).json({
      status: "success",
      message: "General query successfully registered.",
      data: projectQuery,
    });
  })
);

// Newsletter footer subscription
apiRouter.post(
  "/newsletter",
  asyncHandler(async (req, res) => {
    const { email } = req.body;

    validateRequiredFields(req.body, ["email"]);
    validateEmailFormat(email);

    const emailInput = email.toLowerCase();

    try {
      const subscriber = await Newsletter.findOne({ email: emailInput });

      if (subscriber) {
        if (!subscriber.active) {
          subscriber.active = true;
          await subscriber.save();
          
          return res.status(200).json({
            status: "success",
            message: "Welcome back! Your subscription has been reactivated.",
          });
        }

        return res.status(200).json({
          status: "success",
          message: "You are already subscribed to our newsletter.",
        });
      }

      const newSubscriber = await Newsletter.create({ email: emailInput });
      console.log(`Newsletter: Registered subscriber ${emailInput}`);

      res.status(201).json({
        status: "success",
        message: "Thank you for subscribing to our newsletter!",
        data: newSubscriber,
      });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(200).json({
          status: "success",
          message: "You are already subscribed to our newsletter.",
        });
      }
      throw error;
    }
  })
);

export default apiRouter;
