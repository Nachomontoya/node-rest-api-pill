const db = require("../models");

// async function signUp(req, res, next) {
//   const { email, password, firstName, lastName } = req.body;

//   try {
//     const encryptedPassword = await encryptString(password);
//     const { _id } = await db.User.create({
//       email: email,
//       password: encryptedPassword,
//       firstName: firstName,
//       lastName: lastName,
//       isAdmin: true,
//     });

//     return res.status(200).send({
//       id: _id,
//       email,
//     });
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// }

async function getUsers(req, res, next) {
  try {
    const users = await db.User.find();

    res.status(200).send({
      data: users,
    });
  } catch (err) {
    next(err);
  }
}

async function updateUser(req, res, next) {
  const { id: userId } = req.params;
  const { firstName, lastName } = req.body;

  try {
    const updatedUser = await db.User.findOneAndUpdate(
      {
        _id: userId,
      },
      {
        $set: {
          firstName: firstName,
          lastName: lastName,
        },
      },
      {
        new: true,
      },
    ).select({
      firstName: 1,
      lastName: 1,
    });

    res.status(200).send({
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  const { id: userId } = req.params;

  try {
    const result = await db.User.deleteOne({ _id: userId });

    if (result.ok === 1 && result.deletedCount === 1) {
      res.status(200).send({
        data: "User removed",
      });
    } else {
      res.status(500).send({
        error: "User not removed",
      });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getUsers: getUsers,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
