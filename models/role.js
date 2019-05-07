module.exports = function(sequelize, DataTypes) {
  let Role = sequelize.define("Role", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Role name cannot be blank."
        }
      }
    }
  });

  return Role;
};
