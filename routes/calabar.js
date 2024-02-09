const router = require("express").Router();

const calabarController = require("../controllers/calabar");

// endpoints
router.get("/", calabarController.getAll);

router.get("/:id", calabarController.getSingle);

router.post("/", calabarController.createRental);

router.put("/:id", calabarController.updateRental);

router.post("/:id", calabarController.deleteRental);

module.exports = router;
