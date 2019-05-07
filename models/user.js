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
    onMarketingList: {
      type: DataTypes.BOOLEAN,
      default: false,
      validate: {
        notEmpty: {
          msg: "City cannot be blank."
        }
      }
    }
  });

  // Associate each user with a role
  

  // Associating User with Grades
  // When a User is deleted, also delete any associated Grades
  User.associate = function(models) {
    User.hasMany(models.Grade, {
      onDelete: "cascade"
    });
    User.belongsTo(models.Role);
  };

  return User;
};
