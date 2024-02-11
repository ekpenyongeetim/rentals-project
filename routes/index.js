const router = require("express").Router();
const passport = require("passport");

router.use("/", require("./swagger"));
router.use("/calabar", require("./calabar"));
router.use("/abuja", require("./abuja"));

router.get("/login", passport.authenticate("github"), (req, res) => {});

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
