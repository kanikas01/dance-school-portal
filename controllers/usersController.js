const db = require("../models");
const axios = require("axios");
const Op = db.Sequelize.Op;

// Defining methods for the usersController
module.exports = {
  findOne: function(req, res) {
    db.User
      .findOne({
        where: {id: req.params.id},
        attributes: { exclude: ['password'] }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAll: function(req, res) {
    db.User
      .findAll(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAllSafe: function(req, res) {
    db.User
      .findAll({
        attributes: { exclude: ['password'] },
        include: [{
          model: db.Role,
          where: { id: db.Sequelize.col('user.RoleId') }
        }]
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  search: function(req, res) {
    db.User
      .findAll({
        attributes: { exclude: ['password'] },
        include: [{
          model: db.Role,
          where: { id: db.Sequelize.col('user.RoleId') }
        }],
        where: {
          [Op.or]: [
            { firstName: { [Op.like]: `${req.query.firstName}%` } },
            { lastName: { [Op.like]: `${req.query.lastName}%` } },
            { email: { [Op.like]: `%${req.query.email}%` } },
            { isActive: { [Op.eq]: `${req.query.isActive}` } },
            { RoleId: { [Op.eq]: `${req.query.role}` } }
          ]
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  save: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  delete: function(req, res) {
    db.User
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
