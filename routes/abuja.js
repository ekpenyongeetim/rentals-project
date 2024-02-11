const router = require("express").Router();

const abujaController = require("../controllers/abuja");
const { IsAuthenticated } = require("../middleware/authenticate");
// endpoints
router.get("/", abujaController.getAll);
router.get("/:id", abujaController.getSingle);
router.post("/", IsAuthenticated, abujaController.createRental);
router.put("/:id", IsAuthenticated, abujaController.updateRental);
router.delete("/:id", IsAuthenticated, abujaController.deleteRental);

module.exports = router;
