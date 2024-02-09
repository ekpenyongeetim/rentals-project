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

const createRental = async (req, res) => {
  const rental = {
    id: req.body.id,
    photos: req.body.photos,
    address: req.body.address,
    city: req.body.city,
    rating: req.body.city,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("calabar")
    .insertOne(rental);
  if (response.acknowledge) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || "Some error occurred while updating the rental.");
  }
};

const updateRental = async (req, res) => {
  const calabarId = new ObjectId(req.params.id);
  const rental = {
    id: req.body.id,
    photos: req.body.photos,
    address: req.body.address,
    city: req.body.city,
    rating: req.body.city,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("calabar")
    .replaceOne({ _id: calabarId }, rental);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || "Some error occurred while updating the user.");
  }
};

const deleteRental = async (req, res) => {
  const calabarId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("calabar")
    .deleteOne({ _id: calabarId });
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || "Some error occurred while updating the user.");
  }
};
module.exports = {
  getAll,
  getSingle,
  createRental,
  updateRental,
  deleteRental,
};
