const routes = (app) => {
  app
    .route("/contact")
    .get(
      (req, res, next) => {
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request from: ${req.method}`);
        next();
      },
      (req, res) => {
        res.send("GET request successful");
      }
    )
    .post((req, res) => res.send("POST request successful"));

  app
    .route("/contact/:contactId")
    .put((req, res) => res.send("PUT request successful"))
    .delete((req, res) => res.send("DELETE request successful"));
};

export default routes;
