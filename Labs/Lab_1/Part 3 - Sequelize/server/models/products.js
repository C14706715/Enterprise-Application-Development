'use strict';
module.exports = (sequelize, DataTypes) => {
  var products = sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    price: DataTypes.NUMERIC,
    created_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE,
    tags: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    timestamps: false
  });
  return products;
};