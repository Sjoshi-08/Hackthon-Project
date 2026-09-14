/* =========================================================
   SPOTLY BACKEND
   Two registration flows, saved into two separate
   MongoDB databases: spotly_users and spotly_business.
========================================================= */

const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");

require("./db"); // establishes both database connections

const User = require("./models/User");
const Business = require("./models/Business");

const app = express();

app.use(cors());
app.use(express.json());

/* ---------------------------------------------------------
   USERS
--------------------------------------------------------- */

app.post("/api/users/register", async (req, res) => {
  const { name, email, phone, city, password } = req.body;

  if (!name || !email || !phone || !city || !password) {
    return res.status(400).json({
      error: "Name, email, phone, city and password are all required.",
    });
  }

  try {
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ error: "An account with this email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, phone, city, password: hashedPassword });

    res.status(201).json({
      message: "User registered successfully!",
      user: { id: user._id, name: user.name, email: user.email, phone: user.phone, city: user.city },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({}, "-password").sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not fetch users." });
  }
});

/* ---------------------------------------------------------
   BUSINESSES
--------------------------------------------------------- */

app.post("/api/businesses/register", async (req, res) => {
  const { businessName, ownerName, email, phone, category, address, password } = req.body;

  if (!businessName || !ownerName || !email || !phone || !category || !address || !password) {
    return res.status(400).json({
      error: "All fields (business name, owner name, email, phone, category, address, password) are required.",
    });
  }

  try {
    const existing = await Business.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ error: "A business with this email is already registered." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const business = await Business.create({
      businessName, ownerName, email, phone, category, address, password: hashedPassword,
    });

    res.status(201).json({
      message: "Business registered successfully!",
      business: {
        id: business._id,
        businessName: business.businessName,
        ownerName: business.ownerName,
        email: business.email,
        phone: business.phone,
        category: business.category,
        address: business.address,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

app.get("/api/businesses", async (req, res) => {
  try {
    const businesses = await Business.find({}, "-password").sort({ createdAt: -1 });
    res.json(businesses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not fetch businesses." });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Spotly backend running on http://localhost:${PORT}`);
});
