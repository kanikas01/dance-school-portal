module.exports = function(sequelize, DataTypes) {
  let Grade = sequelize.define("Grade", {
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Date cannot be blank."
        }
      }
    },
    score: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Score cannot be blank."
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Please enter type."
        }
      }
    },
    detail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Please enter detail."
        }
      }
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Grade;
};