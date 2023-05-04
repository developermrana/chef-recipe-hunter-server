const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const chefs = require("./chifs.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("express js is running");
});

app.listen(port, () => {
  console.log(`express running port in ${port}`);
});
