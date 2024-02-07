const router = require("express").Router();

const calabarController = require("../controllers/calabar");

router.get("/", calabarController.getAll);

router.get("/:id", calabarController.getSingle);

module.exports = router;
