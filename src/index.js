const app = require("./server");
const { config } = require("./config");
const connect = require("./db/connect");

//* Uncoment to get the functions to seed the database
// const { populateMovies, populatePersons, populateUsers } = require("./db/seed");

connect().then(async function onServerInit() {
  console.log("DB Connected");

  //* Uncoment to seed the database
  // await populatePersons();
  // await populateUsers();
  // await populateMovies();
});

app.listen(config.app.port, () => {
  console.log(`Server running at http://localhost:${config.app.port}`);
});
