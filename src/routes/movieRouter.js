const Router = require("express").Router;

const movieRouter = Router();

movieRouter.get("/", (req, res) => {
  res.json("This is the movies page");
});

module.exports = {
  movieRouter: movieRouter,
};
