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
    level: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Level cannot be blank."
        }
      }
    },
    questionType: {
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

  Grade.associate = function(models) {
    Grade.belongsTo(models.User);
    Grade.belongsTo(models.Dance);
  };

  return Grade;
};