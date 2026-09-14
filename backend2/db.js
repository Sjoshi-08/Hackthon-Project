/* =========================================================
   DATABASE CONNECTIONS
   Creates TWO separate database connections on the same
   MongoDB cluster: one for users, one for businesses.
========================================================= */

require("dotenv").config();
const mongoose = require("mongoose");

// Your MongoDB Atlas connection string, WITHOUT a database name
// at the end (or with one - either works, it gets replaced below).
// Example: mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
const BASE_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";

// Inserts / replaces the database name in a MongoDB connection string,
// so the same cluster can host two independently-named databases.
function withDatabase(uri, dbName) {
  const protoIndex = uri.indexOf("://") + 3;
  const [beforeQuery, query] = uri.split("?");
  const pathStart = beforeQuery.indexOf("/", protoIndex);
  const base = pathStart === -1 ? beforeQuery : beforeQuery.substring(0, pathStart);
  return `${base}/${dbName}${query ? "?" + query : ""}`;
}

const usersConnection = mongoose.createConnection(withDatabase(BASE_URI, "spotly_users"));
const businessConnection = mongoose.createConnection(withDatabase(BASE_URI, "spotly_business"));

usersConnection.on("connected", () => {
  console.log("Connected to USERS database:", usersConnection.name);
});
usersConnection.on("error", (err) => {
  console.error("Users database connection error:", err.message);
});

businessConnection.on("connected", () => {
  console.log("Connected to BUSINESS database:", businessConnection.name);
});
businessConnection.on("error", (err) => {
  console.error("Business database connection error:", err.message);
});

module.exports = { usersConnection, businessConnection };
