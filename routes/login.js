const Router = require("express");
const router = Router();
const fs = require("fs");
const path = require("path");
let data = fs.readFileSync(path.join(__dirname, "../public/db/users.json"), {
  encoding: "utf8",
  flag: "r",
});

const users = JSON.parse(data);

router.post("/login", (req, res) => {
  const { login, password } = req.body;

  const foundUser = users.filter(
    (e) => e.login === login && e.password === password
  );

  foundUser.length ? res.render("payment") : res.render("error");
});

module.exports = router;
