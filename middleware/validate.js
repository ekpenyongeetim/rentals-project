const validator = require("../helpers/validate");

const saveCalabar = (req, res, next) => {
  const validationRule = {
    id: "string",
    address: "required|string",
    city: "required|string",
    rating: "string",
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Validation failed",
        data: err,
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveCalabar,
};
