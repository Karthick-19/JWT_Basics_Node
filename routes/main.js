const mainController = require("../controllers/main");
const authMiddleware = require("../middleware/auth");
const exp = require("express");
const router = exp.Router();

//Protecting this route with authentication (JWT token)
router.route("/dashboard").get(authMiddleware, mainController.dashboard);
router.route("/login").post(mainController.login);

module.exports = router;
