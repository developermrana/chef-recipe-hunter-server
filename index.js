const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const chefs = require("./chifs.json");
const recipes = require("./recipes.json");

app.use(cors());

app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.listen(port, () => {
  console.log(`express running port in ${port}`);
});
