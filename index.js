const express = require("express");
const app = express();
const cors = require("cors");
const chefs = require("./chifs.json");
const recipes = require("./recipes.json");

const port = process.env.PORT || 5000;
app.use(cors());

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefs.find((chef) => chef.id === id);
  res.send(selectedChef);
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;
  const selectedRecipes = recipes.filter((recipe) => recipe.chef_id === id);
  res.send(selectedRecipes);
});

app.listen(port, () => {
  console.log(`express running port in ${port}`);
});
