'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    name: DataTypes.TEXT
  }, {});
  Roles.associate = function(models) {
    // associations can be defined here
  };
  return Roles;
};