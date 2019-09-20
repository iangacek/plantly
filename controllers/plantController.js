const db = require("../models");

// Defining methods for the plantController
module.exports = {
  findAll: function(req, res) {
    db.Plant.find(req.query)
      .then(dbPlant => res.json(dbPlant))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Plant.findById(req.params.id)
      .then(dbPlant => res.json(dbPlant))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Plant.create(req.body)
      .then(dbPlant => res.json(dbPlant))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Plant.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbPlant => res.json(dbPlant))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Plant.findById(req.params.id)
      .then(dbPlant => dbPlant.remove())
      .then(dbPlant => res.json(dbPlant))
      .catch(err => res.status(422).json(err));
  }
};