const db = require("../models");

async function getPersons(req, res, next) {
  try {
    const persons = await db.Person.find().lean();

    res.status(200).send({
      data: persons,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getPersons: getPersons,
};
