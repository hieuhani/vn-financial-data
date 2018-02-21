'use strict';
module.exports = (sequelize, DataTypes) => {
  var Company = sequelize.define('Company', {
    code: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  Company.associate = function(models) {
    Company.hasMany(models.Result, { as: 'results' })

  };
  return Company;
};