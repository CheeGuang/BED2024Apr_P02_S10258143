const express = require("express");

const app = express();

// Get Request
app.get("/", (req, res) => {
  res.send("Got a GET request.");
});

// Post Request
app.post("/", (req, res) => {
  res.send("Got a POST request.");
});

// Put Request
app.put("/", (req, res) => {
  res.send("Got a PUT request.");
});

// Delete Request
app.delete("/", (req, res) => {
  res.send("Got a DELETE request.");
});

app.listen(8000, () => {
  console.log("Server connected successfully!");
});
