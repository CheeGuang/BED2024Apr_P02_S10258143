import("chalk")
  .then((chalk) => {
    console.log(chalk.default.yellow("Hello, world!"));
  })
  .catch((error) => {
    console.error("Failed to load the chalk module:", error);
  });
