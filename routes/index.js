const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.use("/calabar", require("./calabar"));

module.exports = router;
