const Sequelize = require("sequelize");
Op = Sequelize.Op;

module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "First name cannot be blank."
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Last name cannot be blank."
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Please enter a valid email address."
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "You must choose a password."
        }
      }
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      default: true
    },
    onMarketingList: {
      type: DataTypes.BOOLEAN,
      default: false,
      validate: {
        notEmpty: {
          msg: "City cannot be blank."
        }
      }
    }
  },{
    defaultScope: {
    },
    scopes: {
      firstName (value) {
        return {
          where: { 
            firstName: {
              [Op.like]: `${value}%`
            } 
          }
        }
      },
      lastName (value) {
        return {
          where: { 
            lastName: {
              [Op.like]: `${value}%`
            } 
          }
        }
      },
      email (value) {
        return {
          where: { 
            email: {
              [Op.like]: `${value}%`
            } 
          }
        }
      },
      roleId (value) {
        return {
          where: { RoleId: value }
        }
      },
      isActive (value) {
        return {
          where: { isActive: value }
        }
      },
      onMarketingList (value) {
        return {
          where: { onMarketingList: value }
        }
      }
    }
  });

  // Associate User with Grades
  // When a User is deleted, also delete any associated Grades
  User.associate = function(models) {
    User.hasMany(models.Grade, {
      onDelete: "cascade"
    });

    // Associate each User with a Role
    User.belongsTo(models.Role);
  };

  return User;
};
