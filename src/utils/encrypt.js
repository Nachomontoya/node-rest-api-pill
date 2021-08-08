const bcrypt = require("bcrypt");
const { config } = require("../config");

async function encryptPassword(password) {
  const salt = await bcrypt.genSalt(Number(config.encrypt.salt));
  const encryptedPass = await bcrypt.hash(password, salt);
  return encryptedPass;
}

async function comparePassword(password1, password2) {
  const comparedPass = await bcrypt.compare(password1, password2);
  return comparedPass;
}

// async function compare() {
//   try {
//     const prueba = await encryptPassword("123456");
//     const result = await comparePassword("123456", prueba);
//     console.log(result);
//   } catch (err) {}
// }

// compare();

module.exports = {
  encryptPassword: encryptPassword,
  comparePassword: comparePassword,
};
