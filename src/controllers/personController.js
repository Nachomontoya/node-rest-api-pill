const db = require("../models");

async function getPersons(req, res, next) {
  try {
    const persons = await db.Person.find().limit();

    res.status(200).send({
      data: persons,
    });
  } catch (err) {
    next(err);
  }
}

async function createPerson(req, res, next) {
  try {
    const { firstName, lastName, dateOfBirth, placeOfBirth, roles } = req.body;

    const newPerson = await db.Person.create({
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      placeOfBirth: placeOfBirth,
      roles: roles,
    });

    res.status(200).send({
      data: newPerson,
    });
  } catch (error) {
    next(error);
  }
}

async function updatePerson(req, res, next) {
  const { id: personId } = req.params;

  try {
    const updatedPerson = await db.Person.findByIdAndUpdate(
      personId,
      req.body,
      {
        new: true,
      },
    );

    res.status(200).send({
      data: updatedPerson,
    });
  } catch (error) {
    next(error);
  }
}

async function deletePerson(req, res, next) {
  const { id: personId } = req.params;

  try {
    const result = await db.Person.deleteOne({ _id: personId });

    if (result.ok === 1 && result.deletedCount === 1) {
      res.status(200).send({
        data: "Person removed",
      });
    } else {
      res.status(500).send({
        error: "Person not removed",
      });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getPersons: getPersons,
  createPerson: createPerson,
  updatePerson: updatePerson,
  deletePerson: deletePerson,
};
