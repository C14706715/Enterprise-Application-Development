'use strict';
module.exports = (sequelize, DataTypes) => {
  var purchases = sequelize.define('purchases', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    created_at: DataTypes.DATE,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    timestamps: false
  });
  return purchases;
};
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About