const mongoose = require("mongoose");
const { businessConnection } = require("../db");

const businessSchema = new mongoose.Schema({
  businessName: { type: String, required: true, trim: true },
  ownerName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  phone: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  password: { type: String, required: true }, // stored as a bcrypt hash
  createdAt: { type: Date, default: Date.now },
});

module.exports = businessConnection.model("Business", businessSchema);
