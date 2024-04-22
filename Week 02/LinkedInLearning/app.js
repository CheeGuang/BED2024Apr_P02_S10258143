const express = require("express");
const data = require("./data/MOCK_DATA.json");

const app = express();

// ======================== Middleware ===========================
app.use(express.static("public"));
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ======================== Default CRUD ===========================
// GET Request
app.get("/", (req, res) => {
  res.send("Got a GET request.");
});

// POST - express.json and express.urlencoded
app.post("/item", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// POST Request
app.post("/", (req, res) => {
  res.send("Got a POST request.");
});

// PUT Request
app.put("/", (req, res) => {
  res.send("Got a PUT request.");
});

// DELETE Request
app.delete("/", (req, res) => {
  res.send("Got a DELETE request.");
});

// ======================== Download ===========================
// GET - download method
app.get("/download", (req, res) => {
  res.download("images/oliver.jpg");
});

// ======================== Redirect ===========================
// GET - redirect
app.get("/redirect", (req, res) => {
  res.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});

// ======================== Class Routing ===========================
app
  .route("/class")
  .get((req, res) => {
    res.send(data);
    // throw new Error();
  })
  .post((req, res) => {
    res.send("Create class info.");
  })
  .put((req, res) => {
    res.send("Updated class info.");
  })
  .delete((req, res) => {
    res.send("Got a DELETE request.");
  });

// GET Request with JSON data
// app.get("/class", (req, res) => {
//   res.send(data);
// });

// GET Request with Routing
app.get("/class/:id", (req, res) => {
  const studentID = Number(req.params.id);
  student = data.filter((student) => student.id === studentID);
  res.send(student);
});

// ======================== Next ===========================
// GET Request with Next function
app.get(
  "/next",
  (req, res, next) => {
    console.log("The response will be sent by the next function");
    next();
  },
  (req, res) => {
    res.send("Just setted up a route with a second callback");
  }
);

// ======================== Error ===========================
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something is broken!");
});

app.listen(8000, () => {
  console.log("Server connected successfully!");
});
