const Router = require("express");
const router = Router();
const login = require("./login");
const home = require("./home");
const payment = require("./payment");

router.use(login);
router.use(home);
router.use(payment);

module.exports = router;
