const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");

const {
  userRouter,
  movieRouter,
  personRouter,
  authRouter,
} = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(json());
app.use(helmet());

app.use("/movies", movieRouter);
app.use("/persons", personRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);

app.get("/", function (req, res) {
  res.status(200).send({
    author: "nacho montoya",
    version: "1.0.0",
    description: "This is a pill to learn how to create a rest API",
  });
});

module.exports = app;
