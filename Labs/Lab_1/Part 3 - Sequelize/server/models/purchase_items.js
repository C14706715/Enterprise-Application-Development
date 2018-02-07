'use strict';
module.exports = (sequelize, DataTypes) => {
  var purchase_items = sequelize.define('purchase_items', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    purchase_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    price: DataTypes.NUMERIC,
    quantity: DataTypes.INTEGER,
    state: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    timestamps: false
  });
  return purchase_items;
};
