const db = require("../models");
const axios = require("axios");
const Op = db.Sequelize.Op;

// Defining methods for the usersController
module.exports = {
  findOne: function(req, res) {
    db.User
      .findOne({
        where: {id: req.params.id},
        include: [{
          model: db.Role,
          where: { id: db.Sequelize.col('User.RoleId') }
        }]
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAll: function(req, res) {
    db.User
      .findAll({
        include: [{
          model: db.Role,
          where: { id: db.Sequelize.col('User.RoleId') }
        }]
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  search: function(req, res) {
    // Choose which scopes to include based on query params
    let query = [];
    for (let param in req.query) {
      if (param === 'firstName') {
        query.push({ method: ['firstName', req.query[param]] });
      }
      if (param === 'lastName') {
        query.push({ method: ['lastName', req.query[param]] });
      }
      if (param === 'email') {
        query.push({ method: ['email', req.query[param]] });
      }
      if (param === 'roleId') {
        query.push({ method: ['roleId', req.query[param]] });
      }
      if (param === 'isActive') {
        query.push({ method: ['isActive', req.query[param]] });
      }
      if (param === 'onMarketingList') {
        query.push({ method: ['onMarketingList', req.query[param]] });
      };
    }

    // Execute query
    db.User
      .scope(...query)
      .findAll({
        include: [{
          model: db.Role,
          where: { id: db.Sequelize.col('User.RoleId') }
        }],
        order: [
          ['firstName', 'ASC'],
        ]
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

  update: function(req, res) {
    db.User
      .update(
        { 
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
          isActive: req.body.isActive,
          onMarketingList: req.body.onMarketingList,
        },
        { returning: true, where: {id: req.params.id} })
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
