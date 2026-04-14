import Contact from "../models/Contact.js";
import sendMail from "../utils/sendEmail.js";

export const submitContact = async (req, res) => {
  try {
    console.log("CONTACT REQUEST BODY:", req.body);

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields required" });
    }

    // Save to DB
    const savedContact = await Contact.create({ name, email, message });
    console.log("CONTACT SAVED:", savedContact._id);

    // Send email
    await sendMail(name, email, message);
    console.log("EMAIL SENT SUCCESSFULLY");

    res.status(201).json({ message: "Message sent successfully" });

  } catch (error) {
    console.error("CONTACT CONTROLLER ERROR:", error);

    res.status(500).json({
      message: error.message || "Server error",
    });
  }
};
