const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const movieSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: Number,
    },
    genres: {
      type: [String],
    },
    duration: {
      type: String,
    },
    cast: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "person",
      },
    ],
    crew: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "person",
      },
    ],
  },
  {
    timestamps: true,
  },
);

const movieModel = mongoose.model("movies", movieSchema);

module.exports = movieModel;
