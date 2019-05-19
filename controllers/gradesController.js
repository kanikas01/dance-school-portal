const db = require("../models");
const axios = require("axios");

// Defining methods for the gradesController
module.exports = {
  findAllForUser: function(req, res) {
    db.Grade
      .findAll({
        where: {
          UserId: req.params.id
        },
        include: [{
          model: db.Dance,
          where: { id: db.Sequelize.col('Grade.DanceId') }
        }]
      })
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.Grade
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  save: function(req, res) {
    db.Grade
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  delete: function(req, res) {
    db.Grade
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
