const Router = require("express").Router;

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.json("This is the users page");
});

module.exports = {
  userRouter: userRouter,
};
