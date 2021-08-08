const db = require("../models");

async function getMovies(req, res, next) {
  try {
    const movies = await db.Movie.find().limit();

    res.status(200).send({
      data: movies,
    });
  } catch (err) {
    next(err);
  }
}

async function createMovie(req, res, next) {
  try {
    const { title, releaseYear, genres, duration, cast, crew } = req.body;

    const newMovie = await db.Movie.create({
      title: title,
      releaseYear: releaseYear,
      genres: genres,
      duration: duration,
      cast: cast,
      crew: crew,
    });

    res.status(200).send({
      data: newMovie,
    });
  } catch (error) {
    next(error);
  }
}

async function updateMovie(req, res, next) {
  const { movieId: movieId } = req.params;

  try {
    const updatedMovie = await db.Movie.findByIdAndUpdate(movieId, req.body, {
      new: true,
    });

    res.status(200).send({
      data: updatedMovie,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteMovie(req, res, next) {
  const { movieId: movieId } = req.params;

  try {
    const result = await db.Movie.deleteOne({ _id: movieId });

    if (result.ok === 1 && result.deletedCount === 1) {
      res.status(200).send({
        data: "Movie removed",
      });
    } else {
      res.status(500).send({
        error: "Movie not removed",
      });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createMovie: createMovie,
  getMovies: getMovies,
  updateMovie: updateMovie,
  deleteMovie: deleteMovie,
};
