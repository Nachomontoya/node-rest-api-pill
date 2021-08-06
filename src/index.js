const app = require("./server");
const { config } = require("./config");
const connect = require("./db/connect");

const { populateMovies, populatePersons, populateUsers } = require("./db/seed");

connect().then(async function onServerInit() {
  console.log("DB Connected");

  await populatePersons();
  await populateUsers();
  await populateMovies();
});

app.listen(config.app.port, () => {
  // config.logger.info(`Server running at http://localhost:${config.app.PORT}`);
  console.log(`Server running at http://localhost:${config.app.port}`);
});
