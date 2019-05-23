'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profiles', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {});
  Profile.associate = function (models) {
    Profile.hasMany(models.User, { foreignKey: 'profileId', sourceKey: 'id' });
  };
  return Profile;
};