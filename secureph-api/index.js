// Import Express and initialize Express app
const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory "database" of citizen records
let citizens = [
  {
    id: 1,
    name: "Juan dela Cruz",
    sss_id: "CL-12345",
    philhealth_id: "PH-67890",
  },
  {
    id: 2,
    name: "Maria Clara",
    sss_id: "CL-54321",
    philhealth_id: "PH-09876",
  },
];

// Define the port the server will run on
const PORT = 3000;

// Simple API Key Authentication Middleware
const apiKeyAuth = (req, res, next) => {
    const apiKey = req.header("X-API-Key");
    if (apiKey && apiKey === "supersecretkey123") {
        next();
    } else {
        // If key is missing or invalid, send an error
        res.status(401).json({ error: "Unauthorized: Missing or invalid API Key" });
    }
}

// Basic homepage route
app.get("/", (req, res) => {
  res.send("Welcome to the SecurePH API");
});

// GET endpoint to retrieve all citizens
app.get("/api/citizens", (req, res) => {
  console.log("Request received for all citizens.");
  res.json(citizens);
});

// POST endpoint to add a new citizen with applied middleware
app.post("/api/citizens", apiKeyAuth, (req, res) => {
  // Get the data from the request body
  const newCitizen = req.body;

  // Basic validation
  if (!newCitizen.name || !newCitizen.sss_id || !newCitizen.philhealth_id) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Create a new ID
  newCitizen.id = citizens.length + 1;

  // Add the new citizen to the in-memory database
  citizens.push(newCitizen);
  console.log(`Added new citizen: ${JSON.stringify(newCitizen)}`);

  // Return the newly created citizen with a 201 status code
  res.status(201).json(newCitizen);
});

// Start the server and listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
