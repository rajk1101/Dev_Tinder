const mongoose = require("mongoose");

// Define the User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
  },
  email: {
    type: String,
    required: true, // Email is required
    unique: true, // Prevent duplicate emails
  },
  password: {
    type: String,
    required: true, // Password is required
  },
});

// Create and Export the Model
module.exports = mongoose.model("User", userSchema);
