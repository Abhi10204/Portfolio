import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/*  DB CONNECTION  */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

/*  ROUTES  */
app.use("/api/contact", contactRoutes);

/* Health check */
app.get("/", (req, res) => {
  res.json({ status: "API running" });
});

/*  SERVER  */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
