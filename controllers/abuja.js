const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

const getAll = (req, res) => {
  mongodb
    .getDatabase()
    .db()
    .collection("abuja")
    .find()
    .toArray((err, lists) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
};

const getSingle = (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("Must use a valid contact id to find a rental.");
  }
  const abujaId = new ObjectId(req.params.id);
  mongodb
    .getDatabase()
    .db()
    .collection("abuja")
    .find({ _id: abujaId })
    .toArray((err, result) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(calabar[0]);
    });
};

const createRental = async (req, res) => {
  const rental = {
    id: req.body.id,
    title: req.body.title,
    location: req.body.location,
    description: req.body.description,
    price: req.body.price,
    currency: req.body.currency,
    bedrooms: req.body.bedrooms,
    bathrooms: req.body.bathrooms,
    size: req.body.size,
    amenities: req.body.amenities,
    images: req.body.images,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("abuja")
    .insertOne(rental);
  if (response.acknowledge) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || "Some error occurred while creating the rental.");
  }
};

const updateRental = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("Must use a valid contact id to update a rental.");
  }
  const abujaId = new ObjectId(req.params.id);
  const rental = {
    id: req.body.id,
    title: req.body.title,
    location: req.body.location,
    description: req.body.description,
    price: req.body.price,
    currency: req.body.currency,
    bedrooms: req.body.bedrooms,
    bathrooms: req.body.bathrooms,
    size: req.body.size,
    amenities: req.body.amenities,
    images: req.body.images,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("abuja")
    .replaceOne({ _id: abujaId }, rental);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || "Some error occurred while updating rental.");
  }
};

const deleteRental = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("Must use a valid contact id to delete a rental.");
  }
  const abujaId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("abuja")
    .deleteOne({ _id: abujaId });
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || "Some error occurred while deleting rentals.");
  }
};
module.exports = {
  getAll,
  getSingle,
  createRental,
  updateRental,
  deleteRental,
};
