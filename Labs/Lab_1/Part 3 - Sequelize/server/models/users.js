'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    details: DataTypes.HSTORE,
    created_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    timestamps: false
  });
  return users;
);