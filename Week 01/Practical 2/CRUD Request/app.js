const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Got a GET request.");
});

app.post("/", (req, res) => {
  res.send("Got a POST request.");
});

app.put("/", (req, res) => {
  res.send("Got a PUT request.");
});

app.delete("/", (req, res) => {
  res.send("Got a DELETE request.");
});

app.listen(8000, () => {
  console.log("Server connected successfully!");
});
