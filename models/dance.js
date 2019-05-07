module.exports = function(sequelize, DataTypes) {
  let Dance = sequelize.define("Dance", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Dance name cannot be blank."
        }
      }
    },
    quarter: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Quarter name cannot be blank."
        }
      }
    }
  });

  return Dance;
};
