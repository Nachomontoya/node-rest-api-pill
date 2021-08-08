const Router = require("express").Router;
const { movieController } = require("../controllers");

const movieRouter = Router();

movieRouter.patch("/:movieId", movieController.updateMovie);
movieRouter.delete("/:movieId", movieController.deleteMovie);
movieRouter.get("/", movieController.getMovies);
movieRouter.post("/", movieController.createMovie);

module.exports = {
  movieRouter: movieRouter,
};
