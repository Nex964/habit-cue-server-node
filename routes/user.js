var express = require("express");
var router = express.Router();
let controller = require("../controllers/user.controller");


router.get("/", controller.get);
router.post("/", controller.create);

module.exports = router;
