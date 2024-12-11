const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userModel"); // Import the User model
const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB URI
const dbUri =
  "mongodb+srv://rajkamalpal:57JpsgOFN6c5HBpv@rishitinder.sxbp4.mongodb.net/?retryWrites=true&w=majority&appName=RishiTinder";

// Connect to MongoDB
const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri, {
      dbName: "Test", // Specify the database name
    });
    console.log("DB connected successfully");
  } catch (error) {
    console.error("DB connection error:", error);
  }
};

connectDB(dbUri);

// POST Route: Signup
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // Validate request body
  if (!name || !email || !password) {
    return res
      .status(400)
      .send("All fields (name, email, password) are required.");
  }

  // Create a new user
  const user = new User({ name, email, password });

  try {
    await user.save(); // Save the user to the database
    res.send("User added successfully");
  } catch (err) {
    console.error("Error saving the user:", err.message); // Log error for debugging
    if (err.code === 11000) {
      res.status(400).send("Email already exists.");
    } else {
      res.status(400).send("Error saving the user: " + err.message);
    }
  }
});

//Get user by Email
app.get("/user", async (req, res) => {
  const userEmail = req.body.email;

  try {
    const users = await User.find({ email: userEmail });
    if (users.length === 0) {
      res.status(404).send("User Not Found---Enter a valid user");
    } else {
      res.send(users);
    }
  } catch (error) {
    res.status(400).send("Something went Wrong");
  }
});

// find all the Data of the collection

app.get("/allData",async(req,res)=>{
  try {
    const users=await User.find({});
    res.send(users);
    
  } catch (error) {
    res.status(400).send("Something went Wrong");
    
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
