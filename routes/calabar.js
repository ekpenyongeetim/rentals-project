const router = require("express").Router();

const calabarController = require("../controllers/calabar");
const validation = require("../middleware/validate");
// endpoints
router.get("/", calabarController.getAll);

router.get("/:id", calabarController.getSingle);

router.post("/", validation.saveCalabar, calabarController.createRental);

router.put("/:id", validation.saveCalabar, calabarController.updateRental);

router.delete("/:id", calabarController.deleteRental);

module.exports = router;
