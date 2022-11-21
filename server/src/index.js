const express = require("express");
require("dotenv").config();
const api = require("./api/router");

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({
    message: "Hello BEDEE",
  });
});

app.use("/api", api);

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
