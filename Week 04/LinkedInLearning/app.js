const express = require("express");
import routes from "./src/routes/crmRoutes.js";

const app = express();
const PORT = 3000;

routes(app);
app.get("/", (req, res) => {
  res.send(`Node and express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Node and express server is running on port ${PORT}`);
});
