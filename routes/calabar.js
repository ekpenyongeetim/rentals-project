const router = require("express").Router();

const calabarController = require("../controllers/calabar");
const { IsAuthenticated } = require("../middleware/authenticate");
const validation = require("../middleware/validate");
// endpoints
router.get("/", calabarController.getAll);

router.get("/:id", calabarController.getSingle);
router.post(
  "/",
  IsAuthenticated,
  validation.saveCalabar,
  calabarController.createRental
);
router.put(
  "/:id",
  IsAuthenticated,
  validation.saveCalabar,
  calabarController.updateRental
);
router.delete("/:id", IsAuthenticated, calabarController.deleteRental);

module.exports = router;
