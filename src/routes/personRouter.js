const Router = require("express").Router;
const { personController } = require("../controllers");

const personRouter = Router();

personRouter.get("/", personController.getPersons);
personRouter.patch("/:id", personController.updatePerson);
personRouter.delete("/:id", personController.deletePerson);

module.exports = {
  personRouter: personRouter,
};
