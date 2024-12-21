var express = require("express");
var router = express.Router();
let controller = require("../controllers/habit-task.controller");


router.get("/", controller.get);
router.post("/", controller.create);

module.exports = router;
