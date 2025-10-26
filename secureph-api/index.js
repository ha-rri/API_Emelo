// Import Express and initialize Express app
const express = require("express");
const app = express();

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
