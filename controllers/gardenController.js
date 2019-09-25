const db = require("../models");

// Defining methods for the gardenController
module.exports = {
  findAll: function(req, res) {
    db.garden.find(req.query)
      .then(garden => res.json(garden))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.garden.findById(req.params.id)
      .then(garden => res.json(garden))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.garden.create(req.body)
      .then(garden => res.json(garden))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.garden.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(garden => res.json(garden))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.garden.findById(req.params.id)
      .then(garden => garden.remove())
      .then(garden => res.json(garden))
      .catch(err => res.status(422).json(err));
  }
};