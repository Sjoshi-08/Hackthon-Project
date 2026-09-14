const mongoose = require("mongoose");
const { usersConnection } = require("../db");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  phone: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  password: { type: String, required: true }, // stored as a bcrypt hash
  createdAt: { type: Date, default: Date.now },
});

module.exports = usersConnection.model("User", userSchema);
