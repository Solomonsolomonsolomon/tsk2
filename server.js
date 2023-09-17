const http = require("http");
const makeApp = require("./app");
const database = require("./model/database");
const app = makeApp(database);
const server = http.createServer(app);
server.listen(2000, () => {
  console.log("working port 2000");
});
