const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDatabase().db().collection("calabar").find();
  result.toArray().then((calabar) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(calabar);
  });
};

const getSingle = async (req, res) => {
  const calabarId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDatabase()
    .db()
    .collection("calabar")
    .find({ _id: calabarId });
  result.toArray().then((calabar) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(calabar[0]);
  });
};

module.exports = {
  getAll,
  getSingle,
};
