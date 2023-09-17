let instance;
const child = require("child_process");
const { stderr } = require("process");
class Index {
  constructor() {
    if (instance) return instance;
    instance = this;
  }
  getIndexRoute(req, res) {
    res
      .status(200)
      .send(
        "Welcome to my api 🎉🎉✨ \n if you're lost.. \n visit \n /health for server health \n  /api to perform crud operations "
      );
  }
  getHealthRoute(req, res) {
    res.status(200).send("server up and running...👋");
  }
  use404Route(req, res) {
    res
      .status(404)
      .send(
        "you've stumbled too far,Route not found \n if you're lost.. \n visit \n /health for server health \n  /api to perform crud operations"
      );
  }
  runTests(req, res) {
    console.log("here hit");
    child.exec("npm run test", (err, stdOut, stdErr) => {
      if (err) throw err;
      res.status(200).json({
        msg: "test output",
        test: stdOut,
        testErr: stdErr,
      });
    });
  }
}
let index = Object.freeze(new Index());
module.exports = index;
