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

// async function updateMovie(req, res, next) {
//   const { id: movieId } = req.params;
//   const { firstName, lastName, roles } = req.body;

//   try {
//     const updatedPerson = await db.Person.findOneAndUpdate(
//       {
//         _id: personId,
//       },
//       {
//         $set: {
//           firstName: firstName,
//           lastName: lastName,
//           roles: roles,
//         },
//       },
//       {
//         new: true,
//       },
//     ).select({
//       firstName: 1,
//       lastName: 1,
//       roles: 1,
//     });

//     res.status(200).send({
//       data: updatedPerson,
//     });
//   } catch (error) {
//     next(error);
//   }
// }

async function deleteMovie(req, res, next) {
  const { id: movieId } = req.params;

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
  getMovies: getMovies,
  // updatePerson: updatePerson,
  deleteMovie: deleteMovie,
};
