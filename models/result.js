'use strict';
module.exports = (sequelize, DataTypes) => {
  var Result = sequelize.define('Result', {
    company_code: DataTypes.STRING,
    name: DataTypes.STRING,
    sanitized_name: DataTypes.STRING,
    value: DataTypes.DOUBLE,
    year: DataTypes.STRING,
    type: DataTypes.STRING,
  }, {});
  Result.associate = function(models) {
    Result.belongsTo(models.Company, { as: 'company' });
  };
  return Result;
};
