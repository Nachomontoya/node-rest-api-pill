const Router = require("express").Router;

const personRouter = Router();

personRouter.get("/", (req, res) => {
  res.json("This is the persons page");
});

module.exports = {
  personRouter: personRouter,
};
