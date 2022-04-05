const Router = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/payment", (req, res) => {
  res.render("payment");
});

module.exports = router;
