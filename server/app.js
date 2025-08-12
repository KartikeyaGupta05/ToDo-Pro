const dotenv = require("dotenv"); // Import dotenv for environment variables
dotenv.config(); // Load environment variables from .env file
const express = require("express"); // Import Express framework
const cors = require("cors"); // Import CORS middleware
const app = express(); // Create an Express application
const cookieParser = require("cookie-parser"); // Import cookie-parser middleware
const connectToDb = require("./db/db"); // Import the database connection function
const userRoutes = require("./routes/user.routes"); // Import user routes

connectToDb(); // Connect to the database

app.use(cors()); // Use CORS middleware to allow cross-origin requests
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(cookieParser()); // Use cookie-parser middleware to parse cookies

// Define a GET route for the root URL ("/")
// This will respond with "Hello, World!" when accessed in the browser or via Postman
app.get("/", (req, res) => {
  res.send("Hello, World!"); // Send plain text as the response
});

app.use("/users", userRoutes); // Use user routes for all /api/users requests

module.exports = app; // Export the Express application