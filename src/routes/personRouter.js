const Router = require("express").Router;
const { personController } = require("../controllers");

const personRouter = Router();

personRouter.get("/", personController.getPersons);

module.exports = {
  personRouter: personRouter,
};
