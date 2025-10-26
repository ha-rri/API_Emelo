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

// Basic homepage route
app.get("/", (req, res) => {
  res.send("Welcome to the SecurePH API");
});

// Start the server and listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
